import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from "./header";
import Footer from "./footer";

import { PATHS, METAINFO } from "../../constant";
const TwitterAnalytics = "/twitter-analytics.jpg"
const TwitterHome = "/twitter-home.jpg"
const OpenGraph = "/opengraph-image.png"

const LandingLayout = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const title =
    window.location.pathname === PATHS.DYDX
      ? METAINFO.DYDX.title
      : window.location.pathname === PATHS.ABOUTUS
      ? METAINFO.ABOUTUS.title
      : window.location.pathname === PATHS.ANALYTICS
      ? METAINFO.ANALYTICS.title
      : METAINFO.HOME.title;
  const description =
    window.location.pathname === PATHS.DYDX
      ? METAINFO.DYDX.description
      : window.location.pathname === PATHS.ABOUTUS
      ? METAINFO.ABOUTUS.description
      : window.location.pathname === PATHS.ANALYTICS
      ? METAINFO.ANALYTICS.description
      : METAINFO.HOME.description;
  
  const twitter = window.location.pathname === PATHS.ANALYTICS ? TwitterAnalytics : TwitterHome

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = "/imgs/landing/landing_background.jpg";
    imageLoader.onload = () => {
      console.log("loaded!!!");
      setBackgroundImage("/imgs/landing/landing_background.jpg");
    };
  }, []);
  return (
    <>
      {backgroundImage !== null && (
        <div className="w-full min-h-screen flex flex-col justify-between bg-[url('/imgs/landing/landing_background.jpg')] bg-cover bg-no-repeat bg-center px-[22px] py-5">
          <Helmet>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta
              property="og:url"
              content={`https://dev.drflrk9jys9zx.amplifyapp.com${window.location.pathname}`}
            />
            <meta property="og:title" content={title} />
            <meta property="og:image" content={OpenGraph} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:image:src" content={twitter} />
            <meta property="og:description" content={description} />
            <title>{title}</title>
          </Helmet>
          <Header />
          <main>
            <Outlet />
          </main>
          {window.location.pathname !== PATHS.ANALYTICS && <Footer />}
        </div>
      )}
    </>
  );
};

export default LandingLayout;
