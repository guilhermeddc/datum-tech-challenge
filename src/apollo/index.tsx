import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://countries-274616.ew.r.appspot.com/',
  }),
});

const Apollo: React.FC = ({children}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Apollo;
