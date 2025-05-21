import React from 'react'
import  Chart from "react-apexcharts";
const CurrentActivity = () => {
    
    const chartOptions = {
        chart: {
      id: "monthly-progress",
      toolbar: { show: false },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct", "Nov", "Dec",],
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#9E3DAF"],
    };

    const chartSeries = [
    {
      name: "Progress",
      data: [20, 40, 55, 65, 80, 90],
    },
  ];
  return (
    <div className='bg-white p-4 rounded-xl drop-shadow-2xl shadow-[#9E3DAF]'>
        <h3 className='text-lg font-semibold mb-2'>Monthly Progress</h3>
       <Chart
        options={chartOptions}
        series={chartSeries}
        type='line'
        height={250}
       />

    </div>
  );
};

export default CurrentActivity