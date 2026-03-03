import React from 'react';

function MetricCard({ title, value, trend, icon: Icon, color }) {
  return (
    <div className='bg-card p-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between'>
        <div>
            <p className='text-sm font-medium text-slate-500 mb-1'>{title}</p>
            <div className='flex items-baseline gap-2'>
                <h3 className='text-2xl font-bold text-slate-900'>{value}</h3>
                {trend && (
                    <span className={`text-xs font-medium ${trend.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {trend}
                    </span>
                )}
            </div>
        </div>
        <div className={`p-3 rounded-lg ${color} ml-2`}>
            <Icon size={24} className='text-white' />
        </div>
    </div>
  )
};

export default MetricCard;