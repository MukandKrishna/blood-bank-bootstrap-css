// VerifyOTP.js

import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function VerifyOTP() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');
  
  const [otp, setOTP] = useState('');

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      // Send a request to the server to verify the entered OTP
      await axios.post('http://localhost:8000/api/v1/verify-otp', { email, otp });
      // Redirect to the login page upon successful verification
      navigate('/login');
    } catch (error) {
      console.error(error);
      // Handle error, show user-friendly message
    }
  };

  return (
    <div>
      <h1>Verify OTP</h1>
      <p>Please enter the OTP sent to your email: {email}</p>
      <form onSubmit={handleVerifyOTP}>
        <label>OTP:</label>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          required
        />
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
}

export default VerifyOTP;
