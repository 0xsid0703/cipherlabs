import { useMemo, useState } from 'react'
import { Route, Routes } from "react-router-dom";

import LandingLayout from "./layouts/LandingLayout";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import AboutUsPage from "./pages/AboutUsPage";
import DydxPage from "./pages/DydxPage";
import Activity from "./pages/DydxPage/v3/Activity";

import { CoinListContext } from "./contexts/CoinListContext";

import { PATHS } from "./constant";

function App() {
  const [selectedCoinList, setSelectedCoinList] = useState([]);

  const contextValue = useMemo(
    () => ({ selectedCoinList, setSelectedCoinList }),
    [selectedCoinList]
  );

  return (
    <CoinListContext.Provider value={contextValue}>
      <div className="align-middle">
        <Routes>
          <Route element={<LandingLayout />}>
            <Route path="/" element={<LandingPage />} />
          </Route>
          <Route element={<AppLayout />}>
            <Route path={PATHS.TERMSOFUSE} element={<TermsOfUsePage />} />
            <Route path={PATHS.PRIVACY} element={<PrivacyPolicyPage />} />
            <Route path={PATHS.ABOUTUS} element={<AboutUsPage />} />
            <Route path={PATHS.DYDX} element={<DydxPage />} />
            <Route path={PATHS.ANALYTICS} element={<Activity />} />
          </Route>
        </Routes>
      </div>
    </CoinListContext.Provider>
  );
}

export default App;
