import React from 'react'

const PerformanceCard = () => {
  return (
    <div className='grid grid-cols gap-4'>
        <div className='bg-white rounded-lg p-4 shadow'>
            <p className='text-[#9E3DAF]'>Total Tests</p>
            <h2 className='txt-xl font-bold'>{summary.totalTests}</h2>
        </div>
        <div className='bg-white rounded-lg p-4 shadow'>
        <p className='text-[#9E3DAF]'>Total Points</p>
        <h2 className='text-xl font-bold'>{summary.totalPoints}</h2>
        </div>
      <div className="bg-white rounded-lg p-4 shadow">
        <p className="text-[#9E3DAF]">Test Awards</p>
        <h2 className="text-xl font-bold">{summary.testAwards}</h2>
      </div>
    </div>
  );
};

export default PerformanceCard;