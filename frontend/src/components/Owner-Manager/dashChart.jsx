import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const mockData = [
  { batch: 'B-101', total: 5000, waste: 450, cost: 1200 },
  { batch: 'B-102', total: 5200, waste: 300, cost: 1150 },
  { batch: 'B-103', total: 4800, waste: 800, cost: 1400 },
  { batch: 'B-104', total: 5100, waste: 200, cost: 1100 },
  { batch: 'B-105', total: 5300, waste: 150, cost: 1050 },
];

function OwnerChart() {
  return (
    <div style={{ width: '100%', height: 400, backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}>
        <h3 style={{ fontFamily: 'sans-serif', marginBottom: '20px' }}>Kiln Production Efficiency</h3>
        <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={mockData}>
                <CartesianGrid strokeDasharray='3 3' vertical={false} />
                <XAxis dataKey='batch' />
                <YAxis />
                <Tooltip 
                  cursor={{fill: '#f5f5f5'}}
                  contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }}
                />

                <Legend />      
                <Bar dataKey='total' fill='#d97706' name='Good Bricks (Qty)' radius={[4, 4, 0, 0]} />
                <Bar dataKey='waste' fill='#ef4444' name='Wastage (Qty)' radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    </div>
  );
};

export default OwnerChart;