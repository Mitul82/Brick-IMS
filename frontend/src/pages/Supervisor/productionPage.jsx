import React from 'react';

import ProductionTable from '../../components/Supervisor/productionTable.jsx';
import { SupervisorContext } from '../../contexts/SupervisorContext';

function ProductionPage() {
    const [formData, setFormData] = React.useState({ batchId: '', type: '', produced: '', wastage: '' });
    const [submit, setSubmit] = React.useState(false);

    const { sendProduction, getProduction, production } = React.useContext(SupervisorContext);

    React.useEffect(() => {
        getProduction();
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
            const success = await sendProduction(formData);

            if(success) {
                setSubmit(true);
                return;
            }

            return false;
        } catch (err) {
            console.error(err);
        }
    }
 
    return (
        <div className='flex flex-col'>
            <div className='bg-card ml-4 mr-4 p-6 rounded-xl shadow-sm'>
               <div className='bg-white p-6 rounded-xl border border-slate-200 shadow-sm'>
                    <h3 className='font-bold text-slate-800 mb-6 flex items-center gap-2'>
                        <span className='w-2 h-6 bg-orange-600 rounded-full'></span>
                        Production Entry
                    </h3>

                    <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='batchId' className='block text-xs font-bold text-slate-500 uppercase mb-1'>Batch ID / Reference</label>
                                <input type='text' name='batchId' value={formData.batchId} onChange={handleInputChange} placeholder='e.g. B-106' className='w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none' />
                            </div>
                        </div>

                        <div className='space-y-4'>
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <label htmlFor='produced' className='block text-xs font-bold text-slate-500 uppercase mb-1'>Actual Produced</label>
                                    <input type='number' name='produced' value={formData.produced} onChange={handleInputChange} placeholder='0' className='w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg' />
                                </div>

                                <div>
                                    <label htmlFor='wastage' className='block text-xs font-bold text-slate-500 uppercase mb-1'>Wastage / Breakage</label>
                                    <input type='number' name='wastage' value={formData.wastage} onChange={handleInputChange} placeholder='0' className='w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg' />
                                </div>
                            </div>
                        </div>

                        <div className='w-full md:col-span-2'>
                            <label htmlFor='type' className='block text-xs font-bold text-slate-500 uppercase mb-1'>Brick Type</label>
                            <select name='type' value={formData.type} onChange={handleInputChange} className='w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg'>
                                <option>Standard Clay</option>
                                <option>Fly Ash</option>
                                <option>Refractory</option>
                            </select>
                        </div>

                        <div className='md:col-span-2'>
                            <button type='submit' className='w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg shadow-md transition-all active:scale-[0.98] hover:cursor-pointer'>
                                Add Production Batch
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className='bg-card ml-4 mr-4 p-6 rounded-xl shadow-sm mt-8 mb-8'>
                <ProductionTable production={ production }/>
            </div>
        </div>
    );
}

export default ProductionPage;