import React from 'react';
import { Truck, Scale } from 'lucide-react';

function InwardEntryForm() {
    const [formData, setFormData] = React.useState({ supplier: '', vehicleNo: '', type: '', quantity: '' });
    
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
        console.log('create shopkeepeer context and send post req to backend');
    }

    return (
        <div className='bg-white p-2 md:p-4 rounded-xl'>
            <div className='flex items-center gap-2 mb-6 text-slate-800'>
                <div className='p-2 bg-orange-100 rounded-lg text-orange-600'>
                    <Truck size={20} />
                </div>
                <h3 className='font-bold'>Record Material Receipt (GRN)</h3>
            </div>

            <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='space-y-4'>
                    <h4 className='text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b pb-1'>Logistics</h4>
                    <div>
                        <label htmlFor='supplier' className='block text-xs font-semibold text-slate-600 mb-1'>Supplier</label>
                        <input name='supplier' value={formData.supplier} onChange={handleInputChange} placeholder='Name of Supplier' className='w-full p-2 text-sm bg-slate-50 border rounded-lg text-primary'/>
                    </div>
                    <input name='vehicleNo' value={formData.value} onChange={handleInputChange} type='text' placeholder='Vehicle Number (e.g., UP-16-AX-1234)' className='w-full p-2 text-sm bg-slate-50 border rounded-lg text-primary' />
                </div>

                <div className='space-y-4'>
                    <h4 className='text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b pb-1'>Material</h4>
                    <div>
                        <label htmlFor='type' className='block text-xs font-semibold text-slate-600 mb-1'>Material Type</label>
                        <input name='type' value={formData.type} onChange={handleInputChange} placeholder='Name of Material' className='w-full p-2 text-sm bg-slate-50 border rounded-lg text-primary'/>
                    </div>
                    <div className='flex gap-2'>
                        <input name='quantity' value={formData.quantity} onChange={handleInputChange} type='number' placeholder='Net Weight' className='flex-1 p-2 text-sm bg-slate-50 border rounded-lg text-primary' />
                        <div className='hidden sm:flex p-2 bg-slate-100 rounded text-slate-500 items-center justify-center'><Scale size={18}/></div>
                    </div>
                </div>

                <div className='md:col-span-3 pt-2'>
                    <button type='submit' className='w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/85 hover:cursor-pointer shadow-md transition-all'>
                        Confirm & Add to Inventory
                    </button>
                </div>
            </form>
        </div>
    );
}

export default InwardEntryForm;