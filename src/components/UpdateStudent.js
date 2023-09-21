    // Dashboard.js
    import React from 'react';
    import { Route, Switch } from 'react-router-dom';
    import Sidebar from './sidebar';
    import './css/dashboard.css'
    import Studentupdate from './Studentupdate'


    function UpdateStudent() {
    return (
        <div className="dashboard">
        <Sidebar />
        <div className="content">
        <Studentupdate/>
        </div>
       
        </div>

    );
    }

    export default UpdateStudent;
