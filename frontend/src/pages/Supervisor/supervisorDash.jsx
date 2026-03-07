import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { TrendingUp, Truck } from 'lucide-react';

import ShipmentTable from '../../components/Owner-Manager/shipmentTable.jsx';

import { SupervisorContext } from '../../contexts/SupervisorContext.jsx';

function Supervisor() {
    const [loading, setLoading] = React.useState(true);
    const { shipments, getShipments } = React.useContext(SupervisorContext);

    React.useEffect(() => {
        getShipments();
        setLoading(false);
    }, []);

    return (
        <div className='flex flex-col mt-8'>
            <div className='flex flex-col items-center justify-center mt-8 ml-5 mr-5 mb-8'>
                <div className='bg-card p-10 rounded-lg w-full'>
                    <ShipmentTable shipments={shipments}/>
                </div>
            </div>
        </div>
    );
}

export default Supervisor;