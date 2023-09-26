import { useCallback, useEffect, useMemo, useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Activity from "./pages/Activity";
import Header from "./layouts/Header";

import {CoinListContext} from './contexts/CoinListContext'

export default function App() {
  const [selectedCoinList, setSelectedCoinList] = useState([])

  const contextValue = useMemo(
    () => ({selectedCoinList, setSelectedCoinList}),
    [selectedCoinList]
  )

  return (
    <CoinListContext.Provider value={contextValue}>
      <section className="bg-body-bgcolor min-h-screen">
        <div className="flex flex-col">
          <BrowserRouter>
            <Header />
            {useMemo(() => (
              <Routes>
                <Route path="/" element={<Activity />} />
              </Routes>
            ), [])}
          </BrowserRouter>
        </div>
      </section>
    </CoinListContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);