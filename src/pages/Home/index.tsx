import React, {useEffect, useState, useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import {useQuery} from '@apollo/client';

import {ICountries, ILoadCountries} from '../../interfaces';
import {LOAD_COUNTRIES} from '../../graphQL/queries';

import Card from '../../components/Card';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import ScrollTop from '../../components/ScrollTop';

import {
  Grid,
  Container,
  Fab,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import {KeyboardArrowUp, Search} from '@material-ui/icons';

import useStyles from './styles';

interface IProps {
  window?: () => Window;
  children: React.ReactElement;
}

const Home: React.FC<IProps> = (props) => {
  const [countries, setCountries] = useState<ICountries[]>([]);
  const [countriesFiltered, setCountriesFiltered] = useState<ICountries[]>([]);
  const [searching, setSearching] = useState('');

  const {root, margin} = useStyles();
  const history = useHistory();
  const {loading, error, data} = useQuery<ILoadCountries>(LOAD_COUNTRIES);

  useEffect(() => {
    if (data) setCountries(data.Country);
  }, [data]);

  const handleCountryDetail = useCallback(
    (_id: string) => {
      history.push(`/detail/${_id}`);
    },
    [history],
  );

  const handleFilterApollo = useCallback(
    (countries: ICountries[], search: string, setSearch) => {
      const filtered = countries?.filter((item) => {
        return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      });

      setSearch(filtered);
    },
    [],
  );

  const handleChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearching(event.target.value);
    },
    [],
  );

  useEffect(() => {
    handleFilterApollo(countries, searching, setCountriesFiltered);
  }, [handleFilterApollo, countries, searching, setCountriesFiltered]);

  if (loading) return <Loading active={loading} />;

  if (error) return <p>Error... </p>;

  return (
    <>
      <Header>
        <TextField
          className={margin}
          placeholder="Search..."
          variant="outlined"
          value={searching}
          onChange={handleChangeInput}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Header>

      <Container className={root}>
        <Grid container spacing={2}>
          {(searching.length > 2 ? countriesFiltered : countries)?.map(
            (item: ICountries, index: number) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <Card
                  country={item}
                  onClick={() => handleCountryDetail(item._id)}
                />
              </Grid>
            ),
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
