import React from 'react'

const Tabs = ({tabs, activeTab, onChange}) => {
  return (
    <div className='flex space-x-4 mb-4'>
        {tabs.map((tab) =>(
            <button
            key={tab}
            className={`px-4 py-2 rounded ${
                activeTab === tab? 'bg-[#9E3DAF] text-white' : 'bg-[#D98CE0] text-white'
            }`}
            onClick={()=> onChange(tab)}
            >
                {tab}
            </button>
        ))}
    </div>
  );
};

export default Tabs