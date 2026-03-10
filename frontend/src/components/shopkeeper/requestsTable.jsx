import React from 'react';
import { Clock, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

const StatusPill = ({ status }) => {
    const config = {
        'Pending': { color: 'text-amber-600 bg-amber-50 border-amber-100', icon: <Clock size={14} /> },
        'Approved': { color: 'text-emerald-600 bg-emerald-50 border-emerald-100', icon: <CheckCircle2 size={14} /> },
        'Rejected': { color: 'text-red-600 bg-red-50 border-red-100', icon: <XCircle size={14} /> },
    };

    const { color, icon } = config[status];
  
    return (
        <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${color}`}>
            {icon} {status}
        </span>
    );
};

function RequestsTable({ requests }) {
    return (
        <div className='bg-white rounded-xl border border-slate-200 shadow-sm overflow-scroll'>
            <div className='p-5 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center'>
                <h3 className='font-bold text-slate-800'>My Material Requests</h3>
            </div>
      
            <table className='w-full text-center'>
                <thead className='bg-slate-50 text-[11px] uppercase text-slate-500 font-bold tracking-wider'>
                    <tr>
                        <th className='p-4'>Request ID</th>
                        <th className='p-4'>Material</th>
                        <th className='p-4'>Quantity</th>
                        <th className='p-4'>Status</th>
                        <th className='p-4 text-right'>Date Raised</th>
                    </tr>
                </thead>
        
                <tbody className='divide-y divide-slate-100'>
                    {requests.map((req) => (
                        <tr key={req._id} className='hover:bg-slate-50/30 transition-colors text-sm'>
                            <td className='p-4 font-mono font-bold text-primary'>{req._id}</td>
                            <td className='p-4 font-semibold text-slate-700'>{req.material}</td>
                            <td className='p-4 text-slate-600'>{req.quantity}</td>
                            <td className='p-4'><StatusPill status={req.status} /></td>
                            <td className='p-4 text-right text-slate-400'>{req.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RequestsTable;