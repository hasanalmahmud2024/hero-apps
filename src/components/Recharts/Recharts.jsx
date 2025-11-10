import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';



const Recharts = ({ ratings }) => {
    const reverseRatings = [...ratings].reverse();
    // console.log(reverseRatings);

    
    return (
            <ResponsiveContainer width="100%" height={200} >
            <BarChart layout='vertical' data={reverseRatings}>
                <XAxis type='number'></XAxis>
                <YAxis dataKey='name' type='category'></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey='count' fill='orange' barSize={25}></Bar>
            </BarChart>
            </ResponsiveContainer>
    );
};

export default Recharts;