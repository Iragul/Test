import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an instance of URLSearchParams to build the form data
    const formData = new URLSearchParams();
    formData.append('username', username);
    formData.append('password', password);

    try {
      const response = await fetch('/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(), // Convert the form data to a string
      });

      if (response.ok) {
        const data = await response.json();
        // Handle the response from your API here
        console.log('API Response:', data);

        // Check the API response and redirect based on it
        if (data.success) {
          // Redirect to the dashboard on successful login
          navigate('/dashboard');
        } else {
          // Redirect to the login page with an error message on failed login
          navigate('/login');
        }
      } else {
        console.error('API Error:', response.statusText);
      }
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
