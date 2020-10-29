/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import 'cross-fetch/polyfill';
import React from 'react';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';
import nextWithApollo from 'next-with-apollo';

const GRAPH_URI = `${process.env.GRAPH_URI}`;
console.log('process.env.GRAPH_URI', process.env.GRAPHQL_URI);
const API_KEY = `${process.env.APP_KEY}`;

export const client = (initialState) =>
  new ApolloClient({
    uri: process.env.GRAPHQL_URI,
    cache: new InMemoryCache({ dataIdFromObject: () => Math.random() }).restore(
      initialState || {}
    ),
    request: (operation) => {
      operation.setContext({
        headers: {
          'x-api-key': process.env.APP_KEY || '',
        },
      });
    },
  });

export const withApollo = nextWithApollo(client, {
  getDataFromTree: 'ssr',
  render: ({ Page, props }) => {
    const { apollo } = props;
    return (
      <ApolloProvider client={apollo}>
        <Page {...props} />
      </ApolloProvider>
    );
  },
});
