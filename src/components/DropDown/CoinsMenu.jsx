/* eslint-disable react/prop-types */
import { useEffect, useState, useRef, useContext } from "react";
import clsx from 'clsx'
import * as CONSTANT from "../../constant";
import Item from './Item'

import { CoinListContext } from "../../contexts/CoinListContext";

const CoinsMenu = ({ data, width, defaultValue }) => {
    const { selectedCoinList, setSelectedCoinList } = useContext(CoinListContext)
    const [dropDownSelected, setDropDownSelected] = useState(false)
    const [toggle, setToggle] = useState(true)
    const [selected, setSelected] = useState(defaultValue)
    const wrapperRef = useRef(null);
    const wrapperDrop = useRef(null)

    const totalCoinList = data.map((item) => item['value'])
    let keyValueData = {}
    data.map((item) => { keyValueData[item.key] = item.value })

    useEffect(() => {
        setSelected(defaultValue)
    }, [defaultValue])

    const handleClickOutside = (event) => {
        try {
            if (wrapperRef && !wrapperRef.current.contains(event.target) && wrapperDrop && !wrapperDrop.current.contains(event.target)) {
                setDropDownSelected(false);
            }
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    useEffect(() => {
        if (toggle) setSelectedCoinList(totalCoinList)
        else setSelectedCoinList([])
    }, [toggle])

    return (
        <div className="">
            <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className='text-v3-primary bg-v3-primary border border-primary focus:ring-blue-500 font-medium rounded-md text-sm px-[14px] py-[5px] tracking-wide text-center inline-flex items-center dark:bg-blue-600 dark:focus:ring-blue-500 justify-between'
                style={{ width: `150px`, height: 32 }}
                type="button"
                onClick={() => {
                    setDropDownSelected(!dropDownSelected)
                }}
                ref={wrapperRef}
            >
                <span className="h-">
                    {selectedCoinList.length > 0 && selectedCoinList.length === data.length && "All Coins"}
                    {selectedCoinList.length > 1 && selectedCoinList.length < data.length && "Combo"}
                    {selectedCoinList.length === 1 && selectedCoinList[0]}
                    {selectedCoinList.length === 0 && "Choose a coin"}
                </span>
                <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="#6F6E84"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>
            {data && data.length > 0 &&
                <div
                    id="dropdown"
                    className={
                        dropDownSelected
                            ? `z-20 bg-v3-primary border absolute border-primary divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 mt-[8px] overflow-y-auto`
                            : `hidden`
                    }
                    ref={wrapperDrop}
                >
                    <ul
                        className={`py-2 text-sm text-v3-primary font-medium dark:text-gray-200 grid grid-rows-10 grid-flow-col gap-x-[30px]`}
                        aria-labelledby="dropdownButton"
                    >
                        <li>
                            <a
                                key="-1"
                                className={clsx(`flex flex-row items-center px-4 py-2 group
                                    ${selectedCoinList && selectedCoinList.length === data.length && data.length > 0 ? 'font-bold text-secondary' : 'font-medium text-v3-primary'}
                                    hover:text-secondary cursor-pointer`)}
                                onClick={() => {
                                    setToggle(!toggle)
                                }}
                            >
                                <div
                                    className={clsx(`w-[6px] h-[6px] rounded-full mr-2 border border-[#fff] 
                                        ${selectedCoinList && selectedCoinList.length === data.length && data.length > 0 ? "scale-166" : "scale-100 group-hover:scale-133"}`)}
                                    style={{ backgroundColor: selectedCoinList && selectedCoinList.length === data.length && data.length > 0 ? 'white' : "transparent" }}
                                />
                                All Coins
                            </a>
                        </li>
                        {data?.map((item, idx) => (
                            <Item key={idx}
                                borderColor={CONSTANT["COIN_COLORS"][item["value"]][0]}
                                valueStr={item["value"]}
                                clearToggle={toggle}
                            />
                        ))}
                    </ul>
                </div>
            }
        </div>
    )
}

export default CoinsMenu