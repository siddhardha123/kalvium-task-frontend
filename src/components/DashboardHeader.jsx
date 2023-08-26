import React from 'react';

const DashboardHeader = ({ studentName, numberOfCourses }) => {
  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-semibold">Welcome {studentName} !</h1>
      <p>Enrolled in {numberOfCourses} courses</p>
    </div>
  );
};

export default DashboardHeader;
