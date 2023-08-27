import React from 'react';

const DashboardHeader = ({ studentName, presentHours, totalHours }) => {
  return (
    <div className="p-4 text-white">
      <h1 className="text-4xl font-semibold">Welcome <span className='text-red-600'>{studentName}</span> !</h1>

      <div className='flex justify-around mt-10 text-center space-x-20'>

        <div >
          <span className='text-3xl'>{totalHours}</span>
          <p className='text-xl'>total hours</p>
        </div>
        <div>
          <span className='text-3xl'>{presentHours}</span>
          <p className='text-xl'>  Present hours </p>
        </div>
        <div>
          <span className='text-3xl'>
            {Math.round(presentHours / totalHours >= 0.75
              ? ((totalHours * ((presentHours / totalHours) - 0.75)))
              : ((totalHours * (0.75 - (presentHours / totalHours)))))
            }
          </span>
          <p className='text-xl'>{presentHours / totalHours > 0.75 ? "margin" : "Due hours"}</p>
        </div>

      </div>
    </div>
  );
};

export default DashboardHeader;
