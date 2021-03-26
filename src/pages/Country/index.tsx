import React, {useCallback, useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import {useParams, useHistory} from 'react-router-dom';
import {
  Box,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from '@material-ui/core';
import {
  BlurOn,
  Http,
  AccessibilityNew,
  LocationCity,
  ChevronLeft,
} from '@material-ui/icons';

import {LOAD_COUNTRY} from '../../graphQL/queries';
import {ICountry} from '../../interfaces';

import useStyles from './styles';
import Header from '../../components/Header';
import Loading from '../../components/Loading';

interface IParamsTypes {
  _id: string;
}

const Country: React.FC = () => {
  const [country, setCountry] = useState<ICountry>({} as ICountry);

  const {media, root} = useStyles();
  const history = useHistory();
  const {_id} = useParams<IParamsTypes>();

  const {loading, error, data} = useQuery(LOAD_COUNTRY, {
    variables: {_id: _id},
  });

  useEffect(() => {
    if (data) setCountry(data.Country[0]);
  }, [data]);

  const handleGoBackNavigator = useCallback(() => {
    history.goBack();
  }, [history]);

  if (loading && country) return <Loading active={loading} />;

  if (error) return <p>Error... </p>;

  return (
    <Container>
      <Header>
        <IconButton onClick={handleGoBackNavigator}>
          <ChevronLeft fontSize="large" color="secondary" />
        </IconButton>
      </Header>

      <Grid container>
        <Grid item xs={12}>
          <CardMedia
            className={media}
            image={country?.flag?.svgFile}
            title={country?.name}
          />
        </Grid>
        <Grid item xs={12} component={Paper} elevation={3} className={root}>
          <Typography variant="h1" align="center">
            {country?.name}
          </Typography>
          <br />
          <Divider />
          <br />
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3}>
              <Typography align="center">
                Domains:
                {country?.topLevelDomains?.map(
                  (item: {name: string}, index: number) => (
                    <Box
                      key={index}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      title="Domain">
                      <Http color="secondary" />
                      <strong>{item.name}</strong>
                    </Box>
                  ),
                )}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography align="center">
                Population:
                <Box
                  display="flex"
                  alignItems="center"
                  title="Population"
                  justifyContent="center">
                  <AccessibilityNew color="secondary" />
                  <strong>{country?.population}</strong>
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography align="center">
                Capital:
                <Box
                  display="flex"
                  alignItems="center"
                  title="Capital"
                  justifyContent="center">
                  <LocationCity color="secondary" />
                  <strong>{country?.capital}</strong>
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography align="center">
                Area:
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  title="Area"
                  textAlign="center">
                  <BlurOn color="secondary" />
                  <strong>{country?.area}</strong>
                </Box>
              </Typography>
            </Grid>
          </Grid>
          <br />
          <Divider />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Country;
