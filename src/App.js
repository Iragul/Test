// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './About';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Sidebar from './components/sidebar';
import Studentdataadd from './components/Sudentdataadd'
import AddStudent from './components/Addstudent';
import Studentview from './components/Viewstudent'
import UpdateStudent from './components/UpdateStudent'
import Createexam from './components/CreateExam'
import Viewexam from './components/ViewExam'
import StudentList from './components/StudentList'


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path='/sidebar' element={<Sidebar/>} />
          <Route path='/studentadd' element={<Studentdataadd/>} />
          <Route path="/addstudent" element={<AddStudent/>} />
          <Route path="/viewstudent" element={<Studentview/>} />
          <Route path="/updatestudent" element={<UpdateStudent />} />
          <Route path="/createexam" element={<Createexam />} />
          <Route path="/viewexam" element={<Viewexam />} />
          <Route path="/studentlist" element={<StudentList />} />

         </Routes>
      </div>
    </Router>
  );
}

export default App;
