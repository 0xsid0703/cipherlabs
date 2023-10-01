import PropTypes from 'prop-types';

import { useRouter } from 'next/router'

import Header from "./header";
import Footer from "./footer";

import { PATHS } from "../../constant";

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default function AppLayout ({ children }) {
  const router = useRouter()

  return (
    <div className="w-full h-screen flex flex-col justify-between bg-[url('/assets/imgs/landing/app_background.jpg')] bg-cover bg-no-repeat bg-center overflow-auto overscroll-y-scroll no-scrollbar">
      <Header />
      <main>
        {/* <Outlet /> */}
        { children }
      </main>
      {router.pathname !== PATHS.ANALYTICS && <Footer />}
    </div>
  );
};