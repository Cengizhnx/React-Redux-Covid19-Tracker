import React from 'react'
import { useSelector } from "react-redux";
import Loading from "../pages/Loading";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function Chart() {
    const data = useSelector((state) => state.selectCountry.items)
    const status = useSelector((state) => state.selectCountry.status);

    return (
        <div className='w-75'>
            {
                status === "loading" && <Loading></Loading>
            }
            { status === "succeeded" && (
                <Bar
                    data={{
                        labels: ["Infected", "Recovered", "Deaths",],
                        datasets: [
                            {
                                label: "People",
                                backgroundColor: [
                                    "#007bff",
                                    "#28a745",
                                    "#dc3545",
                                ],
                                hoverBackgroundColor: [
                                    "#007bff",
                                    "#28a745",
                                    "#dc3545",
                                ],
                                data: [
                                    data.confirmed.value,
                                    data.recovered.value,
                                    data.deaths.value,
                                ],
                            },
                        ],
                    }}
                    className="mt-4"
                />
            )}
        </div>
    )
}

export default Chart