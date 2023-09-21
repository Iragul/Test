import React, { Component } from 'react';
import './css/StudentList.css';
import Sidebar from './sidebar';
import loadingGif from './images/loading.gif';

class StudentList extends Component {
  constructor() {
    super();
    this.state = {
      student: [],
      isLoading: false,
      sortColumn: 'rollNumber',
      sortOrder: 'asc',
      errorMessage: '', // Added errorMessage state to display error message
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ isLoading: true, errorMessage: '' });

    const formData = {
      standard: e.target.standard.value,
      section: e.target.section.value,
      medium: e.target.medium.value,
    };

    try {
      const response = await fetch('/student/view/standard', {
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

      if (data.msg === 'No Student Found!!') {
        this.setState({ student: [], isLoading: false, errorMessage: 'No student data found.' });
      } else {
        this.setState({ student: data.msg, isLoading: false });
      }
    } catch (error) {
      console.error('Error fetching student data:', error);
      this.setState({ isLoading: false, errorMessage: 'Error fetching student data.' });
    }
  };

  sortStudents = (property) => {
    const { student, sortOrder } = this.state;
    const sortedStudents = [...student];
  
    sortedStudents.sort((a, b) => {
      if (property === 'rollNumber') {
        const rollA = parseInt(a[property], 10);
        const rollB = parseInt(b[property], 10);
  
        if (sortOrder === 'asc') {
          return rollA - rollB;
        } else if (sortOrder === 'desc') {
          return rollB - rollA;
        }
      } else {
        const propA = a[property];
        const propB = b[property];
  
        if (sortOrder === 'asc') {
          return propA.localeCompare(propB);
        } else if (sortOrder === 'desc') {
          return propB.localeCompare(propA);
        }
      }
  
      return 0;
    });
  
    this.setState({ student: sortedStudents, sortColumn: property });
  };
  

  toggleSortOrder = () => {
    const { sortOrder } = this.state;
    this.setState({ sortOrder: sortOrder === 'asc' ? 'desc' : 'asc' }, () => {
      const { sortColumn } = this.state;
      this.sortStudents(sortColumn);
    });
  };

  render() {
    const { student, isLoading, sortColumn, sortOrder, errorMessage } = this.state;
    const standardOptions = [];

    for (let i = 1; i <= 12; i++) {
      standardOptions.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return (
      <div>
        <Sidebar />
        <div className="container">
          <div>
            <form onSubmit={this.handleSubmit} name="two-column-form">
              <div className="form-row">
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
                <button type="submit">View Exam</button>
              </div>
            </form>
          </div>

          {isLoading ? (
            <img src={loadingGif} alt="Loading..." />
          ) : (
            <div>
              {errorMessage ? (
                <p className="error-message">{errorMessage}</p>
              ) : (
                <div className="table-container">
                <table className="student-table">
                  <thead>
                    <tr>
                      <th onClick={() => this.sortStudents('rollNumber')}>
                        Roll Number
                        {sortColumn === 'rollNumber' && (
                          <span className="sort-icon">{sortOrder === 'asc' ? '▲' : '▼'}</span>
                        )}
                      </th>
                      <th onClick={() => this.sortStudents('name')}>
                        Name
                        {sortColumn === 'name' && (
                          <span className="sort-icon">{sortOrder === 'asc' ? '▲' : '▼'}</span>
                        )}
                      </th>
                      {/* Add more table headers for other student attributes */}
                    </tr>
                  </thead>
                  <tbody>
                    {student.map((student1, index) => (
                      <tr key={index}>
                        <td>{student1.rollNumber}</td>
                        <td>{student1.name}</td>
                        {/* Add more table cells for other student attributes */}
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default StudentList;
