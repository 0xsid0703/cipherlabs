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
