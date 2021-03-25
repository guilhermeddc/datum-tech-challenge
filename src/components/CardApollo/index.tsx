import React from 'react';
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActionArea,
  Paper,
} from '@material-ui/core';

import {ICountryApollo} from '../../interfaces';
import useStyles from './styles';

interface IProps {
  country: ICountryApollo;
}

const CardApollo: React.FC<IProps> = ({country}) => {
  const {root, media} = useStyles();

  return (
    <Card className={root} component={Paper} elevation={3}>
      <CardActionArea>
        <CardMedia
          className={media}
          image={country.flag.svgFile}
          title={country.name}
        />

        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            <strong>Name:</strong> {country.name}
          </Typography>

          <Typography gutterBottom variant="h6" component="h2">
            <strong>Capital:</strong> {country.capital}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardApollo;
