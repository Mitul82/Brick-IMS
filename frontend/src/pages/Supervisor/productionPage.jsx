import React from 'react';

import ProductionForm from '../../components/Supervisor/productionForm';

const batches = [
    { id: 'B-105', type: 'Standard Clay', qty: 5300, waste: 150, stage: 'Ready', lastUpdate: '2h ago' },
    { id: 'B-106', type: 'Fly Ash', qty: 4800, waste: 0, stage: 'Firing', lastUpdate: 'Just now' },
    { id: 'B-107', type: 'Standard Clay', qty: 5000, waste: 0, stage: 'Drying', lastUpdate: '5h ago' },
];

const StageBadge = ({ stage }) => {
    const styles = {
        'Ready': 'bg-emerald-50 text-emerald-700 border-emerald-200',
        'Firing': 'bg-red-50 text-red-700 border-red-200',
        'Drying': 'bg-blue-50 text-blue-700 border-blue-200',
    }

    return (
        <span className={`px-2 py-1 rounded-md text-[11px] font-bold border ${styles[stage] || 'bg-slate-100'}`}>
            {stage.toUpperCase()}
        </span>
    );
}

function ProductionPage() {
    return (
        <div className='flex flex-col'>
            <div className='bg-card ml-4 mr-4 p-6 rounded-xl shadow-sm'>
               <ProductionForm/>
            </div>

            <div className='bg-card ml-4 mr-4 p-6 rounded-xl shadow-sm mt-8 mb-8'>
                <div className='bg-white rounded-xl border border-slate-200 shadow-sm mt-8 overflow-hidden'>
                    <div className='p-4 bg-slate-50 border-b border-slate-200'>
                        <h3 className='font-bold text-slate-800'>Active Production Batches</h3>
                    </div>

                    <table className='w-full text-left'>
                        <thead className='bg-slate-50/50'>
                            <tr className='text-[11px] uppercase text-slate-500 font-bold tracking-wider'>
                                <th className='p-4'>Batch ID</th>
                                <th className='p-4'>Type</th>
                                <th className='p-4'>Produced / Waste</th>
                                <th className='p-4'>Yield</th>
                                <th className='p-4'>Current Stage</th>
                            </tr>
                        </thead>
        
                        <tbody className='divide-y divide-slate-100'>
                            {batches.map(batch => (
                                <tr key={batch.id} className='text-sm hover:bg-slate-50 transition-colors'>
                                    <td className='p-4 font-bold text-slate-900'>{batch.id}</td>
                                    <td className='p-4 text-slate-600'>{batch.type}</td>
                                    <td className='p-4'>
                                    <span className='font-semibold text-slate-800'>{batch.qty}</span>
                                    <span className='text-red-500 ml-2'>(-{batch.waste})</span>
                                </td>
                                <td className='p-4'>
                                    <div className='w-full bg-slate-100 h-1.5 rounded-full overflow-hidden max-w-25'>
                                        <div className='bg-emerald-500 h-full' style={{ width: `${((batch.qty - batch.waste) / batch.qty) * 100}%` }}></div>
                                    </div>
                                </td>
                                <td className='p-4'><StageBadge stage={batch.stage} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ProductionPage;