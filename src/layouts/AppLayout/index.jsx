import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from "./header";
import Footer from "./footer";

import { PATHS, METAINFO } from "../../constant";

const AppLayout = () => {
  const title =
    window.location.pathname === PATHS.DYDX
      ? METAINFO.DYDX.title
      : window.location.pathname === PATHS.ABOUTUS
      ? METAINFO.ABOUTUS.title
      : METAINFO.HOME.title;
  const description =
    window.location.pathname === PATHS.DYDX
      ? METAINFO.DYDX.description
      : window.location.pathname === PATHS.ABOUTUS
      ? METAINFO.ABOUTUS.description
      : METAINFO.HOME.description;
  return (
    <div className="w-full h-screen flex flex-col justify-between bg-[url('/imgs/landing/app_background.jpg')] bg-cover bg-no-repeat bg-center overflow-auto overscroll-y-scroll no-scrollbar">
      <Helmet>
        <meta charset="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
