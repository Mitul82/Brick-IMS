import React from 'react';
import { BrickWall, TrendingUp, AlertTriangle, Truck, Wallet } from 'lucide-react';

import OwnerChart from '../../components/Owner-Manager/dashChart.jsx';
import ShipmentTable from '../../components/Owner-Manager/shipmentTable.jsx';
import ApprovalCard from '../../components/Owner-Manager/approvalCard.jsx';
import { OwnerContext } from '../../contexts/OwnerContext.jsx';

function OwnerManager() {
    const { requests, getRequests, getShipments, shipments } = React.useContext(OwnerContext);

    React.useEffect(() => {
        getRequests();
        getShipments();
    }, []);

    return (
        <div className='flex flex-col mt-4 md:mt-8 px-4 md:px-5'>
            {requests?.filter(req => req.status === 'Pending').map((a) => (
                <ApprovalCard key={a._id} id={a._id} item={a.material} quantity={a.quantity} requestedBy={a.requestedBy.name}/>
            ))}           

            <div className='flex flex-col items-center justify-center mt-5 ml-4 mr-4'>
                <div className='bg-card p-10 rounded-lg w-full'>
                    <div className='w-full overflow-x-auto'>
                        <OwnerChart/>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center mt-5 mb-5 ml-4 mr-4'>
                <div className='bg-card p-10 rounded-lg w-full'>
                    <ShipmentTable shipments={shipments}/>
                </div>
            </div>
        </div>
    );
}

export default OwnerManager;