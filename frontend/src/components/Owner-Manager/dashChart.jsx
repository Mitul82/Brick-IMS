import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

import { SupervisorContext } from '../../contexts/SupervisorContext.jsx';

function OwnerChart() {
  const { getProduction, production } = React.useContext(SupervisorContext);

  React.useEffect(() => {
    getProduction();
  }, []);

  const chartData = React.useMemo(() => {
    if (!production || !Array.isArray(production)) return [];
        return production.map(item => ({
            batch: item.batchId,
            total: item.produced,
            waste: item.wastage
    }));
  }, [production]);

  return (
    <div style={{ width: '100%', height: 400, backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}>
        <h3 style={{ fontFamily: 'sans-serif', marginBottom: '20px' }}>Kiln Production Efficiency</h3>
        <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={chartData}>
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