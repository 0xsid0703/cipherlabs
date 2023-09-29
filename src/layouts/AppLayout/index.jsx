import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from "./header";
import Footer from "./footer";

import { PATHS, METAINFO } from "../../constant";
import TwitterAnalytics from "../../assets/twitter-analytics.jpg"

const AppLayout = () => {
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
  
  const twitter = window.location.pathname === PATHS.ANALYTICS ? TwitterAnalytics : undefined
  return (
    <div className="w-full h-screen flex flex-col justify-between bg-[url('/imgs/landing/app_background.jpg')] bg-cover bg-no-repeat bg-center overflow-auto overscroll-y-scroll no-scrollbar">
      <Helmet>
        <meta charset="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        {twitter && <meta name="twitter:image" content={twitter} />}
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
