import React from 'react';
import {Avatar, Grid, Container, Toolbar} from '@material-ui/core';

import useStyles from './styles';

interface IProps {}

const Header: React.FC<IProps> = ({children}) => {
  const {root, grid, large} = useStyles();
  return (
    <Container className={root}>
      <Toolbar />
      <Grid container spacing={2} className={grid}>
        <Grid item>{children}</Grid>
        <Grid item />
        <Grid item>
          <Avatar
            alt="Guilherme Rodrigues"
            src="https://github.com/guilhermeddc.png"
            className={large}
          />
        </Grid>
      </Grid>
      <Toolbar id="back-to-top-anchor" />
    </Container>
  );
};

export default Header;
