// scroll bar
import 'simplebar/src/simplebar.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

import PropTypes from 'prop-types';
import cookie from 'cookie';
// next
import Head from 'next/head';
import App from 'next/app';
//react
import { useState, useMemo } from 'react'
import { CoinListContext } from "../contexts/CoinListContext";

import './global.css'
// ----------------------------------------------------------------------

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default function MyApp(props) {
  const [selectedCoinList, setSelectedCoinList] = useState([]);
  const { Component, pageProps } = props;

  const contextValue = useMemo(
    () => ({ selectedCoinList, setSelectedCoinList }),
    [selectedCoinList]
  );

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="title" content="Cipher Lab" key="title" />
        <meta name="description" content="Crafting tools & analytics, providing elite solutions for DeFi trading." key="description" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Cipher Lab" key="twitter:title" />
        <meta name="twitter:description" content="Crafting tools & analytics, providing elite solutions for DeFi trading." key="twitter:description" />
        <meta name="twitter:image" content="/assets/opengraph-image.png" key="twitter:image" />

        <meta property="og:url" content="https://www.cipherlabs.xyz" key="og:url" />
        <meta property="og:title" content="Cipher Lab" key="og:title" />
        <meta property="og:description" content="Crafting tools & analytics, providing elite solutions for DeFi trading." key="og:description" />
        <meta property="og:image" content="/assets/opengraph-image.png" key="og:image" />
      </Head>

      <CoinListContext.Provider value={contextValue}>
        {getLayout(<Component {...pageProps} />)}
      </CoinListContext.Provider>
    </>
  );
}

// ----------------------------------------------------------------------

MyApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);

  const cookies = cookie.parse(context.ctx.req ? context.ctx.req.headers.cookie || '' : document.cookie);

  return {
    ...appProps,
  };
};
