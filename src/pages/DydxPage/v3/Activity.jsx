import { useEffect, useState, useRef, useCallback, useContext } from "react";
import { DydxClient } from "@dydxprotocol/v3-client";
import Web3 from "web3";
import Skeleton from "react-loading-skeleton";
import { useMedia } from "react-use";
import "react-loading-skeleton/dist/skeleton.css";

import * as CONSTANT from "../../../constant";
import BarChart from "../../../components/BarChart";
import DropDown from "../../../components/DropDown";
import CoinsMenu from "../../../components/DropDown/CoinsMenu";
import env from "../../../env";

import { CoinListContext } from "../../../contexts/CoinListContext";
import { getCoins } from "../../../common";

const HTTP_HOST = env.API_URL;

const web3 = new Web3(env.RPC_URL);
const client = new DydxClient(HTTP_HOST, {
  starkPrivateKey: env.STARK_PRIVATE_KEY,
  web3: web3,
  apiKeyCredentials: {
    key: env.STARK_API_KEY,
    passphrase: env.STARK_PASS_PHRASE,
    secret: env.STARK_SECRET_KEY,
  },
});

const DISPLAY_COUNT_LIST = {
  10: "Last 10",
  20: "Last 20",
  50: "Last 50",
  100: "Last 100",
};

const BORDER_RADIUS = {
  10: 7,
  20: 5,
  50: 4,
  100: 3,
};

const Activity = () => {
  const [coins, setCoins] = useState([]);
  const [selectedInterval, setSelectedInterval] = useState("15MINS");
  const [selectedCoin, setSelectedCoin] = useState("All Coins");
  const [selectedDisplay, setSelectedDisplay] = useState("100");
  const [chartData, setChartData] = useState([]);
  const [candleData, setCandleData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [timeLabel, setTimeLabel] = useState([]);

  const [coinData, setCoinData] = useState([]);
  const { selectedCoinList, setSelectedCoinList } = useContext(CoinListContext);
  const timeInterval = useRef(undefined);
  const DISPLAY_X_COUNT = parseInt(selectedDisplay);
  const below800 = useMedia("(max-width: 800px)");

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
      setCoins(data);
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

  useEffect(() => {
    if (timeInterval.current) clearInterval(timeInterval.current);
    if (selectedCoinList.length > 0) setLoading(true);
    else {
      setCandleData([]);
      return;
    }
    async function fetchCandleData() {
      let tmp = [];
      for (let coin of selectedCoinList) {
        try{
          const data = await client.public.getCandles({
            market: coin + "-USD",
            resolution: selectedInterval,
          });
          tmp.push(data.candles);
        } catch (e) {
          console.log ("fetchCandleData failed", e.message)
        }
      }
      setCandleData(tmp);
    }
    timeInterval.current = setInterval(
      async () => await fetchCandleData(),
      CONSTANT["INTERVAL"][selectedInterval][1]
    );
    
    fetchCandleData();
  }, [selectedCoinList, selectedInterval]);

  useEffect(() => {
    if (below800) setSelectedDisplay("10");
    else setSelectedDisplay("100");
  }, [below800]);

  const getDataSet = useCallback(() => {
    if (candleData.length === 0) {
      setLoading(false);
      setChartData({});
      return;
    }

    if (candleData.length !== selectedCoinList.length) return

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
      tmpLabel.push(pams[pamId]);
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
    setChartData({
      labels: tmpLabel,
      datasets: tmpDataset,
    });
    setLoading(false);
  }, [candleData, DISPLAY_X_COUNT]);

  useEffect(() => {
    getDataSet();
  }, [getDataSet]);

  return (
    <div className="flex flex-col rounded-sm w-full bg-secondary p-[112px] h-full absolute top-[64px]">
      <div className="flex flex-row justify-between px-[18px] py-[24px] space-x-3 bg-dropdown rounded-t-lg border border-primary">
        <div className="flex flex-row space-x-3">
          <CoinsMenu data={coinData} width={114} defaultValue={selectedCoin} />
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
        </div>
        <DropDown
          data={Object.keys(DISPLAY_COUNT_LIST).map((key) => {
            return { key: key, value: DISPLAY_COUNT_LIST[key] };
          })}
          type="display"
          setLoading={setLoading}
          btnstr=""
          defaultValue={"100"}
          width={110}
          setSelectedValue={(value) => {
            setSelectedDisplay(value);
          }}
        />
      </div>
      {loading && (
        <div
          className="px-[16px] pt-[13px] pb-[19px] border-b border-r border-l border-primary bg-v3-primary rounded-b-lg"
          style={{ height: "calc(100vh - 409px)" }}
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
            style={{ height: "calc(100vh - 409px)" }}
          >
            <span className="absolute left-0 right-0 top-0 bottom-0 flex flex-col justify-center items-center z-10 text-skeleton text-[42px] font-black leading-8">Please choose a coin to see data</span>
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
            style={{ height: "calc(100vh - 409px)" }}
          >
            <BarChart
              selectedCoin={selectedCoin}
              chartData={chartData}
              coins={coins}
              timeLabel={timeLabel}
              setLoading={setLoading}
              setSelectedValue={(value) => {
                setSelectedCoin(value);
              }}
            />
          </div>
        )}
    </div>
  );
};

export default Activity;
