import React from 'react';
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const ProgressRing = ({ presentHours, totalHours }) => {
  const percentage = (presentHours / totalHours) * 100
  return (
    <div className='flex justify-center align-center'>

      <div className='w-[15rem]' >
        <p className='text-2xl text-center text-red-600'></p>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            pathColor: percentage >= 75 ? "green" : "red",
            textColor: "white",
          })}
        />
      </div>

    </div>
  );
};

export default ProgressRing;
