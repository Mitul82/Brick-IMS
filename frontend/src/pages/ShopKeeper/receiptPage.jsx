import React from 'react';
import { Truck } from 'lucide-react';

import InwardEntryForm from '../../components/shopkeeper/receiptForm';
import ReceiptTable from '../../components/shopkeeper/receiptTable.jsx';

function ReceiptPage() {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col items-center justify-center mt-4 md:mt-8 px-4 md:px-8 mb-8'>
                <div className='bg-card p-10 rounded-lg w-full'>
                    <InwardEntryForm/>
                </div>

                <div className='bg-card p-10 rounded-lg w-full mt-8'>
                    <ReceiptTable/>
                </div>
            </div>
        </div>
    );
}

export default ReceiptPage;