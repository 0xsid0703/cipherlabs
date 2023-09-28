import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from "./header";
import Footer from "./footer";

import { PATHS, METAINFO } from "../../constant";

const LandingLayout = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
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
      )}
    </>
  );
};

export default LandingLayout;
