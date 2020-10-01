/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
import Provider from 'state/store';
// import '@resystem/design-system/dist/main.css';
import 'styles/main.css';
import Main from 'components/main/main';

export default class MyApp extends App {
  constructor(props) {
    super(props);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider>
        <Main>
          <Component {...pageProps} />
        </Main>
      </Provider>
    );
  }
}
