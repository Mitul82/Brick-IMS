import React from 'react';
import { PackageOpen, Layers, User, Send } from 'lucide-react';

import { ShopKeeperContext } from '../../contexts/ShopKeeperContext.jsx'; 

function IssuanceForm() {
    const [submit, setSubmit] = React.useState(false);
    const [formData, setFormData] = React.useState({ targetBatchId: '', type: 'default', customer: '', quantity: '', remarks: '' });

    const { sendIssued, getIssued } = React.useContext(ShopKeeperContext);

    React.useEffect(() => {
        getIssued()
    }, [submit]);
        
    const handleInputChange = (e) => {
        const { name, value } = e.target;
            setFormData(prev => ({
              ...prev,
              [name]: value,
        }));
    }
        
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const success = await sendIssued(formData);

            if(success) {
                setSubmit(true);
                return;
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='bg-white p-2 md:p-4 rounded-xl'>
            <div className='flex items-center gap-2 mb-6 text-slate-800'>
                <div className='p-2 bg-primary rounded-lg text-secondary'>
                    <PackageOpen size={20} />
                </div>
                <h3 className='font-bold'>Issue Material to Production</h3>
            </div>

            <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='space-y-4'>
                    <h4 className='text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b pb-1'>Destination</h4>
                    <div>
                        <label htmlFor='targetBatchId' className='block text-xs font-semibold text-slate-600 mb-1'>Target Batch ID</label>
                        <input name='targetBatchId' value={formData.targetBatchId} onChange={handleInputChange} type='text' placeholder='Target Batch ID' className='w-full p-2 text-sm bg-slate-50 border rounded-lg outline-none'/>
                    </div>
          
                    <div>
                        <label htmlFor='customer' className='block text-xs font-semibold text-slate-600 mb-1'>Sold to</label>
                        <div className='relative'>
                            <User className='absolute left-3 top-2.5 text-slate-400' size={16} />
                            <input name='customer' value={formData.customer} onChange={handleInputChange} type='text' placeholder='Supervisor Name' className='w-full p-2 pl-10 text-sm bg-slate-50 border rounded-lg' />
                        </div>
                    </div>
                </div>

                <div className='space-y-4'>
                    <h4 className='text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b pb-1'>Material</h4>
                    <div>
                        <label htmlFor='type' className='block text-xs font-semibold text-slate-600 mb-1'>Material Type</label>
                        <select name='type' value={formData.type} onChange={handleInputChange} className='w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg'>
                            <option value='default' disabled>--Select the type of Brick--</option>
                            <option value='Standard Clay'>Standard Clay</option>
                            <option value='Fly Ash'>Fly Ash</option>
                            <option value='Refractory'>Refractory</option>
                        </select>
                    </div>
                
                    <div>
                        <label htmlFor='quantity' className='block text-xs font-semibold text-slate-600 mb-1'>Quantity Sold</label>
                        <input name='quantity' value={formData.quantity} onChange={handleInputChange} type='number' placeholder='Enter Amount (in Kg)' className='w-full p-2 text-sm bg-slate-50 border rounded-lg' />
                    </div>
                </div>

                <div className='space-y-4'>
                    <h4 className='text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b pb-1'>Notes</h4>
                    <div>
                        <label htmlFor='remarks' className='block text-xs font-semibold text-slate-600 mb-1'>Remarks / Purpose</label>
                        <textarea name='remarks' value={formData.remarks} onChange={handleInputChange} placeholder='e.g., Daily fueling for kiln or batch mixing...' className='w-full p-2 text-sm bg-slate-50 border rounded-lg h-21.5 outline-none'/>
                    </div>
                </div>

                <div className='md:col-span-3 pt-2'>
                    <button className='w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 hover:cursor-pointer shadow-md transition-all flex items-center justify-center gap-2'>
                        <Send size={18} /> Process Issuance & Deduct Stock
                    </button>
                </div>
            </form>
        </div>
    );
}

export default IssuanceForm;