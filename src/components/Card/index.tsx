import React from 'react';
import {
  Card as MuiCard,
  CardMedia,
  Typography,
  CardContent,
  CardActionArea,
  Paper,
} from '@material-ui/core';

import {ICountries} from '../../interfaces';
import useStyles from './styles';

interface IProps {
  country: ICountries;
  onClick(): void;
}

const Card: React.FC<IProps> = ({country, onClick}) => {
  const {root, media} = useStyles();

  return (
    <MuiCard className={root} component={Paper} elevation={3} onClick={onClick}>
      <CardActionArea>
        <CardMedia
          className={media}
          image={country.flag.svgFile}
          title={localStorage.getItem(`${country._id}:name`) || country.name}
        />

        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            <strong>Name:</strong>{' '}
            {localStorage.getItem(`${country._id}:name`) || country.name}
          </Typography>

          <Typography gutterBottom variant="h6" component="h2">
            <strong>Capital:</strong>{' '}
            {localStorage.getItem(`${country._id}:capital`) || country.capital}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
};

export default Card;
