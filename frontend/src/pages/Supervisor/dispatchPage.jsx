import React from 'react';
import { FileDown, MapPin, Truck, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

import DispatchForm from '../../components/Supervisor/dispatchForm';
import { SupervisorContext } from '../../contexts/SupervisorContext.jsx';

// const dispatches = [
//     { id: 'GP-9021', customer: 'Build-Right Const.', site: 'Sector 62, Noida', vehicle: 'UP-16-AX-1234', qty: 5000, status: 'In-Transit' },
//     { id: 'GP-9020', customer: 'Metro Project', site: 'Alpha 1', vehicle: 'DL-1C-BK-8890', qty: 7500, status: 'Delivered' },
//     { id: 'GP-9019', customer: 'Global Infra', site: 'Knowledge Park', vehicle: 'UP-16-TT-4432', qty: 10000, status: 'Loading' },
// ];

function DispatchPage() {
    const { shipments, getShipments } = React.useContext(SupervisorContext);
    
    const onDownloadPass = (item) => {
        if (!item.gatePassURL) {
            toast.error("Gate pass file not found for this shipment.");
            return;
        }

        try {
            const downloadUrl = item.gatePassURL.replace('/upload/', '/upload/fl_attachment/');

            const link = document.createElement('a');
            link.href = downloadUrl;
            link.setAttribute('download', `GatePass_${item.orderId}.pdf`);
            link.setAttribute('target', '_blank');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            toast.success(`Downloading ${item.orderId}`);
        } catch (error) {
            console.error("Download failed:", error);
            toast.error("Could not trigger download.");
        }
    }

    React.useEffect(() => {
        getShipments();
    }, []);

    return (
        <div className='flex flex-col'>
            <div className='bg-card ml-4 mr-4 p-6 rounded-xl shadow-sm'>
               <DispatchForm/>
            </div>

            <div className='bg-card ml-4 mr-4 p-6 rounded-xl shadow-sm mt-8 mb-8'>
                <div className='bg-white rounded-xl border border-slate-200 shadow-sm mt-8 overflow-hidden'>
                    <div className='p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50'>
                        <h3 className='font-bold text-slate-800'>Today's Dispatches</h3>
                        <span className='text-xs font-medium text-slate-500'>{shipments?.length} Vehicles Sent</span>
                    </div>

                    <div className='overflow-x-auto'>
                        <table className='w-full text-left border-collapse'>
                            <thead>
                                <tr className='text-[11px] uppercase text-slate-500 font-bold tracking-wider bg-slate-50'>
                                    <th className='p-4'>Gate Pass ID</th>
                                    <th className='p-4'>Customer & Destination</th>
                                    <th className='p-4'>Vehicle</th>
                                    <th className='p-4'>Load</th>
                                    <th className='p-4 text-center'>Documentation</th>
                                </tr>
                            </thead>
                    
                            <tbody className='divide-y divide-slate-100'>
                                {shipments?.map((item) => (
                                    <tr key={item.orderId} className='hover:bg-slate-50/30 transition-colors'>
                                        <td className='p-4 font-mono font-bold text-blue-600 text-sm'>{item.orderId}</td>
                                        <td className='p-4'>
                                            <div className='text-sm font-bold text-slate-800'>{item.customer}</div>
                                            <div className='text-[11px] text-slate-500 flex items-center gap-1'>
                                                <MapPin size={10} /> {item.delivery}
                                            </div>
                                        </td>
                                        <td className='p-4 text-sm font-medium text-slate-600'>{item.vehicleNo}</td>
                                        <td className='p-4 text-sm font-semibold text-slate-700'>{item.quantity.toLocaleString()} Bricks</td>
                                        <td className='p-4 text-center'>
                                            <button onClick={() => onDownloadPass(item)} disabled={!item.gatePassURL} className='inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-orange-100 hover:text-orange-700 text-slate-600 text-xs font-bold rounded-lg transition-all'>
                                                <FileDown size={14} /> PDF Pass
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DispatchPage;