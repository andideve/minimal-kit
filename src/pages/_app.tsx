import type { AppProps } from 'next/app';
import React from 'react';
import { Provider, Theme } from '@andideve/ids-react';
import { Global } from '@emotion/react';

import { globalStyles } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider sysColorMatcherPrefered="media">
      <Global styles={(theme) => globalStyles(theme as Theme)} />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
