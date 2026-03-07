import React from 'react';

import { ShopKeeperContext } from '../../contexts/ShopKeeperContext';

// const recentOutwards = [
//   { id: 'ISS-201', batch: 'B-106', material: 'Coal', qty: '2 Tons', issuer: 'Supervisor Rajesh', time: '09:15 AM' },
//   { id: 'ISS-202', batch: 'B-107', material: 'Cement', qty: '10 Bags', issuer: 'Supervisor Vikram', time: '11:30 AM' },
// ];

function IssuanceTable() {
    const { issued, getIssued } = React.useContext(ShopKeeperContext);

    React.useEffect(() => {
        getIssued();
    }, []);

    return (
        <div className='bg-white rounded-xl border border-slate-200 shadow-sm overflow-scroll'>
            <div className='p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center'>
                <h3 className='font-bold text-slate-800 text-sm'>Today's Issuance Log</h3>
            </div>

            <table className='w-full text-left'>
                <thead className='bg-slate-50 text-[11px] uppercase text-slate-500 font-bold'>
                    <tr>
                        <th className='p-4'>ID</th>
                        <th className='p-4'>Batch ID</th>
                        <th className='p-4'>Quantity</th>
                        <th className='p-4'>Sold To</th>
                        <th className='p-4 text-right'>Date of sale</th>
                    </tr>
                </thead>

                <tbody className='divide-y divide-slate-100 text-sm'>
                    {issued?.map((row) => (
                        <tr key={row.id} className='hover:bg-slate-50/50'>
                            <td className='p-4 font-mono font-medium text-slate-500'>{row._id}</td>
                            <td className='p-4 font-bold text-blue-600'>{row.targetBatchId}</td>
                            <td className='p-4 text-slate-600'>{row.quantity}</td>
                            <td className='p-4 text-slate-600'>{row.customer}</td>
                            <td className='p-4 text-right text-slate-400'>{row.soldOn}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default IssuanceTable;