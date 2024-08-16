/* eslint-disable react/prop-types */
import { useEffect, useState, useRef, useContext } from "react";
import clsx from 'clsx'
import * as CONSTANT from "../../../constant";
import Item from './Item'

import { CoinListContext } from "../../../contexts/CoinListContext";
import useWindowSize from "../../../hooks/useWindowSize";

const CoinsMenu = ({ data, defaultValue }) => {
    const { selectedCoinList, setSelectedCoinList } = useContext(CoinListContext)
    const [dropDownSelected, setDropDownSelected] = useState(false)
    const [toggle, setToggle] = useState(true)
    const [selected, setSelected] = useState(defaultValue)
    const [menuRows, setMenuRows] = useState(10)
    const [width, setWidth] = useState (120)
    const size = useWindowSize ()
    const [below600, setBelow600] = useState (false)
    const wrapperRef = useRef(null);
    const wrapperDrop = useRef(null)

    const totalCoinList = data.map((item) => item['value'])
    let keyValueData = {}
    data.map((item) => { keyValueData[item.key] = item.value })

    useEffect (() => {
        setBelow600 (size.width < 600)
    }, [size.width])
    
    useEffect(() => {
        setSelected(defaultValue)
    }, [defaultValue])

    useEffect (() => {
        if (data.length > 0)setMenuRows (data.length%3 ? parseInt(data.length/3) + 1: parseInt(data.length/3))
    }, [data.length])

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

    useEffect(() => {
        setWidth (wrapperRef.current.offsetWidth)
      }, [wrapperRef.current]);

    return (
        <div className="w-full">
            <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className='w-full sm:w-[150px] h-8 text-v3-primary bg-v3-primary border border-primary focus:ring-blue-500 font-medium rounded-md text-sm px-[14px] py-[5px] tracking-wide text-center inline-flex items-center justify-between'
                type="button"
                onClick={() => {
                    setDropDownSelected(!dropDownSelected)
                }}
                ref={wrapperRef}
            >
                <span className="h-">
                    {selectedCoinList.length > 0 && selectedCoinList.length === data.length && "All Coins"}
                    {selectedCoinList.length > 1 && selectedCoinList.length < data.length && "Combo"}
                    {selectedCoinList.length === 1 && data.find(item=>item['value'] == selectedCoinList[0])['key']}
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
                        className={
                            menuRows === 10 ? clsx(`py-2 text-sm text-v3-primary font-medium dark:text-gray-200 grid grid-rows-10 sm:grid-rows-10 grid-flow-col sm:gap-x-[30px]`) :
                            menuRows === 11 ? clsx(`py-2 text-sm text-v3-primary font-medium dark:text-gray-200 grid grid-rows-11 sm:grid-rows-10 grid-flow-col sm:gap-x-[30px]`) :
                            menuRows === 12 ? clsx(`py-2 text-sm text-v3-primary font-medium dark:text-gray-200 grid grid-rows-12 sm:grid-rows-10 grid-flow-col sm:gap-x-[30px]`) :
                            menuRows === 13 ? clsx(`py-2 text-sm text-v3-primary font-medium dark:text-gray-200 grid grid-rows-13 sm:grid-rows-10 grid-flow-col sm:gap-x-[30px]`) :
                            menuRows === 14 ? clsx(`py-2 text-sm text-v3-primary font-medium dark:text-gray-200 grid grid-rows-14 sm:grid-rows-10 grid-flow-col sm:gap-x-[30px]`) :
                            menuRows === 15 ? clsx(`py-2 text-sm text-v3-primary font-medium dark:text-gray-200 grid grid-rows-15 sm:grid-rows-10 grid-flow-col sm:gap-x-[30px]`) :
                            clsx(`py-2 text-sm text-v3-primary font-medium dark:text-gray-200 grid grid-rows-10 grid-flow-col sm:gap-x-[30px]`)
                        }
                        aria-labelledby="dropdownButton"
                        style={{width: below600 ? `${width}px` : ''}}
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
                        {data?.map((item, idx) => {
                            return (
                            <Item key={idx}
                                borderColor={CONSTANT["COIN_COLORS"][item["key"].replace("-PERP","")][0]}
                                valueStr={item["key"]}
                                keyStr={item['value']}
                                clearToggle={toggle}
                            />
                        )})}
                    </ul>
                </div>
            }
        </div>
    )
}

export default CoinsMenu