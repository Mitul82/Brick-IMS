import React from 'react';
import { Package, ArrowDownCircle, ArrowUpCircle, AlertTriangle } from 'lucide-react';

import MetricCard from '../../components/Owner-Manager/metricCard';
import StockLevelChart from '../../components/shopkeeper/shopkeeperChart';
import QuickRequestForm from '../../components/shopkeeper/shoprequestForm';

function ShopKeeper() {
    return (
        <div className='flex flex-col mt-8'>
            <div className='flex flex-grid gap-4 rounded-md mx-5 justify-evenly items-center'>
                <div className='bg-card p-6 rounded-md h-xl'>
                    <MetricCard title='Items Below Min' value='02' trend='Critical' icon={AlertTriangle} color='bg-red-500'/>
                </div>

                <div className='bg-card p-6 rounded-md h-xl'>
                    <MetricCard title='Materials Inward' value='12 Tons' trend='+2' icon={ArrowDownCircle} color='bg-emerald-500'/>
                </div>
                
                <div className='bg-card p-6 rounded-md h-xl'>
                    <MetricCard title='Materials Issued' value='45 units' trend='-5' icon={ArrowUpCircle} color='bg-blue-500'/>
                </div>

                <div className='bg-card p-6 rounded-md h-xl'>
                    <MetricCard title='Current Stock Value' value='₹4.2L' trend={null} icon={Package} color='bg-orange-500'/>
                </div>
            </div>

            <div className='mt-8 mx-5 grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='lg:col-span-2 bg-white p-6 rounded-xl border border-slate-100'>
                   <h3 className='font-bold text-slate-800 mb-4'>Stock Availability</h3>
                   <StockLevelChart/>
                </div>
                <div className='bg-white p-6 rounded-xl border border-slate-100'>
                    <h3 className='font-bold text-slate-800 mb-4'>Quick Request</h3>
                    <QuickRequestForm/>
                </div>
            </div>
        </div>
    );
}

export default ShopKeeper;