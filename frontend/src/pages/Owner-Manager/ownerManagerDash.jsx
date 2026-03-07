import React from 'react';
import { BrickWall, TrendingUp, AlertTriangle, Truck, Wallet } from 'lucide-react';

import OwnerChart from '../../components/Owner-Manager/dashChart.jsx';
import ShipmentTable from '../../components/Owner-Manager/shipmentTable.jsx';
import ApprovalCard from '../../components/Owner-Manager/approvalCard.jsx';

const approvals = [ 
    { item: 'Clay', quantity: '500kg', requestedBy: 'Supervisor 1' },
    { item: 'Coal', quantity: '500kg', requestedBy: 'Supervisor 2' },
    { item: 'Cement', quantity: '500kg', requestedBy: 'Supervisor 3' },
    { item: 'Petrol', quantity: '500L', requestedBy: 'Supervisor 4' },
    { item: 'Sand', quantity: '500kg', requestedBy: 'Supervisor 5' },
    { item: 'Bricks', quantity: '500kg', requestedBy: 'Supervisor 6' },
    { item: 'Clay', quantity: '500kg', requestedBy: 'Supervisor 7' },
 ];

function OwnerManager() {
    return (
        <div className='flex flex-col mt-4 md:mt-8 px-4 md:px-5'>
            {approvals.map(a => (
                <ApprovalCard item={a.item} quantity={a.quantity} requestedBy={a.requestedBy}/>
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
                    <ShipmentTable/>
                </div>
            </div>
        </div>
    );
}

export default OwnerManager;