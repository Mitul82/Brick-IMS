import React from 'react';

import ShipmentTable from '../components/Owner-Manager/shipmentTable';

function ShipmentsPage() {
    return (
        <div className='flex flex-col mt-8'>
            <div className='flex flex-col items-center justify-center mt-5 mb-5 ml-4 mr-4'>
                <div className='bg-card p-10 rounded-lg w-full'>
                    <ShipmentTable/>
                </div>
            </div>
        </div>
    );
}

export default ShipmentsPage;