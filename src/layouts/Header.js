import { useEffect, useState, useRef, useCallback } from "react";
import DexLogo from "../assets/imgs/dex-logo.svg";
import Logo from "../assets/imgs/logo.png";

const Header = () => {
    const [curTab, setCurTab] = useState(2);

    return (
        <div className="flex flex-row justify-between px-5 border-b border-[#454258] bg-[#171722]">
          <div className="w-[40%] self-center">
            <img src={Logo} className="h-[29px]" />
          </div>
          <img src={DexLogo} />
          <div className="text-sm font-medium text-center text-tab-color dark:text-gray-400 dark:border-gray-700 w-[40%]">
            <ul className="flex flex-wrap justify-end -mb-px">
              <li className="mr-2">
                <a
                  className={
                    curTab === 0
                      ? "inline-block py-[21px] px-[12px] border-b-2 text-tab-active-color hover:text-[#F7F7F7] border-[#5973FE] rounded-t-lg dark:hover:text-gray-300 cursor-pointer"
                      : "inline-block py-[21px] px-[12px] border-b-2 border-transparent hover:text-[#F7F7F7] rounded-t-lg dark:hover:text-gray-300 cursor-pointer"
                  }
                  aria-current={curTab === 0 ? "page" : ""}
                  onClick={() => setCurTab(0)}
                >
                  Market Metrics
                </a>
              </li>
              <li className="mr-2">
                <a
                  className={
                    curTab === 1
                      ? "inline-block py-[21px] px-[12px] border-b-2 text-tab-active-color hover:text-[#F7F7F7] border-[#5973FE] rounded-t-lg dark:hover:text-gray-300 cursor-pointer"
                      : "inline-block py-[21px] px-[12px] border-b-2 border-transparent hover:text-[#F7F7F7] rounded-t-lg dark:hover:text-gray-300 cursor-pointer"
                  }
                  aria-current={curTab === 1 ? "page" : ""}
                  onClick={() => setCurTab(1)}
                >
                  Positions
                </a>
              </li>
              <li className="mr-2">
                <a
                  className={
                    curTab === 2
                      ? "inline-block py-[21px] px-[12px] border-b-2 text-tab-active-color hover:text-[#F7F7F7] border-[#5973FE] rounded-t-lg dark:hover:text-gray-300 cursor-pointer"
                      : "inline-block py-[21px] px-[12px] border-b-2 border-transparent hover:text-[#F7F7F7] rounded-t-lg dark:hover:text-gray-300 cursor-pointer"
                  }
                  aria-current={curTab === 2 ? "page" : ""}
                  onClick={() => setCurTab(2)}
                >
                  Activity
                </a>
              </li>
              <li className="mr-2">
                <a
                  className={
                    curTab === 3
                      ? "inline-block py-[21px] px-[12px] border-b-2 text-tab-active-color hover:text-[#F7F7F7] border-[#5973FE] rounded-t-lg dark:hover:text-gray-300 cursor-pointer"
                      : "inline-block py-[21px] px-[12px] border-b-2 border-transparent hover:text-[#F7F7F7] rounded-t-lg dark:hover:text-gray-300 cursor-pointer"
                  }
                  aria-current={curTab === 3 ? "page" : ""}
                  onClick={() => setCurTab(3)}
                >
                  Liquidity Map
                </a>
              </li>
              <li className="mr-2">
                <a
                  className={
                    curTab === 4
                      ? "inline-block py-[21px] px-[12px] border-b-2 text-tab-active-color hover:text-[#F7F7F7] border-[#5973FE] rounded-t-lg dark:hover:text-gray-300 cursor-pointer"
                      : "inline-block py-[21px] px-[12px] border-b-2 border-transparent hover:text-[#F7F7F7] rounded-t-lg dark:hover:text-gray-300 cursor-pointer"
                  }
                  aria-current={curTab === 4 ? "page" : ""}
                  onClick={() => setCurTab(4)}
                >
                  Liquidations
                </a>
              </li>
            </ul>
          </div>
        </div>
    )
}

export default Header