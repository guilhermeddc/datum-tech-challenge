import React from 'react';
import {CssBaseline, ThemeProvider} from '@material-ui/core';

import ApolloProvider from '../apollo';
import ReduxProvider from '../redux';
import theme from '../styles/theme';
import Routes from '../routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider>
        <ReduxProvider>
          <Routes />
          <CssBaseline />
        </ReduxProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
