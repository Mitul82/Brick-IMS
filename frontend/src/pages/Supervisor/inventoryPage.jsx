import React from 'react';
import { Clock, CheckCircle2, XCircle, PackageCheck, User } from 'lucide-react';

import { SupervisorContext } from '../../contexts/SupervisorContext.jsx';

// const raisedRequests = [
//     { id: 'REQ-101', item: 'Coal (Grade A)', qty: '5 Tons', date: '2026-03-01', status: 'Pending', requestedBy: 'Supervisor Anil' },
//     { id: 'REQ-098', item: 'Portland Cement', qty: '50 Bags', date: '2026-02-28', status: 'Approved', requestedBy: 'Supervisor Anil' },
//     { id: 'REQ-095', item: 'Fine Sand', qty: '2 Trucks', date: '2026-02-25', status: 'Approved', requestedBy: 'Supervisor Anil' },
//     { id: 'REQ-092', item: 'Additives', qty: '10 Liters', date: '2026-02-24', status: 'Rejected', requestedBy: 'Supervisor Anil' },
// ];

const RequestStatus = ({ status }) => {
    const config = {
        'Pending': { color: 'text-amber-600 bg-amber-50 border-amber-100', icon: <Clock size={14} /> },
        'Approved': { color: 'text-blue-600 bg-blue-50 border-blue-100', icon: <CheckCircle2 size={14} /> },
        'Rejected': { color: 'text-red-600 bg-red-50 border-red-100', icon: <XCircle size={14} /> }
    }

    const { color, icon } = config[status];
    return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${color}`}>
            {icon} {status}
        </span>
    );
}

function InventoryPage() {
    const [formData, setFormData] = React.useState({ material: '', quantity: '', reason: '' });
    const [submit, setSubmit] = React.useState(false);

    const { getRequests, sendRequest, requests } = React.useContext(SupervisorContext);

    React.useEffect(() => {
        getRequests();
    }, [submit]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
            setFormData(prev => ({
              ...prev,
              [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const success = await sendRequest(formData);

            if(success) {
                setSubmit(true);
                return;
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='flex flex-col'>
            <div className='bg-card ml-4 mr-4 p-6 rounded-xl shadow-sm'>
                <div className='bg-white p-6 rounded-xl border border-slate-200 shadow-sm'>
                    <h3 className='font-bold text-primary mb-4'>Request Materials</h3>
                    <div className='space-y-4'>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                            <input type='text' name='material' value={formData.material} onChange={handleInputChange} placeholder='Material Needed' className='text-primary w-full p-2 border rounded-lg text-sm' />
                            <input type='number' name='quantity' value={formData.quantity} onChange={handleInputChange} placeholder='Quantity Needed (in KG/Liters)' className='text-primary w-full p-2 border rounded-lg text-sm' />
                            <textarea name='reason' value={formData.reason} onChange={handleInputChange} placeholder='Reason/Urgency (Optional)' className='text-primary w-full p-2 border rounded-lg text-sm' rows='2' />
                            <button type='submit' className='w-full py-2 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 hover:cursor-pointer'>
                                Send to Manager for Approval
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className='bg-card ml-4 mr-4 p-6 rounded-xl shadow-sm mt-8 mb-8'>
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                        <h3 className="font-bold text-slate-800">Material Request History</h3>
                    </div>
                    
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 text-slate-500 text-[11px] uppercase tracking-wider font-semibold">
                                <th className="p-4 border-b border-slate-100">Request ID</th>
                                <th className="p-4 border-b border-slate-100">Material Item</th>
                                <th className="p-4 border-b border-slate-100">Qty</th>
                                <th className="p-4 border-b border-slate-100">Date Raised</th>
                                <th className="p-4 border-b border-slate-100">Status</th>
                                <th className="p-4 border-b border-slate-100 text-right">Progress</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm">
                            {requests?.map((req) => (
                                <tr key={req.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="p-4 font-mono font-medium text-blue-600">{req._id}</td>
                                    <td className="p-4 font-semibold text-slate-700">{req.material}</td>
                                    <td className="p-4 text-slate-600">{req.quantity}</td>
                                    <td className="p-4 text-slate-500">{req.date}</td>
                                    <td className="p-4"><RequestStatus status={req.status} /></td>
                                    <td className="p-4 text-right">
                                        <div className="flex items-center justify-end gap-1">
                                            <div className={`h-1.5 w-8 rounded ${req.status !== 'Rejected' ? 'bg-emerald-500' : 'bg-slate-200'}`} title="Requested"></div>
                                            <div className={`h-1.5 w-8 rounded ${['Approved', 'Fulfilled'].includes(req.status) ? 'bg-emerald-500' : 'bg-slate-200'}`} title="Manager Approved"></div>
                                            <div className={`h-1.5 w-8 rounded ${req.status === 'Fulfilled' ? 'bg-emerald-500' : 'bg-slate-200'}`} title="Stock Received"></div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InventoryPage;