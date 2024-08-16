import dynamic from 'next/dynamic'
import {createVertexClient} from '@vertex-protocol/client';
import {removeDecimals} from '@vertex-protocol/utils';
import {JsonRpcProvider, verifyTypedData, Wallet} from 'ethers';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {vertex_env} from '../../env';
import Layout from '../../layouts';
import Page from '../../components/Page';
import {METAINFO} from '../../constant';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import useWindowSize from "../../hooks/useWindowSize";
import { CoinListContext } from "../../contexts/CoinListContext";
import DropDown from "../../components/Vertex/DropDown";
import CoinsMenu from "../../components/Vertex/DropDown/CoinsMenu";
import env from "../../env";
import * as CONSTANT from "../../constant";
import { toPng } from 'html-to-image'
import download from 'downloadjs';
import {getCandleData, getCoins} from '../../common/vertex';
const DOWNLOAD = "/assets/imgs/vrtx/download.svg"
const VRTXBarChart = dynamic(() => import('../../components/VRTXBarChart'), { ssr: false });
import { formattedNum } from '../../utils';
import { resolve } from 'styled-jsx/css';



VRTXPage.getLayout = function getLayout (page) {
  return <Layout variant="vertex">{page}</Layout>;
};
const vertexClient = createVertexClient ('arbitrum', {
  signerOrProvider: new Wallet (
    vertex_env.PRIVATE_KEY, // input PK here
    new JsonRpcProvider (vertex_env.RPC_URL, {
      name: 'arbitrum-one',
      chainId: 42161,
    })
  ),
});
export default function VRTXPage () {
    const [selectedInterval, setSelectedInterval] = useState("15 MINS");
    const [below600, setBelow600] = useState(false)
    const [coinData, setCoinData] = useState([]);
    const size = useWindowSize()
    const timeInterval = useRef(undefined);
    const [chartData, setChartData] = useState([]);
    const [candleData, setCandleData] = useState([]);
    const [selectedDisplay, setSelectedDisplay] = useState("100");
    const [selectedCoin, setSelectedCoin] = useState("All Coins");
    const [loading, setLoading] = useState(false);
    const [timeLabel, setTimeLabel] = useState([]);
    const [average, setAverage] = useState(0);
    const [datasum, setDatasum] = useState(0);
    const DISPLAY_X_COUNT = parseInt(selectedDisplay);

    const { selectedCoinList, setSelectedCoinList } = useContext(CoinListContext);
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
    const getCoinsData = useCallback(async () => {
        try {
          const data = await getCoins();
          setCoinData(
            data.map((coin) => {
              return {
                key: coin["symbol"],
                value: coin["productId"],
              };
            })
          );
          setSelectedCoinList(
            data.map((coin) => coin["productId"])
          );
        } catch (e) {
          console.log("getCoins on Vertex ===> ", e);
          setLoading(false);
        }
      }, []);
    useEffect(() => {
      getCoinsData();
    }, [getCoinsData]);

    const fetchCandleData = async () => {
      let tmp = [];
      console.log("Length: ", selectedCoinList)
      for (let coin of selectedCoinList) {
        try {
            const data = await getCandleData(coin, CONSTANT["VERTEXINTERVAL"][selectedInterval][1], DISPLAY_X_COUNT)
            console.log({data})
            tmp.push({candle:data, coin: coinData.find((item)=> item.value == coin)});
        } catch (e) {
          console.log("fetchCandleData failed", e.message);
        }
      }
      setCandleData(tmp);
    };
    useEffect(() => {
      console.log({selectedInterval})
      if (timeInterval.current) clearInterval(timeInterval.current);
      if (selectedCoinList.length > 0) setLoading(true);
      else {
        // setCandleData([]);
        return;
      }
      timeInterval.current = setInterval(
        async () => await fetchCandleData(),
        CONSTANT["VERTEXINTERVAL"][selectedInterval][1] * 1000
      );
  
      fetchCandleData();
    }, [selectedCoinList, selectedInterval, DISPLAY_X_COUNT]);
    useEffect(() => {
      if (below600) setSelectedDisplay("10");
      else setSelectedDisplay("100");
    }, [below600]);
    useEffect(() => {
        setBelow600(size.width < 600)
      }, [size.width])
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
      console.log("1", {candleData})
      console.log("2", {coinData})

      if (
        selectedCoinList.length > 0 &&
        candleData[0]['candle'][0] &&
        candleData[0]['candle'][0]["time"]
      )
        tmp = candleData[0]['candle'];
      else {
        setLoading(false);
        setChartData({});
        return;
      }
      let tmpLabel = [];
      let tmpTimeLabel = [];
      let pamId = 0;
      if (selectedInterval !== "1 DAY") pamId = 1;
      for (let i = 0; i < DISPLAY_X_COUNT; i++) {
        let c = tmp[DISPLAY_X_COUNT - i - 1];
        let time = new Date(c["time"].times(1000).toNumber());
        console.log({time})
        let utcValue = time.valueOf() - time.getTimezoneOffset() * 60000;
        tmpTimeLabel.push(utcValue);
        let startAt = new Date(utcValue).toJSON();
        let pams = startAt.slice(0, startAt.length - 8).split("T");
        // tmpLabel.push(pams[pamId]);
        tmpLabel.push(new Intl.DateTimeFormat('en-AU', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false
        }).format(new Date(c["time"].times(1000).toNumber())).replace(/\//g, '-').replace(/-/g, '/').replace(',', ''))

      }
      setTimeLabel(tmpTimeLabel);
  
      let tmpDataset = [];
      for (let c of candleData) {
        let d = {};
        d["label"] = c['coin']["key"];
        console.log({d})
        d["data"] = c['candle']
          .slice(0, DISPLAY_X_COUNT)
          .reverse()
          .map((item) => removeDecimals(item["volume"]).toNumber());
        d["backgroundColor"] =
          CONSTANT["COIN_COLORS"][d["label"].replace("-PERP", "")][0];
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
    }, [candleData]);
  
    useEffect(() => {
      getDataSet();
    }, [getDataSet]);
    useEffect(()=>{
      console.log(loading, chartData)
    }, [loading, chartData])
    
  return (
    <div>
      <Page
        title={METAINFO.VRTX.title}
        description={METAINFO.VRTX.description}
        twitter={METAINFO.VRTX.twitter}
      >
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
            data={Object.keys(CONSTANT["VERTEXINTERVAL"])?.map((key) => {
              return { key: key, value: CONSTANT["VERTEXINTERVAL"][key][0] };
            })}
            type="interval"
            setLoading={setLoading}
            btnstr=""
            defaultValue={"15 MINS"}
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
              <VRTXBarChart
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
            <div className='flex flex-row items-center text-v3-white text-[32px] font-black'>{CONSTANT["VERTEXINTERVAL"][selectedInterval][0]}</div>
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
              <VRTXBarChart
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
    </div>
  );
}
