import React, {useCallback, useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import {useDispatch, useSelector} from 'react-redux';

import {getCountries} from '../../redux/reducer/countries';
import {ALL_COUNTRIES} from '../../apollo/countries';

import CardRedux from '../../components/CardRedux';
import CardApollo from '../../components/CardApollo';

import {
  Grid,
  AppBar,
  Toolbar,
  Container,
  Fab,
  InputBase,
} from '@material-ui/core';
import {KeyboardArrowUp, Search} from '@material-ui/icons';
import ScrollTop from '../../components/ScrollTop';
import useStyles from './styles';

interface IProps {
  window?: () => Window;
  children: React.ReactElement;
}

const Home: React.FC<IProps> = (props) => {
  const [searching, setSearching] = useState('');

  const {search, searchIcon, inputInput, inputRoot} = useStyles();
  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state);
  const {loading, error, data: apolloData} = useQuery(ALL_COUNTRIES);

  const handleGetReduxCountries = useCallback(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      handleGetReduxCountries();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  if (loading) return <p>Loading... </p>;

  return (
    <>
      <AppBar>
        <Container>
          <Toolbar>
            <div className={search}>
              <div className={searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: inputRoot,
                  input: inputInput,
                }}
                value={searching}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearching(e.currentTarget.value)
                }
                inputProps={{'aria-label': 'search'}}
              />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      <br />
      <br />

      <Container>
        <Grid container spacing={2}>
          {(error ? reduxData : apolloData)?.Country?.map(
            (item: any, index: number) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                {error ? (
                  <CardRedux country={item} />
                ) : (
                  <CardApollo country={item} />
                )}
              </Grid>
            ),
          )}
        </Grid>
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUp />
          </Fab>
        </ScrollTop>
      </Container>
    </>
  );
};

export default Home;
