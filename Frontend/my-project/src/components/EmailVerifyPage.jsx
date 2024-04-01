import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmailVerifyPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSendOTP = async () => {
    if (email.trim() === '') {
      setError('Please enter an email address.');
    } else if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      try {
        const response = await axios.post('http://localhost:3001/api/v1/sendotp', { email });
        const otpCode = response.data.data.otpCode;
        setSuccessMessage(response.data.message);
        navigate('/otp', { state: { otpCode } });
      } catch (error) {
        setError('Error sending OTP. Please try again later.');
        console.error('Error sending OTP:', error);
      }
    }
  };

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen w-full bg-cyan-600'>
      <div className='w-3/12 h-auto rounded-lg p-6 space-y-8 bg-gray-200 text-center'>
        <h1 className='text-3xl text-black font-semibold'>EMAIL VERIFICATION</h1>
        <input
          type='text'
          placeholder='Email Address'
          className='w-full border outline-none p-2'
          value={email}
          onChange={handleInputChange}
        />
        <button
          className='text-white bg-blue-500 rounded px-2 py-2 font-medium'
          onClick={handleSendOTP}
        >
          Send OTP
        </button>
        {error && <p className='text-red-500'>{error}</p>}
        {successMessage && <p className='text-green-500'>{successMessage}</p>}
      </div>
    </div>
  );
};

export default EmailVerifyPage;
