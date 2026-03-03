import React from 'react';
import { BrickWall, TrendingUp, AlertTriangle, Truck, Wallet } from 'lucide-react';

import OwnerChart from '../../components/Owner-Manager/dashChart.jsx';
import MetricCard from '../../components/Owner-Manager/metricCard.jsx';
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
        <div className='flex flex-col mt-8'>
            <div className='flex flex-grid gap-4 rounded-md ml-5 justify-evenly items-center'>
                <div className='bg-card p-6 rounded-md h-xl'>
                    <MetricCard title='Production Today' value='12,500' trend='+12%' icon={BrickWall} color='bg-primary'/>
                </div>
                
                <div className='bg-card p-6 rounded-md h-xl'>
                    <MetricCard title='Avg. Yield' value='94.2%' trend='+0.5%' icon={TrendingUp} color='bg-primary'/>
                </div>

                <div className='bg-card p-6 rounded-md h-xl'>
                    <MetricCard title='Low Stock Alerts' value='03' trend='Critical' icon={AlertTriangle} color='bg-primary'/>
                </div>

                <div className='bg-card p-6 rounded-md h-xl'>
                    <MetricCard title='Active Dispatches' value='08' trend='In-Transit' icon={Truck} color='bg-primary'/>
                </div>
            </div>

            {approvals.map(a => (
                <ApprovalCard item={a.item} quantity={a.quantity} requestedBy={a.requestedBy}/>
            ))}            

            <div className='flex flex-col items-center justify-center mt-5 ml-4 mr-4'>
                <div className='bg-card p-10 rounded-lg w-full'>
                    <OwnerChart/>
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