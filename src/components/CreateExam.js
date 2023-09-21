// Sidebar.js
import React ,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Studentdataadd.css'
import Sidebar from './sidebar';

function CreateExam() {
    const [responseMessage, setResponseMessage] = useState(''); // State to store the response message


     const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Collect form data
    const formData = {
      examname: e.target.examname.value,
      standard: e.target.standard.value,
      section: e.target.section.value,
      totalmark: e.target.totalmark.value,
      medium: e.target.medium.value,
      passmark: e.target.passmark.value,
      date: e.target.date.value,
      
    };

    // Send the data to the backend API as JSON
    try {
      const response = await fetch('/student/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        const msg=data.msg;
        setResponseMessage(`${msg}`);
        console.log('Data sent successfully',data);
      } else {
        const data = await response.json();
        const msg=data.msg;
        setResponseMessage(`${msg}`);
        console.error('Failed to send data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
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

    <div className="student-info-form">
       <div className="response-message">
       
             {responseMessage && <p>{responseMessage}</p>}
        </div>
        <form onSubmit={handleSubmit} name="two-column-form">
        <div className="form-row">
          <div class="form-group">
            <label for="examname">Exam name</label>
            <input type="text" id="examname" name="examname" required/>
          </div>
          <div className="form-group">
             <label htmlFor="standard">Standard</label>
             <select id="standard" name="standard" required>
                                    {standardOptions}
              </select>                  
          </div>
          </div>
          <div className="form-row">

          <div class="form-group">
          <label htmlFor="section">Section</label>
                <select id="section" name="section" required>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>                
                </select> 
          </div>

          <div class="form-group">
          <label htmlFor="medium">Medium:</label>
                                <select id="medium" name="medium" required>
                                    <option value="English">English</option>
                                    <option value="Tamil">Tamil</option>
                                    <option value="Other">Other</option>
                                </select>
          </div>
          </div>
          <div className="form-row">

                <div class="form-group">
                    <label for="totalmark">Total Mark</label>
                    <input type="number" id="totalmark" name="totalmark" required/>
                </div>

                <div class="form-group">
                    <label for="passmark">Pass Mark</label>
                    <input type="number" id="passmark" name="passmark" required/>
                </div>
          </div>
            <div className="form-row">
            <div class="form-group">
            <label for="date">Select a date:</label>
           <input type="date" id="date" name="date"/>
           </div>
            </div>
          <button type="submit">Create Exam</button>
        </form>
       
       </div>
  </div>
  );
}

export default CreateExam;
