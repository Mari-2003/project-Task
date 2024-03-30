import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdLock } from "react-icons/io";



export const Login = ({formik}) => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-800">
      <div className="flex-col mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="font-semibold text-2xl text-blue-700 mb-8 text-center">Login Form</h1>
        <div className="w-full  flex justify-center items-center mb-4">
          <div className='p-4  bg-lime-500 rounded-full'>
          <IoMdLock className=" w-10 h-10" />
          </div>
        </div>
        <div className="mb-6 relative">
  <label className="block text-gray-600 mb-1">Email</label>
  <div className="absolute py-3.5 left-3.5 flex items-center pointer-events-none">
    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
    </svg>
  </div>
  <input type="email" id="email" placeholder="Enter your Email" className="w-full px-10 py-2 rounded border-gray-300 focus:border-blue-500 focus:outline-none" required />
</div>

        <div className="mb-6">
          <label className="block text-gray-600 mb-1">Password</label>
          <input type="password" id ="password" placeholder="Enter your password" className="w-full px-4 py-2 rounded border-gray-300 focus:border-blue-500 focus:outline-none"  required/>
        </div>
        <div className='flex justify-center items-center'>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Login
        </button>
        </div>
        <div className="mt-4">
          <p className="text-gray-700 text-lg">Don't have an account? <Link to="/signup" className="text-blue-500">Create New Account</Link></p>
        </div>
      </div>
    </div>
  );
};
