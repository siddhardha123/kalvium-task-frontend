import React, { useState } from 'react';

const AttendanceCard = ({ className, time, venue, links }) => {
  const [ipAddress, setIpAddress] = useState('');
  const locationIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );

  const clockIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const handleAttendanceClick = () => {
    // Get user's geolocation
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Fetch IP address using ipify service
          const response = await fetch('https://api.ipify.org?format=json');
          const data = await response.json();
          const fetchedIpAddress = data.ip;

          // Log the details
          console.log('Latitude:', latitude);
          console.log('Longitude:', longitude);
          console.log('IP Address:', fetchedIpAddress);

          // Set the IP address in state
          setIpAddress(fetchedIpAddress);
          console.log(ipAddress)
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    } else {
      console.error('Geolocation is not available in this browser.');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-4 flex justify-between">
      <div>
      <h3 className="text-xl font-semibold mb-2">{className}</h3>
      <div className="flex items-center mb-2">
        {clockIcon}
        <span className="text-gray-600">{time}</span>
      </div>
      <div className="flex items-center mb-2">
        {locationIcon}
        <span className="text-gray-600">{venue}</span>
      </div>

      </div>
      <div>
      <button
        onClick={handleAttendanceClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
      >
        Mark Attendance
      </button>

      </div>
      
    </div>
  );
};

export default AttendanceCard;
