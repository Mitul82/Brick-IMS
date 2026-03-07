import React from 'react';
import { Send, Info } from 'lucide-react';

import { ShopKeeperContext } from '../../contexts/ShopKeeperContext.jsx';

function QuickRequestForm() {
    const [formData, setFormData] = React.useState({ material: '', quantity: '' });

    const { sendRequest } = React.useContext(ShopKeeperContext);
        
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
            const success = await sendRequest(formData);

            if(success) {
                return;
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='space-y-4'>
            <div className='p-3 bg-blue-50 border border-blue-100 rounded-lg flex gap-2 items-start'>
                <Info size={18} className='text-blue-600 mt-0.5' />
                <p className='text-[11px] text-blue-700'>
                    Requests sent here will appear on the <strong>Manager's Dashboard</strong> for financial approval.
                </p>
            </div>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='material' className='block text-[10px] font-bold text-slate-400 uppercase mb-1'>Material Required</label>
                    <input name='material' value={formData.material} onChange={handleInputChange} placeholder='Eg. Coal' type='text' className='w-full p-2 text-sm bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-orange-500'/>
                </div>

                <div>
                    <label htmlFor='quantity' className='block text-[10px] font-bold text-slate-400 uppercase mb-1'>Desired Quantity</label>
                    <input name='quantity' value={formData.quantity} type='number' onChange={handleInputChange} placeholder='Enter Amount (in Kg)' className='w-full p-2 text-sm bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-orange-500'/>
                </div>

                <button type='submit' className='w-full py-2.5 bg-slate-900 text-white text-xs font-bold rounded-lg hover:cursor-pointer hover:bg-black transition-all flex items-center justify-center gap-2 shadow-md mt-4'>
                    <Send size={14} /> Send Request
                </button>
            </form>
        </div>
    );
}

export default QuickRequestForm;