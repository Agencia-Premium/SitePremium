import GlobalStyle from '../styles/global';

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />    
      </Head>
      <Component {...pageProps} />
    </>
  ); 
}

export default MyApp;