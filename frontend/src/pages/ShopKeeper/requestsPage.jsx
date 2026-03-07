import React from 'react';

import RequestsTable from '../../components/shopkeeper/requestsTable.jsx';

function RequestsPage() {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col items-center justify-center mt-8 ml-5 mr-5 mb-8'>
                <div className='bg-card p-10 rounded-lg w-full'>
                    <RequestsTable/>
                </div>
            </div>
        </div>
    );
}

export default RequestsPage;