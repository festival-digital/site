/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
import Provider from 'state/store';
import '@resystem/design-system/dist/main.css';
import 'styles/main.css';
import Main from 'components/main/main';
import { StoreProvider, reducer, initialState } from 'components/store/Store';

export default class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
    this.dispatch = this.dispatch.bind(this);
  }

  dispatch(action) {
    this.setState((prevState) => reducer(prevState, action));
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider>
        <StoreProvider
          value={{
            state: this.state,
            dispatch: this.dispatch,
          }}
        >
          <Main>
            <Component {...pageProps} />
          </Main>
        </StoreProvider>
      </Provider>
    );
  }
}
