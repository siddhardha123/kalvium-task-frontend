import React from 'react';
import MarkAttendanceCard from '../components/shared/MarkAttendanceCard'
const MarkAttendance = ({ activeClasses, onMarkAttendance }) => {
  return (
    <div className="mt-4">
      <h2 className="text-3xl font-semibold text-red-600">Mark Your Attendance</h2>
      <div className='space-y-5 mt-2'>
         {
            activeClasses.map((acticeClass,id)=>(
                <MarkAttendanceCard key={id} {...acticeClass}/>
            ))
         }
      </div>
    </div>
  );
};

export default MarkAttendance;
