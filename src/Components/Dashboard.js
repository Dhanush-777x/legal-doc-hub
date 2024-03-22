import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import SidebarComponent from './SidebarComponent';

function Dashboard() {
    const [transactions, setTransactions] = useState(0);
    const [blocks, setBlocks] = useState(0);
    const transactionChartRef = useRef(null);
    const blockChartRef = useRef(null);

    // Generate random number between min and max
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    useEffect(() => {
        const updateData = () => {
            const newTransactions = getRandomNumber(1, 10);
            const newBlocks = getRandomNumber(1, 3);

            setTransactions(newTransactions);
            setBlocks(prevBlocks => prevBlocks + newBlocks);
        };

        const interval = setInterval(updateData, 5000);

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Create initial charts
        const transactionChartCtx = document.getElementById('transactionChart').getContext('2d');
        const blockChartCtx = document.getElementById('blockChart').getContext('2d');

        const newTransactionChart = new Chart(transactionChartCtx, {
            type: 'doughnut',
            data: {
                labels: ['Transactions'],
                datasets: [
                    {
                        data: [transactions, 100 - transactions],
                        backgroundColor: [
                            transactions >= 33 ? '#4CAF50' : '#ddd',
                            '#fff',
                        ],
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                animation: {
                    duration: 0,
                },
            },
        });

        const newBlockChart = new Chart(blockChartCtx, {
            type: 'doughnut',
            data: {
                labels: ['Blocks'],
                datasets: [
                    {
                        data: [blocks, 200 - blocks],
                        backgroundColor: [
                            blocks >= 33 ? '#FFC107' : '#ddd',
                            '#fff',
                        ],
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                animation: {
                    duration: 0,
                },
            },
        });


        transactionChartRef.current = newTransactionChart;
        blockChartRef.current = newBlockChart;

        return () => {
            if (transactionChartRef.current !== null) {
                transactionChartRef.current.destroy();
            }
            if (blockChartRef.current !== null) {
                blockChartRef.current.destroy();
            }
        };
    }, [transactions, blocks]);

    useEffect(() => {
        // Update chart data when transactions and blocks change
        if (transactionChartRef.current !== null && blockChartRef.current !== null) {
            transactionChartRef.current.data.datasets[0].data = [transactions, 100 - transactions];
            transactionChartRef.current.data.datasets[0].backgroundColor = [
                transactions >= 1 ? '#4CAF50' : '#ddd',
                '#fff',
            ];

            blockChartRef.current.data.datasets[0].data = [blocks, 200 - blocks];
            blockChartRef.current.data.datasets[0].backgroundColor = [
                blocks >= 1 ? '#4CAF50' : '#ddd',
                '#fff',
            ];

            transactionChartRef.current.update({ duration: 0 }); // Disable animation for chart update
            blockChartRef.current.update({ duration: 0 }); // Disable animation for chart update
        }
    }, [transactions, blocks]);

    const waveChartData = {
        labels: Array.from({ length: 10 }, (_, i) => i + 1),
        datasets: [
            {
                label: 'Active Transactions',
                data: Array.from({ length: 10 }, () => getRandomNumber(5, 50)),
                fill: false,
                borderColor: '#4CAF50',
                tension: 0.3,
            },
        ],
    };

    return (
        <div className='flex flex-row'>
            <SidebarComponent />
            <div className="flex-grow bg-gray-900 text-text min-h-screen relative overflow-hidden lg:ml-40">
                {/* Main Content */}
                <main className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-end">
                    <h1 className="text-3xl font-semibold text-white mb-4">Welcome Back!</h1>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        <div className="bg-white bg-opacity-10 w-full sm:w-96 lg:w-fit xl:w-144 h-fit sm:h-fit px-6 py-8 lg:px-32 rounded-lg shadow-lg border border-green-500 border-opacity-20 flex flex-col lg:flex-row justify-between items-center">
                            <div>
                                <h2 className="text-lg text-center lg:text-left font-semibold text-white mb-8">Transactions</h2>
                                <canvas id="transactionChart" className='h-48'></canvas>
                            </div>
                            <p className="text-sm mt-2 text-gray-300 text-center lg:text-left lg:ml-10">Current Transactions: {transactions}</p>
                        </div>
                        <div className="bg-white bg-opacity-10 w-full sm:w-96 lg:w-fit xl:w-144 h-fit sm:h-fit px-10 py-8 lg:px-32 rounded-lg shadow-lg border border-green-500 border-opacity-20 flex flex-col lg:flex-row justify-between items-center">
                            <div>
                                <h2 className="text-lg text-center lg:text-left font-semibold text-white mb-8">Blocks</h2>
                                <canvas id="blockChart" className='h-48'></canvas>
                            </div>
                            <p className="text-sm mt-2 text-gray-300 text-center lg:text-left lg:ml-10">Current Blocks: {blocks}</p>
                        </div>
                        {/* Wave Graph Section */}
                    </div>

                    <div className="mt-8 w-full">
                        <h2 className="text-lg font-semibold text-white mb-4">Active Transactions</h2>
                        <Line data={waveChartData} />
                    </div>
            </main>
        </div>
        </div>
    );
}

export default Dashboard;
