import React from 'react';

const recentOutwards = [
  { id: 'ISS-201', batch: 'B-106', material: 'Coal', qty: '2 Tons', issuer: 'Supervisor Rajesh', time: '09:15 AM' },
  { id: 'ISS-202', batch: 'B-107', material: 'Cement', qty: '10 Bags', issuer: 'Supervisor Vikram', time: '11:30 AM' },
];

function IssuanceTable() {
    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm mx-5 mt-6 overflow-hidden">
            <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                <h3 className="font-bold text-slate-800 text-sm">Today's Issuance Log</h3>
            </div>

            <table className="w-full text-left">
                <thead className="bg-slate-50 text-[11px] uppercase text-slate-500 font-bold">
                    <tr>
                        <th className="p-4">ID</th>
                        <th className="p-4">Batch ID</th>
                        <th className="p-4">Material</th>
                        <th className="p-4">Quantity</th>
                        <th className="p-4">Issued To</th>
                        <th className="p-4 text-right">Time</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 text-sm">
                    {recentOutwards.map((row) => (
                        <tr key={row.id} className="hover:bg-slate-50/50">
                            <td className="p-4 font-mono font-medium text-slate-500">{row.id}</td>
                            <td className="p-4 font-bold text-blue-600">{row.batch}</td>
                            <td className="p-4 font-semibold text-slate-700">{row.material}</td>
                            <td className="p-4 text-slate-600">{row.qty}</td>
                            <td className="p-4 text-slate-600">{row.issuer}</td>
                            <td className="p-4 text-right text-slate-400">{row.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default IssuanceTable;