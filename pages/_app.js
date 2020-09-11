/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
import '@resystem/design-system/dist/main.css';
import Main from 'components/main/main';

export default class MyApp extends App {
  constructor(props) {
    super(props);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Main>
        <Component {...pageProps} />
      </Main>
    );
  }
}
