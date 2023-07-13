import { useEffect, useState, useRef } from "react";
import * as CONSTANT from "../../constants";

const DropDown = ({ data, setLoading, type, btnstr, width, defaultValue, setSelectedValue }) => {
    const [dropDownSelected, setDropDownSelected] = useState(false)
    const [selected, setSelected] = useState(defaultValue)

    const wrapperRef = useRef(null);

    let keyValueData = {}
    data.map((item) => { keyValueData[item.key] = item.value })

    useEffect(() => {
        setSelected (defaultValue)
    }, [defaultValue])

    const handleClickOutside = (event) => {
        try {
            if (wrapperRef && !wrapperRef.current.contains(event.target)) {
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

    return (
        <div>
            <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className={`text-tab-active-color bg-grey-thick border w-[${width}px] border-grey-weak focus:ring-blue-500 font-medium rounded-md text-sm px-[14px] py-[5px] tracking-wide text-center inline-flex items-center dark:bg-blue-600 dark:focus:ring-blue-500 justify-between`}
                type="button"
                onClick={() => {
                    setDropDownSelected(!dropDownSelected);
                }}
                ref={wrapperRef}
            >
                {type === "coin" ?
                    selected === "ALL" ? "ALL" : selected.replace("-USD", "") :
                    keyValueData[selected] ? keyValueData[selected] + " " : btnstr
                }
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
            <div
                id="dropdown"
                className={
                    dropDownSelected
                        ? `w-[${width}px] z-10 bg-grey-thick border absolute border-grey-weak divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 mt-[8px] overflow-y-auto`
                        : `hidden`
                }
                style={type === "coin" ? {
                    height: "calc(100vh - 394px)",
                    maxHeight: 500,
                } : {}}
            >
                <ul
                    className={`py-2 text-sm text-tab-active-color font-medium dark:text-gray-200`}
                    aria-labelledby="dropdownButton"
                >
                    {
                        type === "coin" &&
                        <li>
                            <a
                                key="-1"
                                className="flex flex-row items-center px-4 py-2 hover:bg-dropdown-content-hover dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                                onClick={() => {
                                    setLoading(true);
                                    setDropDownSelected(false);
                                    setSelected("ALL");
                                    setSelectedValue ("ALL")
                                }}
                            >
                                <div className="w-[8px] h-[8px] rounded-full mr-2 border border-[#fff]"></div>
                                ALL
                            </a>
                        </li>
                    }
                    {data?.map((item, idx) => (
                        <li>
                            <a
                                key={idx}
                                className="flex flex-row items-center px-4 py-2 hover:bg-dropdown-content-hover dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                                onClick={() => {
                                    setLoading(true)
                                    setDropDownSelected(false)
                                    setSelected(item["key"])
                                    setSelectedValue (item["key"])
                                }}
                            >
                                {
                                    type === "coin" &&
                                    <div
                                        className="w-[8px] h-[8px] rounded-full mr-2"
                                        style={{
                                            backgroundColor:
                                                CONSTANT["COIN_COLORS"][item["value"]][0],
                                        }}
                                    ></div>
                                }
                                {item["value"]}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default DropDown