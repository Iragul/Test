// Dashboard.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './sidebar';
import Studentdataadd from './Sudentdataadd'
import './css/dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
     <h1>Dashboard</h1>
    </div>

  );
}

export default Dashboard;
