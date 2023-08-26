import React from 'react';
import DashboardHeader from '../components/DashboardHeader'
import ProgressRing from '../components/ProgressRing';
import UpcomingClasses from '../components/UpcomingClasses';
import MarkAttendance from '../components/MarkAttendance';
import Navbar from '../components/Navbar';
const Home = () => {
  const studentName = 'Sid Varma';
  const totalHours = 10;
  const presentHours = 8;

  const activeClasses = [{
    className: 'Mathematics',
    time: '10:00 AM - 11:30 AM',
    venue: 'Room 203',
    links: [
      { label: 'Zoom Meeting', url: 'https://example.com/zoom' },
      { label: 'Class Materials', url: 'https://example.com/materials' },
    ]
  },
  {
    className: 'Mathematics',
    time: '10:00 AM - 11:30 AM',
    venue: 'Room 203',
    links: [
      { label: 'Zoom Meeting', url: 'https://example.com/zoom' },
      { label: 'Class Materials', url: 'https://example.com/materials' },
    ]
  }
]
  const classes = [{
    className: 'Mathematics',
    time: '10:00 AM - 11:30 AM',
    venue: 'Room 203',
    links: [
      { label: 'Zoom Meeting', url: 'https://example.com/zoom' },
      { label: 'Class Materials', url: 'https://example.com/materials' },
    ],
  }, {
    className: 'Mathematics',
    time: '10:00 AM - 11:30 AM',
    venue: 'Room 203',
    links: [
      { label: 'Zoom Meeting', url: 'https://example.com/zoom' },
      { label: 'Class Materials', url: 'https://example.com/materials' },
    ],
  }, {
    className: 'Mathematics',
    time: '10:00 AM - 11:30 AM',
    venue: 'Room 203',
    links: [
      { label: 'Zoom Meeting', url: 'https://example.com/zoom' },
      { label: 'Class Materials', url: 'https://example.com/materials' },
    ],
  }];


  const handleMarkAttendance = (className) => {
    // Logic to mark attendance for the selected class
  };

  return (
    <div className="mx-auto px-1 bg-black">
      <Navbar/>
      <div className='md:flex justify-between mt-10 md:mx-10'>
      <DashboardHeader studentName={studentName} presentHours={presentHours} totalHours={totalHours} />
      <ProgressRing presentHours={presentHours} totalHours={totalHours} color={"green"} />
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:px-10">
        
        <MarkAttendance activeClasses={activeClasses} onMarkAttendance={handleMarkAttendance} />
        <UpcomingClasses classes={classes} />  
       
        
      </div>
    </div>
  );
};

export default Home;
