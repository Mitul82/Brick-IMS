import React from 'react';

import IssuanceForm from '../../components/shopkeeper/issueForm.jsx';
import IssuanceTable from '../../components/shopkeeper/issueTable.jsx';

function IssuancePage() {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col items-center justify-center mt-8 ml-5 mr-5 mb-8'>
                <div className='bg-card p-10 rounded-lg w-full'>
                    <IssuanceForm/>
                </div>

                <div className='bg-card p-10 rounded-lg w-full mt-8'>
                    <IssuanceTable/>
                </div>
            </div>
        </div>
    );
}

export default IssuancePage;