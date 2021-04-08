//-> pages/_app.tsx
import { ReactElement } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '@app/styles/global.css';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
