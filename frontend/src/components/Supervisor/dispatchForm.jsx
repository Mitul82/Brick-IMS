import React from 'react';
import { Truck, Navigation, User, Hash } from 'lucide-react';

function DispatchForm() {
    const [formData, setFormData] = React.useState({ customer: '', vehicleNo: '', quantity: '', deliverySite: '', driverName: '', fuelIssued: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
            setFormData(prev => ({
              ...prev,
              [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        console.log('create supervisor context and send post req to backend');
    }

    return (
        <div className='bg-white p-6 rounded-xl border border-slate-200 shadow-sm'>
            <h3 className='font-bold text-slate-800 mb-6 flex items-center gap-2'>
                <Truck className='text-orange-600' size={24} />
                New Dispatch (Gate Pass)
            </h3>
            
            <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='space-y-4'>
                    <div>
                        <label htmlFor='customer' className='block text-xs font-bold text-slate-500 uppercase mb-1'>Customer / Order</label>
                        <input name='customer' value={formData.customer} onChange={handleInputChange} placeholder='Customer Name' className='w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg'/>
                    </div>
                
                    <div>
                        <label htmlFor='deliverySite' className='block text-xs font-bold text-slate-500 uppercase mb-1'>Delivery Site</label>
                            <div className='relative'>
                                <Navigation className='absolute left-3 top-3 text-slate-400' size={16} />
                                <input type='text' name='deliverySite' value={formData.deliverySite} onChange={handleInputChange} placeholder='Sector 62, Noida' className='w-full p-2.5 pl-10 bg-slate-50 border border-slate-200 rounded-lg' />
                            </div>
                    </div>
                </div>

                <div className='space-y-4'>
                    <div>
                        <label htmlFor='vehicleNo' className='block text-xs font-bold text-slate-500 uppercase mb-1'>Vehicle Number</label>
                        <input type='text' name='vehicleNo' value={formData.vehicleNo} onChange={handleInputChange} placeholder='UP-16-AX-0000' className='w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg' />
                    </div>
                
                    <div>
                        <label htmlFor='driverName' className='block text-xs font-bold text-slate-500 uppercase mb-1'>Driver Name</label>
                        <div className='relative'>
                            <User className='absolute left-3 top-3 text-slate-400' size={16} />
                            <input type='text' name='driverName' value={formData.driverName} onChange={handleInputChange} placeholder='John Doe' className='w-full p-2.5 pl-10 bg-slate-50 border border-slate-200 rounded-lg' />
                        </div>
                    </div>
                </div>

                <div className='space-y-4'>
                    <div>
                        <label htmlFor='quantity' className='block text-xs font-bold text-slate-500 uppercase mb-1'>Brick Quantity</label>
                        <div className='relative'>
                            <Hash className='absolute left-3 top-3 text-slate-400' size={16} />
                            <input type='number' name='quantity' value={formData.quantity} onChange={handleInputChange} placeholder='5000' className='w-full p-2.5 pl-10 bg-slate-50 border border-slate-200 rounded-lg' />
                        </div>
                    </div>
            
                    <div>
                        <label htmlFor='fuelIssued' className='block text-xs font-bold text-slate-500 uppercase mb-1'>Fuel Issued (Ltr)</label>
                        <input type='number' name='fuelIssued' value={formData.fuelIssued} onChange={handleInputChange} placeholder='20' className='w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg' />
                    </div>
                </div>

                <div className='md:col-span-3 pt-2'>
                    <button type='submit' className='w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg shadow-md transition-all active:scale-[0.98] hover:cursor-pointer'>
                        Generate Gate Pass & Start Trip
                    </button>
                </div>
            </form>
        </div>
    );
}

export default DispatchForm;