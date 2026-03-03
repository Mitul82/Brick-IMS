import React from 'react';
import { TrendingUp, Truck,  } from 'lucide-react';

import MetricCard from '../../components/Owner-Manager/metricCard.jsx';
import ShipmentTable from '../../components/Owner-Manager/shipmentTable.jsx';

function Supervisor() {
    return (
        <div className='flex flex-col mt-8'>
            <div className='flex flex-grid gap-4 rounded-md ml-5 mr-5 justify-evenly items-center'>
                <div className='bg-card p-6 rounded-md w-3xl h-xl'>
                    <MetricCard title='Shift progress' value='45%' trend={null} icon={TrendingUp} color='bg-primary'/>
                </div>

                <div className='bg-card p-6 rounded-md w-3xl h-xl'>
                    <MetricCard title='Shipped today' value='5' trend={null} icon={Truck} color='bg-primary'/>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center mt-8 ml-5 mr-5 mb-8'>
                <div className='bg-card p-10 rounded-lg w-full'>
                    <ShipmentTable/>
                </div>
            </div>
        </div>
    )
}

export default Supervisor;