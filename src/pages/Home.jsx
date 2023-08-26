import React from 'react';
import DashboardHeader from '../components/DashboardHeader'
import ProgressRing from '../components/ProgressRing';
import UpcomingClasses from '../components/UpcomingClasses';
import MarkAttendance from '../components/MarkAttendance';
import Navbar from '../components/Navbar';
const Home = () => {
  const studentName = 'John Doe';
  const numberOfCourses = 5;
  const attendancePercentage = 60;
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
      <DashboardHeader studentName={studentName} numberOfCourses={numberOfCourses} />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 px-10">
        <div>
        <MarkAttendance activeClasses={activeClasses} onMarkAttendance={handleMarkAttendance} />
          
          <UpcomingClasses classes={classes} />
        </div>
        <div>
        <ProgressRing percentage={attendancePercentage} color={"green"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
