import React, { Component } from 'react';
import './css/Studentview.css';
import loadingGif from './images/loading.gif';

class Studentview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student: null,
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            standard: e.target.standard.value,
            section: e.target.section.value,
            rollNumber: e.target.rollNumber.value,
            medium: e.target.medium.value,
        };

        try {
            const response = await fetch('/student/view', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            this.setState({ student: data });
        } catch (error) {
            console.error('Error fetching student data:', error);
        }
    };

    render() {
        const { student } = this.state;
        const standardOptions = [];

        // Generate options from 1 to 12
        for (let i = 1; i <= 12; i++) {
            standardOptions.push(
                <option key={i} value={i}>
                    {i}
                </option>
            );
        }

        return (
            <div className="container">
                <div>
                    <form onSubmit={this.handleSubmit} name="two-column-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="rollNumber">Roll Number:</label>
                                <input type="text" id="rollNumber" name="rollNumber" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="standard">Standard:</label>
                                <select id="standard" name="standard" required>
                                    {standardOptions}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="section">Section:</label>
                                <select id="section" name="section" required>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="medium">Medium:</label>
                                <select id="medium" name="medium" required>
                                    <option value="English">English</option>
                                    <option value="Tamil">Tamil</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <button type="submit">View Student</button>
                        </div>
                    </form>
                </div>
                <h1>Student Information</h1>
                {student ? (
                    <div>
                        <h2>Name: {student.name}</h2>
                        <p>Standard: {student.standard}</p>
                        <p>Section: {student.section}</p>
                        <p>Roll Number: {student.rollNumber}</p>
                        <p>Medium: {student.medium}</p>
                        <p>Blood Group: {student.bloodGroup}</p>
                        <p>Parent Name: {student.parentName}</p>
                        <p>Mobile Number: {student.mobileNumber}</p>
                        <p>Email: {student.email}</p>
                        <p>Address: {student.address}</p>
                    </div>
                ) : (
                    <img src={loadingGif} alt="Loading..." />
                )}
            </div>
        );
    }
}

export default Studentview;
