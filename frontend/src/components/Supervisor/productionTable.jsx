import React from 'react';

function ProductionTable({ production }) {
    return (
        <div className='bg-white rounded-xl border border-slate-200 shadow-sm mt-8 overflow-hidden'>
            <div className='p-4 bg-slate-50 border-b border-slate-200'>
                <h3 className='font-bold text-slate-800'>Active Production Batches</h3>
            </div>

            <table className='w-full text-left'>
                <thead className='bg-slate-50/50 text-center'>
                    <tr className='text-[11px] uppercase text-slate-500 font-bold tracking-wider'>
                        <th className='p-4'>Batch ID</th>
                        <th className='p-4'>Type</th>
                        <th className='p-4'>Produced / Waste</th>
                        <th classname='p-4'>Available Stock</th>
                        <th className='p-4'>Yield</th>
                    </tr>
                </thead>
        
                <tbody className='divide-y divide-slate-100 text-center'>
                    {production?.map(batch => (
                        <tr key={batch.batchId} className='text-sm hover:bg-slate-50 transition-colors'>
                            <td className='p-4 font-bold text-slate-900'>{batch.batchId}</td>
                            <td className='p-4 text-slate-600'>{batch.type}</td>
                            <td className='p-4'>
                                <span className='font-semibold text-slate-800'>{batch.produced}</span>
                                <span className='text-red-500 ml-2'>(-{batch.wastage})</span>
                            </td>
                            <td classname='p-4 font-semibold text-slate-800'>{batch.availableQuantity}</td>
                            <td className='p-4'>
                                <div className='w-full bg-slate-100 h-1.5 rounded-full overflow-hidden max-w-25'>
                                    <div className='bg-emerald-500 h-full' style={{ width: `${((batch.produced - batch.wastage) / batch.produced) * 100}%` }}></div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductionTable;