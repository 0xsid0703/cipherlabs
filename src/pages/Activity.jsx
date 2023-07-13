import { useEffect, useState, useRef, useCallback } from "react";
import { DydxClient } from "@dydxprotocol/v3-client";
import Web3 from "web3";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import * as CONSTANT from "../constants";
import BarChart from "../components/BarChart"
import DropDown from "../components/DropDown"
import * as env from "../env"

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

const DISPLAY_X_COUNT = 100;

const Activity = () => {
  const [coins, setCoins] = useState([]);
  const [selectedInterval, setSelectedInterval] = useState("15MINS");
  const [selectedCoin, setSelectedCoin] = useState("ALL");
  const [chartData, setChartData] = useState([]);
  const [candleData, setCandleData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [timeLabel, setTimeLabel] = useState([])

  const [coinData, setCoinData] = useState ([])

  const timeInterval = useRef(undefined);

  useEffect(() => {
    setLoading(true);
    client.public
      .getMarkets()
      .then((data) => {
        let tmpCoins = Object.keys(data.markets).map(
          (key) => data["markets"][key]
        );
        tmpCoins.sort((a, b) => {
          if (Number(a["volume24H"]) < Number(b["volume24H"])) return 1;
          else return -1;
        });
        tmpCoins = tmpCoins.filter((m) => {
          if (m["baseAsset"] !== "LUNA") return true;
          return false;
        });
        setCoinData (tmpCoins.map((coin) => {
          return {
            key: coin["market"],
            value: coin["baseAsset"]
          }
        }))
        setCoins(tmpCoins);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (timeInterval.current) clearInterval(timeInterval.current);

    async function fetchCandleData() {
      let tmp = [];
      if (selectedCoin === "ALL") {
        for (let coin of coins) {
          const data = await client.public.getCandles({
            market: coin.market,
            resolution: selectedInterval,
          });
          tmp.push(data.candles);
        }
      } else {
        const data = await client.public.getCandles({
          market: selectedCoin,
          resolution: selectedInterval,
        });
        tmp = data.candles;
      }
      setCandleData(tmp);
    }
    timeInterval.current = setInterval(
      async () => await fetchCandleData(),
      CONSTANT["INTERVAL"][selectedInterval][1]
    );
    if (coins.length > 0) fetchCandleData();
  }, [coins, selectedCoin, selectedInterval]);

  useEffect(() => {
    if (candleData.length === 0) return;

    let tmp;
    if (
      selectedCoin === "ALL" &&
      candleData[0][0] &&
      candleData[0][0]["startedAt"]
    )
      tmp = candleData[0];
    else if (selectedCoin !== "ALL" && candleData[0]["startedAt"])
      tmp = candleData;
    else return;
    let tmpLabel = []; let tmpTimeLabel = [];
    let pamId = 0;
    if (selectedInterval !== "1DAY") pamId = 1;
    for (let i = 0; i < DISPLAY_X_COUNT; i++) {
      let c = tmp[DISPLAY_X_COUNT - i - 1];
      let time = new Date(c["startedAt"]);
      let utcValue = time.valueOf() - time.getTimezoneOffset() * 60000;
      tmpTimeLabel.push (utcValue)
      let startAt = new Date(utcValue).toJSON();
      let pams = startAt.slice(0, startAt.length - 8).split("T");
      tmpLabel.push(pams[pamId]);
    }
    setTimeLabel (tmpTimeLabel)

    let tmpDataset = [];
    if (selectedCoin === "ALL") {
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
        tmpDataset.push(d);
      }
    } else {
      let d = {};
      d["label"] = candleData[0]["market"];
      d["data"] = candleData
        .slice(0, DISPLAY_X_COUNT)
        .reverse()
        .map((item) => item["usdVolume"]);
      d["backgroundColor"] =
        CONSTANT["COIN_COLORS"][d["label"].replace("-USD", "")][0];
      d["stack"] = "Stack 0";
      tmpDataset.push(d);
    }
    setChartData({ 
      labels: tmpLabel,
      datasets: tmpDataset,
    });
    setLoading(false);
  }, [candleData]);

  return (
    <div className="flex flex-col rounded-sm w-full bg-[#12121A] p-[112px] w-full h-full">
      <div className="flex flex-row px-[18px] py-[24px] space-x-3 bg-[#1C1C28] rounded-t-lg border border-[#454258]">
        {/* {coins.length > 0 ? ( */}
        <DropDown 
          data={coinData}
          type="coin"
          setLoading={setLoading}
          btnstr="ALL"
          width={114}
          defaultValue={selectedCoin}
          setSelectedValue={(value)=>{setSelectedCoin(value)}}
        />
        <DropDown 
          data={[
            {key: "Active Accounts", value: "Active Accounts"},
            {key: "Fees Paid", value: "Fees Paid"},
          ]} 
          type="volume" 
          setLoading={setLoading}
          btnstr="Volume"
          width={152}
          setSelectedValue={(value)=>{setLoading(false)}}
        />
        <DropDown 
          data={[
            {key: "Long Position", value: "Long Position"},
            {key: "Short Position", value: "Short Position"},
          ]} 
          type="position"
          setLoading={setLoading}
          btnstr="All Positions"
          width={145}
          setSelectedValue={(value)=>{setLoading(false)}}
        />
        <DropDown 
          data={
            Object.keys(CONSTANT["INTERVAL"])?.map((key, idx) => {
              return {key: key, value:CONSTANT["INTERVAL"][key][0]}
            })
          } 
          type="interval"
          setLoading={setLoading}
          btnstr=""
          defaultValue={"15MINS"}
          width={77}
          setSelectedValue={(value)=>{setSelectedInterval(value)}}
        />
      </div>
      {loading ||
      !(chartData && chartData.datasets && chartData.datasets.length > 0) ? (
        <div
          className="px-[16px] pt-[13px] pb-[19px] border-b border-r border-l border-[#454258] bg-[#232334] rounded-b-lg"
          style={{ height: "calc(100vh - 369px)" }}
        >
          <Skeleton
            baseColor="#232334"
            style={{ height: "100%" }}
            highlightColor="#444157"
          />
        </div>
      ) : (
        <div
          className="px-5 py-8 border-b border-r border-l border-[#454258] bg-[#232334] rounded-b-lg"
          style={{ height: "calc(100vh - 369px)" }}
        >
          <BarChart
            selectedCoin={selectedCoin}
            chartData={chartData}
            coins={coins}
            timeLabel={timeLabel}
            setLoading={setLoading}
            setSelectedValue={(value)=>{setSelectedCoin(value)}}
          />
        </div>
      )}
    </div>
  );
};

export default Activity;
