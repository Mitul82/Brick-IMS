import React from 'react';
import { Package, ArrowDownCircle, ArrowUpCircle, AlertTriangle } from 'lucide-react';

import StockLevelChart from '../../components/shopkeeper/shopkeeperChart';
import QuickRequestForm from '../../components/shopkeeper/shoprequestForm';

function ShopKeeper() {
    return (
        <div className='flex flex-col mt-4 md:mt-8 px-4 md:px-5'>
            <div className='mt-6 md:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='lg:col-span-2 bg-white p-4 md:p-6 rounded-xl border border-slate-100 overflow-hidden'>
                   <h3 className='font-bold text-slate-800 mb-4'>Stock Availability</h3>
                   <div className='w-full overflow-x-auto'>
                        <StockLevelChart/>
                   </div>
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