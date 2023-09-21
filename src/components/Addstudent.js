// Dashboard.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './sidebar';
import Studentdataadd from './Sudentdataadd'
import './css/dashboard.css'

function AddStudent() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        < Studentdataadd/> {/* Include the StudentInfoForm component */}
        {/* Rest of your dashboard content */}
      </div>
      {/* Content area and routing */}
      {/* ... */}
    </div>

  );
}

export default AddStudent;
