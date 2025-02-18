'use client'
/* eslint-disable react/no-find-dom-node */
/* eslint-disable jsx-a11y/alt-text */
import dynamic from 'next/dynamic'
import { useEffect, useState, useRef, useCallback, useContext } from "react";
import { DydxClient } from "@dydxprotocol/v3-client";
import Web3 from "web3";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import download from 'downloadjs';
import { toPng } from 'html-to-image'

import Layout from '../../../layouts';

import Page from '../../../components/Page';
import { METAINFO } from '../../../constant';

import useWindowSize from "../../../hooks/useWindowSize";

import * as CONSTANT from "../../../constant";
// import BarChart from "../../../components/BarChart";
import DropDown from "../../../components/DropDown";
import CoinsMenu from "../../../components/DropDown/CoinsMenu";
import {dydx_env} from "../../../env";

import { CoinListContext } from "../../../contexts/CoinListContext";
import { getCoins } from "../../../common/dydx";
import { formattedNum } from '../../../utils';

const DOWNLOAD = "/assets/imgs/dydx/download.svg"

Activity.getLayout = function getLayout(page) {
  return <Layout variant="volume">{page}</Layout>;
};

const BarChart = dynamic(() => import('../../../components/BarChart'), { ssr: false });
// const ExportPng = dynamic(() => import('react-component-export-image'), { ssr: false });

const HTTP_HOST = dydx_env.API_URL;

const web3 = new Web3(dydx_env.RPC_URL);
const client = new DydxClient(HTTP_HOST, {
  starkPrivateKey: dydx_env.STARK_PRIVATE_KEY,
  web3: web3,
  apiKeyCredentials: {
    key: dydx_env.STARK_API_KEY,
    passphrase: dydx_env.STARK_PASS_PHRASE,
    secret: dydx_env.STARK_SECRET_KEY,
  },
});

const DISPLAY_COUNT_LIST = {
  10: "Last 10",
  20: "Last 20",
  50: "Last 50",
  100: "Last 100",
};

const PADDING = {
  10: 35,
  20: 27,
  50: 23,
  100: 30,
}

const BORDER_RADIUS = {
  10: 7,
  20: 5,
  50: 4,
  100: 3,
};

export default function Activity() {
  const [selectedInterval, setSelectedInterval] = useState("15MINS");
  const [selectedCoin, setSelectedCoin] = useState("All Coins");
  const [selectedDisplay, setSelectedDisplay] = useState("100");
  const [chartData, setChartData] = useState([]);
  const [candleData, setCandleData] = useState([]);
  const [loading, setLoading] = useState(false);
  const size = useWindowSize()

  const [timeLabel, setTimeLabel] = useState([]);

  const [coinData, setCoinData] = useState([]);
  const { selectedCoinList, setSelectedCoinList } = useContext(CoinListContext);
  const timeInterval = useRef(undefined);
  const DISPLAY_X_COUNT = parseInt(selectedDisplay);
  const [below600, setBelow600] = useState(false)

  const [average, setAverage] = useState(0);
  const [datasum, setDatasum] = useState(0);

  const getCoinsData = useCallback(async () => {
    try {
      const data = await getCoins();

      setCoinData(
        data.map((coin) => {
          return {
            key: coin["market"],
            value: coin["baseAsset"],
          };
        })
      );
      setSelectedCoinList(
        data.map((coin) => coin["market"].replace("-USD", ""))
      );
    } catch (e) {
      console.log("getCoins ===> ", e);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getCoinsData();
  }, [getCoinsData]);

  const fetchCandleData = async () => {
    let tmp = [];
    for (let coin of selectedCoinList) {
      try {
        const data = await client.public.getCandles({
          market: coin + "-USD",
          resolution: selectedInterval,
        });
        console.log("HHHH: ", data)
        tmp.push(data.candles);
      } catch (e) {
        console.log("fetchCandleData failed", e.message);
      }
    }
    setCandleData(tmp);
  };

  useEffect(() => {
    setBelow600(size.width < 600)
  }, [size.width])

  useEffect(() => {
    if (timeInterval.current) clearInterval(timeInterval.current);
    if (selectedCoinList.length > 0) setLoading(true);
    else {
      // setCandleData([]);
      return;
    }
    timeInterval.current = setInterval(
      async () => await fetchCandleData(),
      CONSTANT["INTERVAL"][selectedInterval][1]
    );

    fetchCandleData();
  }, [selectedCoinList, selectedInterval]);

  useEffect(() => {
    if (below600) setSelectedDisplay("10");
    else setSelectedDisplay("100");
  }, [below600]);

  const getDataSet = useCallback(async () => {
    if (candleData.length === 0) {
      setLoading(false);
      setChartData({});
      return;
    }
    if (
      candleData.length !== selectedCoinList.length &&
      selectedCoinList.length > 0
    ) {
      await fetchCandleData();
      return;
    }
    let tmp;
    if (
      selectedCoinList.length > 0 &&
      candleData[0][0] &&
      candleData[0][0]["startedAt"]
    )
      tmp = candleData[0];
    else {
      setLoading(false);
      setChartData({});
      return;
    }
    let tmpLabel = [];
    let tmpTimeLabel = [];
    let pamId = 0;
    if (selectedInterval !== "1DAY") pamId = 1;
    for (let i = 0; i < DISPLAY_X_COUNT; i++) {
      let c = tmp[DISPLAY_X_COUNT - i - 1];
      let time = new Date(c["startedAt"]);
      let utcValue = time.valueOf() - time.getTimezoneOffset() * 60000;
      tmpTimeLabel.push(utcValue);
      let startAt = new Date(utcValue).toJSON();
      let pams = startAt.slice(0, startAt.length - 8).split("T");
      // tmpLabel.push(pams[pamId]);
      tmpLabel.push(new Intl.DateTimeFormat('en-AU', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
      }).format(new Date(c["startedAt"])))
    }
    setTimeLabel(tmpTimeLabel);

    let tmpDataset = [];
    for (let c of candleData) {
      let d = {};
      d["label"] = c[0]["market"];
      d["data"] = c
        .slice(0, DISPLAY_X_COUNT)
        .reverse()
        .map((item) => item["usdVolume"]);
      d["backgroundColor"] =
        CONSTANT["COIN_COLORS"][d["label"].replace("-USD", "")][0];
      d["stack"] = "Stack 0";
      d["borderRadius"] = BORDER_RADIUS[selectedDisplay];
      tmpDataset.push(d);
    }

    let sum = 0, tmpdatasum=0;
    // eslint-disable-next-line react/prop-types
    for (let ds of tmpDataset) {
      let p = 0;
      for (let d of ds.data) {
        p += Number(d);
        tmpdatasum += Number(d)
      }
      if (ds.data.length > 0) sum += p / ds.data.length;
    }
    setAverage(sum);
    setDatasum(tmpdatasum)


    setChartData({
      labels: tmpLabel,
      datasets: tmpDataset,
    });
    setLoading(false);
  }, [candleData, DISPLAY_X_COUNT]);

  useEffect(() => {
    getDataSet();
  }, [getDataSet]);

  const barRef = useRef ()

  const onScreenShot = () => {
    toPng(barRef.current)
    .then(function (dataUrl) {
      download(dataUrl, 'cipher-labs.png', 'image/png');
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error);
    });
  }

  return (
    <>
    <Page title={METAINFO.ANALYTICS.title} description={METAINFO.ANALYTICS.description} twitter={METAINFO.ANALYTICS.twitter}>
      <div className="flex flex-col rounded-sm w-full bg-secondary p-4 md:p-[112px] absolute top-[65px] bottom-0 right-0 left-0">
        {!below600 && (
          <div className="flex flex-row justify-between px-[18px] py-[24px] space-x-3 bg-dropdown rounded-t-lg border border-primary">
            <div className="flex flex-row space-x-3">
              <CoinsMenu
                data={coinData}
                width={114}
                defaultValue={selectedCoin}
              />
              <DropDown
                data={Object.keys(CONSTANT["INTERVAL"])?.map((key) => {
                  return { key: key, value: CONSTANT["INTERVAL"][key][0] };
                })}
                type="interval"
                setLoading={setLoading}
                btnstr=""
                defaultValue={"15MINS"}
                setSelectedValue={(value) => {
                  setSelectedInterval(value);
                }}
              />
            </div>
            <div className='flex flex-row items-center justify-center gap-2'>
              <img src={DOWNLOAD} className='w-5 h-5 cursor-pointer' onClick={onScreenShot} />
              <DropDown
                data={Object.keys(DISPLAY_COUNT_LIST).map((key) => ({ key: key, value: DISPLAY_COUNT_LIST[key] }))}
                type="display"
                setLoading={setLoading}
                btnstr=""
                defaultValue={selectedDisplay}
                setSelectedValue={(value) => {
                  setSelectedDisplay(value);
                }}
              />
            </div>
          </div>
        )}
        {below600 && (
          <div className="flex flex-col justify-between p-4 sm:px-[18px] sm:py-[24px] bg-dropdown rounded-t-lg border border-primary">
            <div className="flex flex-row w-full">
              <CoinsMenu
                data={coinData}
                width={114}
                defaultValue={selectedCoin}
              />
            </div>
            <div className="grid grid-cols-2  mt-4 gap-4 jutify-between">
              <DropDown
                data={Object.keys(CONSTANT["INTERVAL"])?.map((key) => {
                  return { key: key, value: CONSTANT["INTERVAL"][key][0] };
                })}
                type="interval"
                setLoading={setLoading}
                btnstr=""
                defaultValue={"15MINS"}
                width={77}
                setSelectedValue={(value) => {
                  setSelectedInterval(value);
                }}
              />
              <DropDown
                data={Object.keys(DISPLAY_COUNT_LIST).map((key) => {
                  return { key: key, value: DISPLAY_COUNT_LIST[key] };
                })}
                type="display"
                setLoading={setLoading}
                btnstr=""
                defaultValue={selectedDisplay}
                width={110}
                setSelectedValue={(value) => {
                  setSelectedDisplay(value);
                }}
              />
            </div>
          </div>
        )}
        {loading && (
          <div
            className="px-[16px] pt-[13px] pb-[19px] border-b border-r border-l border-primary bg-v3-primary rounded-b-lg"
            style={{ height: "100vh" }}
          >
            <Skeleton
              baseColor="#232334"
              style={{ height: "100%" }}
              highlightColor="#444157"
            />
          </div>
        )}
        {!loading &&
          !(chartData && chartData.datasets && chartData.datasets.length > 0) && (
            <div
              className="px-[16px] pt-[13px] pb-[19px] border-b border-r border-l relative border-primary bg-v3-primary rounded-b-lg"
              style={{ height: "100vh" }}
            >
              {/* <span className="absolute left-0 right-0 top-0 bottom-0 flex flex-col justify-center items-center z-10 text-skeleton text-[42px] font-black leading-8">
                Please choose a coin to see data
              </span> */}
              <Skeleton
                baseColor="#232334"
                style={{ height: "100%" }}
                highlightColor="#444157"
              />
            </div>
          )}
        {!loading &&
          chartData &&
          chartData.datasets &&
          chartData.datasets.length > 0 && (
            <div
              className="px-5 py-8 border-b border-r border-l border-primary bg-v3-primary rounded-b-lg"
              style={{ height: "100vh" }}
            >
              <BarChart
                selectedCoin={selectedCoin}
                chartData={chartData}
                timeLabel={timeLabel}
                height="100%"
              />
            </div>
          )}
      </div>
      {/* {below600 && <img src={DOWNLOAD} className='absolute bottom-5 right-5 w-5 h-5 cursor-pointer' onClick={onScreenShot} />} */}
    </Page>
    <div className="absolute -z-[1] bg-dropdown border border-primary w-[1200px]" id="twitterCard" ref={barRef}>
        <div className='flex flex-row py-7 px-8 items-center justify-between'>
          <div className='flex flex-row items-center gap-[18px]'>
            <div className='flex flex-row items-center text-v3-white text-[32px] font-black'>{CONSTANT["INTERVAL"][selectedInterval][0]}</div>
            <div className='flex flex-row items-center bg-header-bar rounded-[10px] text-lg font-black text-v3-gray px-4 py-[6px]'>
              time frame
            </div>
          </div>
          <div className='flex flex-row items-center gap-[18px]'>
            <div className='flex flex-row items-center text-v3-white text-[32px] font-black'>{DISPLAY_COUNT_LIST[selectedDisplay]}</div>
            <div className='flex flex-row items-center bg-header-bar rounded-[10px] text-lg font-black text-v3-gray px-4 py-[6px]'>
              periods
            </div>
          </div>
          <div className='flex flex-row items-center gap-[18px]'>
            <div className='flex flex-row items-center text-v3-white text-[32px] font-black'>{formattedNum(datasum, false, false, true)}</div>
            <div className='flex flex-row items-center bg-header-bar rounded-[10px] text-lg font-black text-v3-gray px-4 py-[6px]'>total volume</div>
          </div>
          <div className='flex flex-row items-center gap-[18px]'>
            <div className='flex flex-row items-center text-v3-white text-[32px] font-black'>{formattedNum(average, false, false, true)}</div>
            <div className='flex flex-row items-center bg-header-bar rounded-[10px] text-lg font-black text-v3-gray px-4 py-[6px]'>average volume</div>
          </div>
        </div>
        {!loading &&
          chartData &&
          chartData.datasets &&
          chartData.datasets.length > 0 && (
            <div
              className="relative px-5 py-8 bg-v3-primary rounded-b-lg"
              style={{ height: "584px" }}
            >
              <BarChart
                selectedCoin={selectedCoin}
                chartData={chartData}
                timeLabel={timeLabel}
                height="584px"
              />
              <div className={selectedDisplay === '100' ? 'absolute right-[30px] bottom-[10px] text-v3-primary text-[16px] font-black bg-header-bar px-[15px] py-[11px] rounded-[10px]' : 
                              selectedDisplay === '50' ? 'absolute right-[23px] bottom-[10px] text-v3-primary text-[16px] font-black bg-header-bar px-[15px] py-[11px] rounded-[10px]' : 
                              selectedDisplay === '20' ? 'absolute right-[27px] bottom-[10px] text-v3-primary text-[16px] font-black bg-header-bar px-[15px] py-[11px] rounded-[10px]' :
                              'absolute right-[35px] bottom-[10px] text-v3-primary text-[16px] font-black bg-header-bar px-[15px] py-[11px] rounded-[10px]' 
                              }>
                dYdX | cipherlabs.xyz
              </div>
            </div>
          )}
    </div>
    </>
  );
};