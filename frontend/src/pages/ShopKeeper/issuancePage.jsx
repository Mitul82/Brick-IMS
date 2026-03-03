import React from 'react';

import IssuanceForm from '../../components/shopkeeper/issueForm.jsx';
import IssuanceTable from '../../components/shopkeeper/issueTable.jsx';

function IssuancePage() {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='flex flex-col items-center justify-center mt-4 md:mt-8 px-4 md:px-8 mb-8'>
                <div className='bg-card p-4 md:p-8 rounded-lg w-full shadow-sm'>
                    <IssuanceForm/>
                </div>

                <div className='bg-card p-4 md:p-8 rounded-lg w-full mt-6 md:mt-8 shadow-sm'>
                    <IssuanceTable/>
                </div>
            </div>
        </div>
    );
}

export default IssuancePage;