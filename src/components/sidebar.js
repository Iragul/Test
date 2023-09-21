// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './css/sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/addstudent">Add Student</Link>
        </li>
        <li>
          <Link to="/viewstudent">View Student</Link>
        </li>
        <li>
          <Link to="/updatestudent">Update Student</Link>
        </li>
        <li>
          <Link to="/createexam">Create Exam</Link>
        </li>
        <li>
          <Link to="/viewexam">View Exam</Link>
        </li>
        <li>
          <Link to="/studentlist">Student List</Link>
        </li>
        
      </ul>
    </div>
  );
}

export default Sidebar;
