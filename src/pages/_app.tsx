import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';
import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import type { AppProps } from 'next/app';

import { createClient } from '@apollo/withApollo';
import DefaultLayout from '@layouts/Default';
import theme from '@styles/theme';

import 'normalize.css';
import '../styles/reset.css';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  const client = createClient(pageProps);

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>boilerplate</title>
      </Head>

      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
