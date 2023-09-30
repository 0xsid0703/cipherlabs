import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "./header";
import Footer from "./footer";

import { PATHS, METAINFO } from "../../constant";
const TwitterAnalytics = "/twitter-analytics.jpg"
const TwitterHome = "/twitter-home.jpg"
const OpenGraph = "/opengraph-image.png"

const AppLayout = () => {
  const paths = window.location.href.replace ("https://", '').split("/")

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
  return (
    <div className="w-full h-screen flex flex-col justify-between bg-[url('/imgs/landing/app_background.jpg')] bg-cover bg-no-repeat bg-center overflow-auto overscroll-y-scroll no-scrollbar">
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:url" content={`${paths[0]}${window.location.pathname}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={OpenGraph} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image:src" content={twitter} />
      </Helmet>
      <Header />
      <main>
        <Outlet />
      </main>
      {window.location.pathname !== PATHS.ANALYTICS && <Footer />}
    </div>
  );
};

export default AppLayout;
