import React from 'react';
import UpcomingClassCard from './shared/UpcomingCard';
const UpcomingClasses = ({ classes }) => {
  return (
    <div className="mt-4">
        

        <h2 className="text-3xl font-semibold text-white">Upcoming Classes</h2>
        
        <div className='space-y-5 mt-2'>
        {
            classes.map((upcomingClass,id) => (
                 < UpcomingClassCard  key={id} {...upcomingClass}/>
            ))
        }
        </div>
    </div>
  );
};

export default UpcomingClasses;
