
import React from 'react';
import MarkAttendanceCard from '../components/shared/MarkAttendanceCard';
const MarkAttendance = ({ activeClasses }) => {

  const handleAttendanceMarked = (id) => {
     // call to backend for updating attendace
  };
  return (
    <div className="mt-4">
       <h2 className="text-3xl font-semibold text-red-600">Mark Your Attendance</h2>
      <div className='space-y-5 mt-2'>
         {activeClasses.map((activeClass) => (
            <MarkAttendanceCard
              key={activeClass.id}
              {...activeClass}
              onAttendanceMarked={() => handleAttendanceMarked(activeClass.id)}
            />
         ))}
      </div>
    </div>
  );
};

export default MarkAttendance;
