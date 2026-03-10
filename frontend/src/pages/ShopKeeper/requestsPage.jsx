import React from 'react';

import RequestsTable from '../../components/shopkeeper/requestsTable.jsx';
import { ShopKeeperContext } from '../../contexts/ShopKeeperContext.jsx';

function RequestsPage() {
    const { getRequests, requests } = React.useContext(ShopKeeperContext);

    React.useEffect(() => {
        getRequests();
    }, []);
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col items-center justify-center mt-8 ml-5 mr-5 mb-8'>
                <div className='bg-card p-10 rounded-lg w-full'>
                    <RequestsTable requests={requests}/>
                </div>
            </div>
        </div>
    );
}

export default RequestsPage;