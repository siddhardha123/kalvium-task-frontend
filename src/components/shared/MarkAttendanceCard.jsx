import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LocationIcon,ClockIcon } from '../../icons';
import { getCurrentGeolocation } from '../../utils/geolocation';
const AttendanceCard = ({ className, time, venue, links,onAttendanceMarked }) => {
  const [ipAddress, setIpAddress] = useState('');

  const handleAttendanceClick = async () => {
    try {
      const { latitude, longitude } = await getCurrentGeolocation();

      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      const fetchedIpAddress = data.ip;
      console.log('Latitude:', latitude);
      console.log('Longitude:', longitude);
      console.log('IP Address:', fetchedIpAddress);
      
      onAttendanceMarked();
      
      setIpAddress(fetchedIpAddress);
      console.log(ipAddress);
      toast.success('Attendance marked successfully!', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error('Error getting geolocation:', error);
    }
  };

  return (
    <div className="bg-white  rounded-xl shadow-xl p-4 flex justify-between">
      <div>
      <h3 className="text-xl font-semibold mb-2">{className}</h3>
      <div className="flex items-center mb-2">
        <ClockIcon/>
        <span className="text-red-600">{time}</span>
      </div>
      <div className="flex items-center mb-2">
        <LocationIcon/>
        <span className="text-red-600">{venue}</span>
      </div>

      </div>
      <div>
      <button
        onClick={handleAttendanceClick}
        className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600"
      >
        Mark Attendance
      </button>

      </div>
      
    </div>
  );
};

export default AttendanceCard;
