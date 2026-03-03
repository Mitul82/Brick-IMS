import React from 'react';

const recentInwards = [
  { id: 'GRN-501', supplier: 'Jindal Coal Ltd.', material: 'Coal', qty: '12 Tons', time: '10:30 AM' },
  { id: 'GRN-502', supplier: 'UltraTech Cement', material: 'Cement', qty: '50 Bags', time: '11:45 AM' },
];

const InwardHistoryTable = () => {
    return (
        <div className='bg-white rounded-xl border border-slate-200 shadow-sm mx-5 mt-6 overflow-hidden'>
            <table className='w-full text-left border-collapse'>
                <thead className='bg-slate-50/50 text-[11px] uppercase text-slate-500 font-bold'>
                    <tr>
                        <th className='p-4'>ID</th>
                        <th className='p-4'>Supplier</th>
                        <th className='p-4'>Material</th>
                        <th className='p-4'>Quantity</th>
                        <th className='p-4'>Recorded At</th>
                    </tr>
                </thead>

                    <tbody className='divide-y divide-slate-100 text-sm'>
                        {recentInwards.map((row) => (
                            <tr key={row.id} className='hover:bg-slate-50/50 transition-colors'>
                                <td className='p-4 font-mono font-medium text-blue-600'>{row.id}</td>
                                <td className='p-4 font-semibold text-slate-700'>{row.supplier}</td>
                                <td className='p-4 text-slate-600'>{row.material}</td>
                                <td className='p-4 text-slate-600'>{row.qty}</td>
                                <td className='p-4 text-slate-400'>{row.time}</td>
                            </tr>
                        ))}
                    </tbody>
            </table>
        </div>
    );
}

export default InwardHistoryTable;