import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, AlertTriangle, Clock, CheckCircle, Truck, ArrowLeft, FileDown } from 'lucide-react';

import { AuthContext } from '../../contexts/authContext';

// const shipments = [
//     { id: 'SH-4021', customer: 'Build-Right Const.', site: 'Sector 62, Noida', quantity: '5000', status: 'In-Transit', driver: 'Rajesh' },
//     { id: 'SH-4022', customer: 'Shivaay Bricks', site: 'Knowledge Park', quantity: '2500', status: 'Delivered', driver: 'Amit' },
//     { id: 'SH-4023', customer: 'Global Infra', site: 'Greater Noida West', quantity: '10000', status: 'Loading', driver: 'Vikram' },
//     { id: 'SH-4024', customer: 'Metro Project', site: 'Alpha 1', quantity: '7500', status: 'Delayed', driver: 'Suresh' },
// ];

const StatusBadge = ({ status }) => {
    const styles = {
        'Delivered': 'bg-emerald-100 text-emerald-700 border-emerald-200',
        'In-Transit': 'bg-blue-100 text-blue-700 border-blue-200',
        'Loading': 'bg-amber-100 text-amber-700 border-amber-200',
        'Delayed': 'bg-red-100 text-red-700 border-red-200',
    };

    const icons = {
        'Delivered': <CheckCircle size={14} />,
        'In-Transit': <Truck size={14} />,
        'Loading': <Clock size={14} />,
        'Delayed': <AlertTriangle size={14} />,
    };

    return (
        <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${styles[status]}`}>
            {icons[status]} {status}
        </span>
    );
};

function ShipmentTable({ loading, shipments }) {
    const location = useLocation();

    const { user } = React.useContext(AuthContext);

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

    if (loading) return <div className='text-black p-10'>Loading Supervisor Dashboard...</div>;

    return (
        <div className='bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden'>
            <div className='p-5 border-b border-slate-50 flex justify-between items-center'>
                <h3 className='font-bold text-slate-800 text-lg'>Active Shipments</h3>
                <Link to={`/users/${user?.role}/shipments`}>
                    <button className='text-sm text-blue-600 font-medium hover:underline hover:cursor-pointer'>
                        {location.pathname === `/users/${user?.role}/shipments` ? '' : 'View All Dispatches'}
                    </button>
                </Link>

                {location.pathname === `/users/${user?.role}/shipments` && (
                    <Link to={`/users/${user?.role}`}>
                        <button className='flex items-center justify-center text-black text-sm hover:cursor-pointer hover:underline hover:shadow-accent-foreground rounded-lg'>
                            <ArrowLeft size='14'/> Go Back
                        </button>
                    </Link>
                )}
            </div>

            <div className='overflow-x-auto'>
                <table className='w-full text-center'>
                    <thead className='bg-slate-50 border-b border-slate-100'>
                        <tr>
                            <th className='p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider'>ID</th>
                            <th className='p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider'>Customer & Site</th>
                            <th className='p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider'>Quantity</th>
                            <th className='p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider'>Driver</th>
                            <th className=''>Gate Pass</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-slate-100'>
                        {shipments?.map((item) => (
                                <tr key={item.orderId} className='hover:bg-slate-50/50 transition-colors'>
                                    <td className='p-4 text-sm font-medium text-slate-900'>{item.orderId}</td>
                                    <td className='p-4 flex flex-col items-center justify-center text-center'>
                                        <div className='text-sm font-semibold text-slate-900'>{item.customer}</div>
                                            <div className='text-xs text-slate-500 flex items-center gap-1'>
                                                <MapPin size={12} /> {item.delivery}
                                            </div>
                                    </td>
                                    <td className='p-4 text-sm text-slate-600'>{item.quantity} Bricks</td>
                                    <td className='p-4 text-sm text-slate-600 font-medium'>{item.driverName}</td>
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
    );
};

export default ShipmentTable;