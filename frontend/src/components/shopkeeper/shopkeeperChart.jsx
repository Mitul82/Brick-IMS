import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

import { ShopKeeperContext } from '../../contexts/ShopKeeperContext.jsx';

const processStockData = (receivedData) => {
    const summary = receivedData.reduce((acc, entry) => {
        const material = entry.material.charAt(0).toUpperCase() + entry.material.slice(1);
        if (!acc[material]) {
            acc[material] = { item: material, current: 0, min: 10 };
        }
        acc[material].current += Number(entry.quantity);
        return acc;
    }, {});

    return Object.values(summary);
};

function StockLevelChart() {
    const { received, getReceived } = React.useContext(ShopKeeperContext);

    React.useEffect(() => {
        getReceived();
    }, []);

    const chartData = React.useMemo(() => {
        if (!received || received.length === 0) return [];
        return processStockData(received);
    }, [received]);

    return (
        <div className='h-75 w-full'>
            <ResponsiveContainer width='100%' height='100%'>
                <BarChart data={chartData} layout='vertical' margin={{ left: 30, right: 30 }}>
                    <CartesianGrid strokeDasharray='3 3' horizontal={true} vertical={false} />
                    <XAxis type='number' hide />
                    <YAxis dataKey='item' type='category' tick={{ fontSize: 12, fontWeight: 'bold', fill: '#475569' }} />
                    <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}/>
                    <Bar dataKey='current' radius={[0, 4, 4, 0]} barSize={20}>
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.current < entry.min ? '#ef4444' : '#d97706'}/>
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default StockLevelChart;