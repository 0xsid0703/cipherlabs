import Layout from '../../layouts';
import Page from '../../components/Page';
import {METAINFO} from '../../constant';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import useWindowSize from "../../hooks/useWindowSize";
import { CoinListContext } from "../../contexts/CoinListContext";
import DropDown from "../../components/DropDown";
import CoinsMenu from "../../components/DropDown/CoinsMenu";
import env from "../../env";
import * as CONSTANT from "../../constant";
import { toPng } from 'html-to-image'
import download from 'downloadjs';
import {getCoins} from '../../common/vertex';
const DOWNLOAD = "/assets/imgs/vrtx/download.svg"



VRTXPage.getLayout = function getLayout (page) {
  return <Layout variant="dydx">{page}</Layout>;
};

export default function VRTXPage () {
    const [selectedInterval, setSelectedInterval] = useState("15MINS");
    const [below600, setBelow600] = useState(false)
    const [coinData, setCoinData] = useState([]);
    const size = useWindowSize()
    const [selectedDisplay, setSelectedDisplay] = useState("100");
    const [selectedCoin, setSelectedCoin] = useState("All Coins");
    const [loading, setLoading] = useState(false);
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
          console.log({data})
          // setCoinData(
          //   data.map((coin) => {
          //     return {
          //       key: coin["market"],
          //       value: coin["baseAsset"],
          //     };
          //   })
          // );
          // setSelectedCoinList(
          //   data.map((coin) => coin["market"].replace("-USD", ""))
          // );
        } catch (e) {
          console.log("getCoins on Vertex ===> ", e);
          setLoading(false);
        }
      }, []);
      useEffect(() => {
        getCoinsData();
      }, [getCoinsData]);
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
  return (
    <div>
      <Page
        title={METAINFO.ANALYTICS.title}
        description={METAINFO.ANALYTICS.description}
        twitter={METAINFO.ANALYTICS.twitter}
      />
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
        </div>
    </div>
  );
}
