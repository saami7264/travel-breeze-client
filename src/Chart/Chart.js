import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './Chart.css'

const Chart = () => {

    const data = [{ name: 'Year 2022', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Year 2023', uv: 500, pv: 2400, amt: 2400 },
    { name: 'Year 2024', uv: 530, pv: 2400, amt: 2400 },
    { name: 'Year 2025', uv: 680, pv: 2400, amt: 2400 },
    { name: 'Year 2026', uv: 760, pv: 2400, amt: 2400 }
    ];

    return (
        <div className='my-5'>
            <h2 className='text text-center mb-5'>Expected Travel Trend In Coming Years</h2>
            <div className='text-center'>
                <LineChart className='mx-auto' width={1200} height={900} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
                <small>Y Axis Denotes Million People</small>
            </div>
        </div>
    );
};

export default Chart;