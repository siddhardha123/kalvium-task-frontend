import React from "react";
import { useAuth } from "../context/AuthContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from "react-router-dom";
import data from "../data.json";
import DashboardHeader from "../components/DashboardHeader";
import ProgressRing from "../components/ProgressRing";
import UpcomingClasses from "../components/UpcomingClasses";
import MarkAttendance from "../components/MarkAttendance";
import Navbar from "../components/Navbar";

const Home = () => {
  const { isAuthenticated, userName } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  const handleMarkAttendance = (className) => {
    // Logic to mark attendance for the selected class
  };

  return (
    <div className="mx-auto px-1 bg-black">
      <Navbar />
      <div className="md:flex justify-between mt-10 md:mx-10">
        <DashboardHeader
          studentName={userName}
          presentHours={data.presentHours}
          totalHours={data.totalHours}
        />
        <ProgressRing
          presentHours={data.presentHours}
          totalHours={data.totalHours}
          color={"green"}
        />
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:px-10">
        <MarkAttendance
          activeClasses={data.activeClasses}
          onMarkAttendance={handleMarkAttendance}
        />
        <UpcomingClasses classes={data.classes} />
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Home;
