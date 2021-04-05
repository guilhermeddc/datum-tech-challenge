import React, {useCallback, useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import {useParams, useHistory} from 'react-router-dom';
import {
  Box,
  Grid,
  Modal,
  Paper,
  Divider,
  Container,
  CardMedia,
  Typography,
  IconButton,
  TextField,
  Button,
} from '@material-ui/core';
import {
  Http,
  Edit,
  BlurOn,
  ChevronLeft,
  LocationCity,
  AccessibilityNew,
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
  const [openModal, setOpenModal] = useState(false);

  const [name, setName] = useState('');
  const [domain, setDomain] = useState('');
  const [population, setPopulation] = useState('');
  const [capital, setCapital] = useState('');
  const [area, setArea] = useState('');

  const {media, root, modal, paper} = useStyles();
  const history = useHistory();
  const {_id} = useParams<IParamsTypes>();

  const {loading, error, data} = useQuery(LOAD_COUNTRY, {
    variables: {_id: _id},
  });

  useEffect(() => {
    if (data) setCountry(data.Country[0]);
  }, [data]);

  useEffect(() => {
    if (country && _id) {
      setName(localStorage.getItem(`${_id}:name`) || country.name);
      setPopulation(
        localStorage.getItem(`${_id}:population`) || String(country.population),
      );
      setCapital(localStorage.getItem(`${_id}:capital`) || country.capital);
      setArea(localStorage.getItem(`${_id}:area`) || String(country.area));
      if (country.topLevelDomains?.length > 0)
        setDomain(
          localStorage.getItem(`${_id}:domain`) ||
            country.topLevelDomains[0].name,
        );
    }
  }, [_id, country]);

  const handleGoBackNavigator = useCallback(() => {
    history.goBack();
  }, [history]);

  const handleStateModal = useCallback(() => {
    setOpenModal((state) => !state);
  }, []);

  const handleChangeName = useCallback((event) => {
    const {value} = event.target;

    setName(value);
  }, []);

  const handleChangeDomain = useCallback((event) => {
    const {value} = event.target;

    setDomain(value);
  }, []);

  const handleChangePopulation = useCallback((event) => {
    const {value} = event.target;

    setPopulation(value);
  }, []);

  const handleChangeCapital = useCallback((event) => {
    const {value} = event.target;

    setCapital(value);
  }, []);

  const handleChangeArea = useCallback((event) => {
    const {value} = event.target;

    setArea(value);
  }, []);

  const handleSeveEditCountry = useCallback(() => {
    localStorage.setItem(`${_id}:name`, name);
    localStorage.setItem(`${_id}:population`, String(population));
    localStorage.setItem(`${_id}:capital`, capital);
    localStorage.setItem(`${_id}:area`, String(area));
    localStorage.setItem(`${_id}:domain`, domain);

    handleStateModal();
  }, [_id, area, capital, domain, name, population, handleStateModal]);

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
            title={name}
          />
        </Grid>
        <Grid item xs={12} component={Paper} elevation={3} className={root}>
          <Typography variant="h1" align="center">
            {name}
          </Typography>
          <br />
          <Divider />
          <br />
          <Grid container spacing={2}>
            <Grid item xs={5} sm={2}>
              <Typography align="center">
                Domain:
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  title="Domain">
                  <Http color="secondary" />
                  <strong>{domain}</strong>
                </Box>
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
                  <strong>{population}</strong>
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
                  <strong>{capital}</strong>
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
                  <strong>{area}</strong>
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <IconButton onClick={handleStateModal}>
                <Edit color="secondary" />
              </IconButton>
            </Grid>
          </Grid>
          <br />
          <Divider />
        </Grid>
      </Grid>

      <Modal open={openModal} onClose={handleStateModal} className={modal}>
        <Paper className={paper} elevation={3}>
          <Typography variant="h4" align="center">
            Edit data for Country
          </Typography>

          <br />
          <Divider />
          <br />

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Name"
                value={name}
                onChange={handleChangeName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Domain"
                value={domain}
                onChange={handleChangeDomain}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Population"
                value={population}
                onChange={handleChangePopulation}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Capital"
                value={capital}
                onChange={handleChangeCapital}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Area"
                value={area}
                onChange={handleChangeArea}
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="flex-end" gridGap={16}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleStateModal}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleSeveEditCountry}>
                  Save
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </Container>
  );
};

export default Country;
