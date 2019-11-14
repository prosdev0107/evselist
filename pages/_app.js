import React from 'react';
import "semantic-ui-css/semantic.min.css"
import './_app.css';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import CookieConsent from '../Components/CookieConsent';
import withData from '../utils/apollo-client';

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <>
        <CookieConsent />
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </>
    );
  }
}

export default withData(MyApp);
