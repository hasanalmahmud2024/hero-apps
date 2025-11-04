import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    { name: 'A', value: 400 },
    { name: 'B', value: 300 },
    { name: 'C', value: 600 },
];

const Recharts = () => {
    return (
        <div>
            <BarChart width={500} height={300} layout='horizontal' data={data}>
                <YAxis dataKey='name' type='category'></YAxis>
                <XAxis dataKey='value' type='number'></XAxis>
                <Tooltip></Tooltip>
                <Bar dataKey='value' fill='green' barSize={30}></Bar>
            </BarChart>
        </div>
    );
};

export default Recharts;