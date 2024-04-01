// UserDashboard.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import userProfile from '../assets/profile.png';
import { useParams } from 'react-router-dom';


const UserDashboard = ({}) => {
  const { id } = useParams(); 
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/v1/profile/${id}`);
        console.log(response,"indhu")
        setUser(response.data.data);
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Server responded with error status:', error.response.status);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received from server:', error.request);
        } else {
          // Something else happened while setting up the request
          console.error('Error setting up the request:', error.message);
        }
      }
    };
  
    fetchUserData();
  }, [id]);
  
  return (
    <div className='flex justify-center items-center text-wrap h-screen w-full'>
      <div className='bg-gray-950 text-center flex-col justify-center items-center space-y-5 w-3/12 h-4/5 rounded-md'>
        <span className='text-4xl text-white'>PROFILE</span>
        <div className="flex justify-center mt-5 mb-5">
          <img src={userProfile} alt='User' className='' />
        </div>
        <h3 className='text-white'>{user.name}</h3>
        <h3 className='text-white'>{user.email}</h3>
        <h3 className='text-white'>{user.mobileNumber}</h3>

        <div className=''>
          <button className='bg-lime-500 rounded-lg p-3 font-medium hover:bg-green-500'>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
