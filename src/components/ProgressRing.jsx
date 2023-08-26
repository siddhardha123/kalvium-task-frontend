import React from 'react';
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const ProgressRing = ({ percentage,color }) => {
  return (
     <div className='flex justify-center align-center'>
        
        <div className='w-[15rem]' >
        <CircularProgressbar 
            value={percentage}
            text={`${percentage}%
            `}
            styles={buildStyles({
              pathColor: percentage >= 75 ? "green" : "red",
              textColor : "white",
              rotation: 0.5 + (1 - percentage / 100) / 2
            })}
          />
        </div>
          
     </div>
  );
};

export default ProgressRing;
