// Dashboard.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './sidebar';
import StudentView from './Studentview'
import './css/dashboard.css'

function Viewstudent() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        < StudentView/> {/* Include the StudentInfoForm component */}
        {/* Rest of your dashboard content */}
      </div>
      {/* Content area and routing */}
      {/* ... */}
    </div>

  );
}

export default Viewstudent;
