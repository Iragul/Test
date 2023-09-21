// Sidebar.js
import React ,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Studentdataadd.css'

function Studentdataadd() {
    const [responseMessage, setResponseMessage] = useState(''); // State to store the response message


     const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Collect form data
    const formData = {
      name: e.target.name.value,
      standard: e.target.standard.value,
      section: e.target.section.value,
      rollNumber: e.target.rollNumber.value,
      medium: e.target.medium.value,
      bloodGroup: e.target.bloodGroup.value,
      parentName: e.target.parentName.value,
      mobileNumber: e.target.mobileNumber.value,
      email: e.target.email.value,
      address: e.target.address.value,
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
  const bloodGroupOptions = ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-', 'Unknown'];

  for (let i = 1; i <= 12; i++) {
    standardOptions.push(
        <option key={i} value={i}>
            {i}
        </option>
    );
}

  return (
   
    
    <div className="student-info-form">
       <div className="response-message">
       
             {responseMessage && <p>{responseMessage}</p>}
        </div>
        <form onSubmit={handleSubmit} name="two-column-form">
        <div className="form-row">
          <div class="form-group">
            <label for="name">1. Name:</label>
            <input type="text" id="name" name="name" required/>
          </div>
          <div className="form-group">
             <label htmlFor="standard">2. Standard:</label>
             <select id="standard" name="standard" required>
                                    {standardOptions}
              </select>                  
          </div>
          </div>
          <div className="form-row">

          <div class="form-group">
          <label htmlFor="section">3.Section:</label>
                <select id="section" name="section" required>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>                
                </select> 
          </div>

          <div class="form-group">
            <label for="rollNumber">4. Roll Number:</label>
            <input type="text" id="rollNumber" name="rollNumber" required/>
          </div>
          </div>
          <div className="form-row">

          <div class="form-group">
          <label htmlFor="medium">5.Medium:</label>
                                <select id="medium" name="medium" required>
                                    <option value="English">English</option>
                                    <option value="Tamil">Tamil</option>
                                    <option value="Other">Other</option>
                                </select>
          </div>

          <div class="form-group">
          <label htmlFor="bloodGroup">6.Blood Group:</label>
                                <select id="bloodGroup" name="bloodGroup" required>
                                    {bloodGroupOptions.map((group) => (
                                        <option key={group} value={group}>
                                            {group}
                                        </option>
                                    ))}
                                </select>
          </div>
          </div>
          <div className="form-row">
          <div class="form-group">
            <label for="parentName">7. Parent Name:</label>
            <input type="text" id="parentName" name="parentName" required/>
          </div>

          <div class="form-group">
            <label for="mobileNumber">8. Mobile Number:</label>
            <input type="tel" id="mobileNumber" name="mobileNumber" required pattern="[0-9]{10}"/>
          </div>
          </div>
          <div className="form-row">
          <div class="form-group">
            <label for="email">9. Email:</label>
            <input type="email" id="email" name="email" required/>
          </div>

          <div class="form-group">
            <label for="address">10. Address:</label>
            <textarea id="address" name="address" required></textarea>
          </div>
          </div>

          <button type="submit">AddStudent</button>
        </form>
       
      </div>
  );
}

export default Studentdataadd;
