import PropTypes from 'prop-types';
import { useState, useEffect } from "react";

import { useRouter } from 'next/router'

import Header from "./header";
import Footer from "./footer";

import { PATHS } from "../../constant";

LandingLayout.propTypes = {
  children: PropTypes.node,
};

export default function LandingLayout ({ children }) {
  const router = useRouter()
  const [backgroundImage, setBackgroundImage] = useState(null);
  
  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = "/assets/imgs/landing/landing_background.jpg";
    imageLoader.onload = () => {
      console.log("loaded!!!");
      setBackgroundImage("/assets/imgs/landing/landing_background.jpg");
    };
  }, []);
  return (
    <>
      {backgroundImage !== null && (
        <div className="w-full min-h-screen flex flex-col justify-between bg-[url('/assets/imgs/landing/landing_background.jpg')] bg-cover bg-no-repeat bg-center px-[22px] py-5">
          <Header />
          <main>
            {/* <Outlet /> */}
            { children }
          </main>
          {router.pathname !== PATHS.ANALYTICS && <Footer />}
        </div>
      )}
    </>
  );
};