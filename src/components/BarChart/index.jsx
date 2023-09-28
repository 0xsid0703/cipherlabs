/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef, useCallback } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";

import { formattedNum } from "../../utils";

import * as CONSTANT from '../../constant'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    zoomPlugin,
    Title,
    Tooltip,
    Legend
);

// eslint-disable-next-line react/prop-types
const BarChart = ({ selectedCoin, chartData, coins, timeLabel, setSelectedValue, setLoading }) => {
    let totalMarketValue = 0;
    let otherValue = 0;
    const [average, setAverage] = useState (0)
    const curContext = useRef(null)

    const setCurContext = useCallback((context) => {
        curContext.current = context
    }, []);

    useEffect (() => {
        let sum = 0
        // eslint-disable-next-line react/prop-types
        for (let ds of chartData.datasets) {
            let p = 0
            for (let d of ds.data) {
                p += Number (d)
            }
            if (ds.data.length > 0) sum += p/ds.data.length
        }

        setAverage (sum);
    })

    const calculateSelectedBarElement = (el) => {
        if (el === undefined || el.length === 0) return -1
        return el[0]['datasetIndex']
    }

    const timeLabelFormat = (utcValue) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

        const t = new Date(utcValue)
        const now = new Date(t.valueOf() + t.getTimezoneOffset() * 60000);
        const dayOfWeek = days[now.getDay()];
        const month = months[now.getMonth()];
        const dayOfMonth = now.getDate();
        const year = now.getFullYear();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');

        const formattedDate = `${hours}:${minutes}, ${dayOfWeek}, ${month.toUpperCase()} ${dayOfMonth}, ${year}`;
        return formattedDate;
    }

    const hoverFunction = (event, element) => {
        document.getElementById("chartjs-canvas").style.cursor = "default"
        otherValue = 0;
        const curContextObj = curContext.current;
        if (curContextObj === null) return;
        let tooltipEl = document.getElementById("chartjs-tooltip");

        // Create element on first render
        if (!tooltipEl) {
            tooltipEl = document.createElement("div");
            tooltipEl.id = "chartjs-tooltip";
            tooltipEl.innerHTML = "<table></table>";
            document.body.appendChild(tooltipEl);
        }
        tooltipEl.classList.add(
            "flex",
            "flex-col",
            "px-5",
            "py-5",
            "absolute",
            "rounded-md",
            "bg-chart-tooltip",
            "w-330"
        );

        // Hide if no tooltip
        const tooltipModel = curContextObj.tooltip;
        if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = 0;
            document.body.removeChild(tooltipEl);
            return;
        }

        // Set caret Position
        tooltipEl.classList.remove("above", "below", "no-transform");
        if (tooltipModel.yAlign) {
            tooltipEl.classList.add(tooltipModel.yAlign);
        } else {
            tooltipEl.classList.add("no-transform");
        }

        function getBody(bodyItem) {
            return bodyItem.lines;
        }

        // Set Text
        if (tooltipModel.body) {

            const titleLines = tooltipModel.title || [];
            const bodyLines = tooltipModel.body.map(getBody);

            const selectedBarElement = calculateSelectedBarElement(element)
            let innerHtml = "";

            if (selectedBarElement > -1) {
                document.getElementById("chartjs-canvas").style.cursor = "pointer"
                titleLines.forEach(function (title) {
                    if (element && element.length > 0) {
                        title = timeLabelFormat(timeLabel[element[0]['index']])
                    }
                    innerHtml +=
                        "<thead class='text-v3-primary font-semibold'>";
                    innerHtml += `<tr><td  colspan="2" class="text-white text-[10px] mx-4 pb-4">${title}</td></tr>`;

                    if (selectedBarElement > -1) {
                        const b = bodyLines[selectedBarElement]
                        innerHtml += `<tr class='border-b-2 border-solid border-primary text-xs'><td class='text-secondary flex flex-row items-center mx-2 pb-4'>
                                            <div class='w-2 h-2 rounded-full mr-2.5 border-solid' style="background-color: ${CONSTANT['COIN_COLORS'][b[0]["label"].replace("-USD", "")][0]}"></div>
                                            ${b[0]["label"].replace("-USD", "")}
                                    </td>`;
                        innerHtml += `<td class='text-secondary text-right pr-5 mx-1 pb-4'>${formattedNum(b[2], true)}</td>`;
                        innerHtml += `<td class='text-right mr-1 pr-2 pb-4'>${((Number(b[2]) * 100) / totalMarketValue).toFixed(2) + "%"}</td></tr>`;
                    }

                })
                innerHtml += `<tr class='h-px bg-tooltip-row'></tr></thead>`;

                const selected = bodyLines[selectedBarElement]

                innerHtml += `<tbody class='text-[10px] text-v3-primary font-semibold'>`;

                let j = 0;

                bodyLines.sort((a, b) => {
                    if (Number(a[2]) < Number(b[2])) return 1
                    else return -1
                })

                bodyLines.forEach(function (body, i) {

                    curContextObj.chart.config._config.data.datasets[i].backgroundColor = "#6F6E84";

                    if (j < 5 && selected[2] !== body[2]) {
                        j++;
                        let margin;
                        if (j === 1)
                            margin = 'pt-4 mb-1'
                        else
                            margin = 'my-1'
                        const td1 = `<td class='text-secondary flex flex-row items-center mx-2 ${margin}'>
                          <div class='w-2 h-2 rounded-full mr-2.5 border-solid' style="background-color: ${CONSTANT['COIN_COLORS'][body[0]["label"].replace("-USD", "")][0]
                            }"></div>${body[0]["label"].replace("-USD", "")}
                    </td>`;
                        const td2 = `<td class='text-secondary text-right items-center pr-5 mx-1 ${margin}'>${formattedNum(body[2], true)}</td>`;
                        const td3 = `<td class='flex flex-row justify-end mx-2 ${margin}'>${((Number(body[2]) * 100) / totalMarketValue).toFixed(2) + "%"
                            }</td>`;
                        innerHtml += `<tr class='p-4'">
                      ${td1} 
                      ${td2}
                      ${td3}
                      </tr>`;
                    } else {
                        otherValue += Number(body[2]);
                    }
                });
                curContextObj.chart.config._config.data.datasets[selectedBarElement].backgroundColor = CONSTANT['COIN_COLORS'][selected[0]["label"].replace("-USD", "")][0];
                if (selectedCoin === "All Coins") {
                    innerHtml += `<tr><td class='text-secondary flex flex-row items-center mx-2 mt-1 pb-4'>
                            <div class='w-2 h-2 rounded-full mr-2.5 border-solid bg-[#eee]'></div>Other
                      </td>`;
                    innerHtml += `<td class='text-secondary text-right pr-5 mx-1 mt-1 pb-4'>${formattedNum(otherValue, true)}</td>`;
                    innerHtml += `<td class='flex flex-row justify-end mx-2 mt-1 pb-4'>${((Number(otherValue) * 100) / totalMarketValue).toFixed(2) + "%"
                        }</td></tr>`;

                    innerHtml += `<tr class='bg-dropdown'><td class='text-secondary flex flex-row items-center mx-2 my-1'>
                        <div class='w-2 h-2 rounded-full mr-2.5 mb-2.5'>=</div>Total
                      </td>`;
                    innerHtml += `<td class='text-secondary text-right m-1 pr-5'>${formattedNum(totalMarketValue, true)}</td>`;
                    innerHtml += `<td class='flex flex-row justify-end mx-2 my-1'>100%</td></tr>`;
                }
                innerHtml += "</tbody>";
                let tableRoot = tooltipEl.querySelector("table");
                tableRoot.innerHTML = innerHtml;
                const position = curContextObj.chart.canvas.getBoundingClientRect();
                const { height, width } = tooltipEl.getBoundingClientRect();
                // const caretY = tooltipModel.caretY;
                const caretX = tooltipModel.caretX;
                let top = position.top + event.y - height - 8;
                let left = position.left + caretX - width / 2;

                // Display, position, and set styles for font
                tooltipEl.style.opacity = 1;
                tooltipEl.style.position = "absolute";

                tooltipEl.style.top = `${top}px`;
                tooltipEl.style.left = `${left}px`;
                tooltipEl.style.font = "Aria";
                tooltipEl.style.padding = tooltipModel.padding + "px " + tooltipModel.padding + "px";
                tooltipEl.style.pointerEvents = "none";
                curContextObj.chart.update()
                return;
            } else {
                // eslint-disable-next-line react/prop-types
                chartData.datasets.map((dataset, idx) => {
                    curContextObj.chart.config._config.data.datasets[idx].backgroundColor = dataset['backgroundColor']
                })
                document.getElementById("chartjs-canvas").style.cursor = "default"
            }
        }

        document.body.removeChild(tooltipEl);
        curContextObj.chart.update()
    }

    const clickFunction = (event, element) => {
        const curContextObj = curContext.current;
        if (curContextObj === null) return;

        if (element && element[0] && element[0].datasetIndex > -1) {
            let tooltipEl = document.getElementById("chartjs-tooltip");
            document.body.removeChild(tooltipEl);
            setLoading(true)
            // eslint-disable-next-line react/prop-types
            setSelectedValue(chartData.datasets[element[0].datasetIndex]['label'])
            // eslint-disable-next-line react/prop-types
            selectedCoin = chartData.datasets[element[0].datasetIndex]['label']
        }

    }
    const options = {
        maintainAspectRatio: false,
        lineAt: average,
        plugins: {
            legend: {
                display: false,
            },
            zoom: {
                pan: {
                    enabled: true,
                    mode: "x",
                },
                zoom: {
                    pinch: {
                        enabled: false, // Enable pinch zooming
                    },
                    wheel: {
                        enabled: true, // Enable wheel zooming
                    },
                    mode: "x",
                    drag: true,
                    enabled: true,
                },
            },
            tooltip: {
                enabled: false,
                mode: 'index',
                position: 'average',
                callbacks: {
                    title: (tooltipItem, data) => {
                        totalMarketValue = 0;
                        otherValue = 0;
                        return tooltipItem[0]["label"];
                    },
                    beforeLabel: function () {
                        return ``;
                    },
                    label: function (tooltipItem, data) {
                        totalMarketValue += Number(tooltipItem.raw);
                        return [
                            tooltipItem.dataset,
                            tooltipItem.formattedValue,
                            tooltipItem.raw,
                        ];
                    },
                    afterLabel: function (tooltipItem, data) {
                        return "";
                    },
                },
                external: setCurContext,
            },
        },
        responsive: true,
        onHover: (e, el) => {
            hoverFunction(e, el)
        },
        onClick: (e, el) => {
            clickFunction(e, el)
        },
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false,
                    color: "#ffffff",
                    borderColor: "red",
                },
                ticks: {
                    color: "#6F6E84",
                },
            },
            y: {
                stacked: true,
                grid: {
                    display: true,
                    color: "#454258",
                },
                border: {
                    dash: [4, 2],
                    color: '#232334'
                },
                ticks: {
                    color: "#6F6E84",
                },
            },
        },
    };
    let plugins = [
        {
            afterDraw: function (chart) {
                var ctx = chart.ctx;
                ctx.save();
                var xAxis = chart.scales["x"];

                // eslint-disable-next-line react/prop-types
                var barArray = chart.getDatasetMeta(chartData.datasets.length - 1).data

                xAxis.ticks.forEach((v, i) => {
                    try {
                        const { x, y } = barArray[v.value];
                        var value = 0;
                        for (let d of chart.data.datasets) {
                            value += Number(d.data[v.value]);
                        }
                        ctx.textAlign = "center";
                        ctx.font = "11px Arial";
                        ctx.fillStyle = value > 0 ? "#C3C2D4" : "#53b300";
                        ctx.fillText(formattedNum(value, true, false, true), x, y - 5);
                    } catch (e) {
                        console.log("afterDraw call failed", e.message)
                    }
                });
                ctx.restore();

                if (typeof chart.config.options.lineAt != 'undefined') {
                    var lineAt = chart.config.options.lineAt;
                    var ctxPlugin = chart.ctx;
                    var xAxe = chart.scales[chart.config.options.scales.x.id];
                    var yAxe = chart.scales[chart.config.options.scales.y.id];
                    if (yAxe.min !== 0) return;
                    ctxPlugin.strokeStyle = "#C3C2D4";
                    ctxPlugin.beginPath();
                    lineAt = (lineAt - yAxe.min) * (100 / yAxe.max);
                    lineAt = (100 - lineAt) / 100 * (yAxe.height) + yAxe.top;
                    ctxPlugin.moveTo(xAxe.left, lineAt);
                    ctxPlugin.lineTo(xAxe.right, lineAt);
                    ctxPlugin.stroke();
                }
            },
        },
    ];

    return (
        <Bar
            options={options}
            data={chartData}
            plugins={plugins}
            width={"100%"}
            ref={curContext}
            id="chartjs-canvas"
        />
    )
}

export default BarChart