import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdLock } from "react-icons/io";

export const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-800">
      <div className="flex-col mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="font-semibold text-2xl text-blue-700 mb-8 text-center">Login Form</h1>
        <div className="bg-spring-green-500 rounded-full w-12 h-12 flex justify-center items-center mb-4">
          <IoMdLock className="w-8 h-8" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-600 mb-1">Email</label>
          <input type="email" placeholder="Enter your Email" className="w-full px-4 py-2 rounded border-gray-300 focus:border-blue-500 focus:outline-none" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-600 mb-1">Password</label>
          <input type="password" placeholder="Enter your password" className="w-full px-4 py-2 rounded border-gray-300 focus:border-blue-500 focus:outline-none" />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Login
        </button>
        <div className="mt-4">
          <p className="text-gray-700 text-lg">Don't have an account? <Link to="/signup" className="text-blue-500">Create New Account</Link></p>
        </div>
      </div>
    </div>
  );
};
