import React from 'react';
import {CssBaseline, ThemeProvider} from '@material-ui/core';

import ApolloProvider from '../apollo';
import theme from '../styles/theme';
import Routes from '../routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider>
        <Routes />
        <CssBaseline />
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
