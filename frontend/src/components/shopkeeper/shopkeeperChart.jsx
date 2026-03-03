import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const stockData = [
  { item: 'Coal', current: 65, min: 30 },
  { item: 'Cement', current: 15, min: 25 },
  { item: 'Sand', current: 40, min: 20 },
  { item: 'Additives', current: 80, min: 15 },
];

function StockLevelChart() {
    return (
        <div className='h-75 w-full'>
            <ResponsiveContainer width='100%' height='100%'>
                <BarChart data={stockData} layout='vertical' margin={{ left: 30, right: 30 }}>
                    <CartesianGrid strokeDasharray='3 3' horizontal={true} vertical={false} />
                    <XAxis type='number' hide />
                    <YAxis dataKey='item' type='category' tick={{ fontSize: 12, fontWeight: 'bold', fill: '#475569' }} />
                    <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}/>
                    <Bar dataKey='current' radius={[0, 4, 4, 0]} barSize={20}>
                        {stockData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.current < entry.min ? '#ef4444' : '#d97706'}/>
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
            
            <div className='flex justify-center gap-4 mt-2 text-xs font-medium'>
                <div className='flex items-center gap-1'><span className='w-3 h-3 bg-orange-600 rounded'></span> Healthy</div>
                <div className='flex items-center gap-1'><span className='w-3 h-3 bg-red-500 rounded'></span> Low Stock</div>
            </div>
        </div>
    );
}

export default StockLevelChart;