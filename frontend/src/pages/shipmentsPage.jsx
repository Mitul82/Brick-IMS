import React from 'react';

import ShipmentTable from '../components/Owner-Manager/shipmentTable';
import { AuthContext } from '../contexts/authContext.jsx';
import { OwnerContext } from '../contexts/OwnerContext.jsx';
import { SupervisorContext } from '../contexts/SupervisorContext.jsx';
import { ShopKeeperContext } from '../contexts/ShopKeeperContext.jsx';

function ShipmentsPage() {
    const { user } = React.useContext(AuthContext);
    // const ownerData = React.useContext(OwnerContext);
    const supervisorData = React.useContext(SupervisorContext);
    const shopkeeperData = React.useContext(ShopKeeperContext);

    const [loading, setLoading] = React.useState(true);

    const getRoleContext = () => {
        switch (user?.role) {
            case 'Owner/Manager':
                return { shipments: ownerData.shipments, getShipments: ownerData.getShipments };
            case 'Supervisor':
                return { shipments: supervisorData.shipments, getShipments: supervisorData.getShipments };
            case 'ShopKeeper':
                return { shipments: shopkeeperData.shipments, getShipments: shopkeeperData.getShipments };
            default:
                return { shipments: [], getShipments: () => {} };
        }
    };

    const { shipments, getShipments } = getRoleContext();

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            if (getShipments) {
                await getShipments();
            }
            setLoading(false);
        };
        
        fetchData();
    }, []);

    return (
        <div className='flex flex-col mt-8'>
            <div className='flex flex-col items-center justify-center mt-5 mb-5 ml-4 mr-4'>
                <div className='bg-card p-10 rounded-lg w-full'>
                    <ShipmentTable loading={loading} shipments={shipments}/>
                </div>
            </div>
        </div>
    );
}

export default ShipmentsPage;