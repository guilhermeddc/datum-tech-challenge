import React from 'react';
import {Avatar, Container, Toolbar, Box} from '@material-ui/core';
import {GitHub, LinkedIn} from '@material-ui/icons';

import useStyles from './styles';

interface IProps {}

const Header: React.FC<IProps> = ({children}) => {
  const {root, grid, large} = useStyles();
  return (
    <Container className={root}>
      <Box className={grid}>
        <Box>{children}</Box>
        <Toolbar id="back-to-top-anchor" />
        <Box>
          <Box display="flex" alignItems="center" gridGap={16}>
            <a
              href="https://github.com/guilhermeddc"
              target="_blank"
              rel="noreferrer">
              <GitHub color="secondary" fontSize="large" />
            </a>
            <a
              href="https://www.linkedin.com/in/guilhermeddc/"
              target="_blank"
              rel="noreferrer">
              <LinkedIn color="secondary" fontSize="large" />
            </a>
            <Avatar
              alt="Guilherme Rodrigues"
              src="https://github.com/guilhermeddc.png"
              className={large}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
