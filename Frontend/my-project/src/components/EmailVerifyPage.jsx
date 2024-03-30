import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

export const EmailVerifyPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSendOTP = () => {
    if (email.length === 0) {
      setError('Please enter an email address.');
    } else if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      // Send POST request to API endpoint
      axios.post('http://localhost:3001/api/v1/sendotp', { email })
        .then(response => {
          // Handle successful response
          console.log('OTP sent successfully:', response.data);
          setSuccessMessage(response.data.message); // Update success message state
        })
        .catch(error => {
          // Handle error
          console.error('Error sending OTP:', error);
        });
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen w-full bg-cyan-600'>
      <div className='w-3/12 h-auto rounded-lg p-6 space-y-8 bg-gray-200 text-center'>
        <div className=''>
          <h1 className='text-3xl text-black font-semibold'>EMAIL VERIFICATION</h1>
        </div>
        <div className=''>
          <input
            type='text'
            placeholder='Email Address'
            className='w-full border outline-none p-2'
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className=''>
          <button
            className='text-white bg-blue-500 rounded px-2 py-2 font-medium'
            onClick={handleSendOTP}
          >
            Send OTP
          </button>
        </div>
        {error && <p className='text-red-500'>{error}</p>}
        {successMessage && <p className='text-green-500'>{successMessage}</p>}
      </div>
    </div>
  );
};
