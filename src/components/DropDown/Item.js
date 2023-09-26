/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useState, useContext, useCallback } from 'react'
import clsx from 'clsx'
import { CoinListContext } from '../../contexts/CoinListContext'

const Item = ({ borderColor, valueStr }) => {
    const [toggle, setToggle] = useState(null)
    const { selectedCoinList, setSelectedCoinList } = useContext(CoinListContext)
    useEffect (() => {
        for (let coin of selectedCoinList) {
            if (coin === valueStr) {setToggle (true); return}
        }
        setToggle (false)
    }, [selectedCoinList])

    const initialize = () => {
        if (!toggle) {
            if (selectedCoinList.indexOf (valueStr) !== -1) return
            let tmp = selectedCoinList
            tmp = tmp.filter((coin) => coin !== valueStr)
            tmp.push(valueStr)
            setSelectedCoinList(tmp)
        } else {
            if (selectedCoinList.indexOf (valueStr) === -1) return
            let tmp = selectedCoinList
            tmp = tmp.filter((coin) => coin !== valueStr)
            setSelectedCoinList(tmp)
        }
        setToggle (!toggle)
    }
    
    // useEffect (() => {
    //     initialize ()
    // }, [initialize])

    return (
        <li>
            <a
                className="flex flex-row items-center px-4 py-2 hover:bg-dropdown-content-hover dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                onClick={() => {
                    initialize ()
                    // setLoading(true)
                    // setSelected(item["key"])
                    // setSelectedValue (item["key"])
                }}
            >
                {
                    <div
                        className={clsx(`w-[6px] h-[6px] rounded-full mr-2 border border-[1px] ${toggle ? "scale-150" : "scale-100"}`)}
                        style={{
                            borderColor: borderColor,
                            backgroundColor: toggle ? borderColor : "transparent"
                        }}
                    ></div>
                }
                {valueStr}
            </a>
        </li>
    )
}

export default Item