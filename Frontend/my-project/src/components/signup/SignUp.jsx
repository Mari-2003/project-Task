import React from 'react'
import { GrAndroid } from "react-icons/gr";
import { Link } from 'react-router-dom';

export const SignUp = ({formik}) => {
  return (
    <div className='h-screen flex bg-gray-600 items-center justify-center '>
    <div className="w-4/12  flex-col  bg-white rounded-lg shadow-lg items-center justify-center">
        <div className='mx-auto '>
            <h1 className="font-semibold mt-4 text-3xl text-blue-700 mb-8 text-center">Register Form</h1>
        </div>
        <div className='mb-5 flex items-center justify-center   w-full'>
            <div className='p-4 justify-center items-center rounded-full bg-lime-600'>
        <GrAndroid className='w-8 h-8'/>
        </div>
        </div>
        <div className='mb-6 px-8'>
            <div className='mb-4'>
                <label className='px-2 block'>Name</label>
                <input type='text' placeholder='Enter your Name' className='w-full px-4 py-2 outline-none'/>
            </div>
            <div className='mb-4'>
                <label className='block px-2'>Email</label>
                <input type='Email' placeholder='Enter Your Email' className='w-full px-4 py-2 outline-none'/>
            </div>
            <div className='mb-4'>
                <label className='block px-2'>MobileNumber</label>
                <input type='MobileNumber' placeholder='Enter Your MobileNumber' className='rounded w-full px-4 py-2 outline-none'/>
            </div>
            <div className='mb-4'>
         <label htmlFor="pictureUpload" className='block px-2'>Picture Upload</label>
        <input type="file" id="pictureUpload" name="pictureUpload" accept="image/*"  className='rounded w-full px-4 py-2 outline-none'/>
        </div>
            <div className='mb-4'>
                <label className='block px-2'>Password</label>
                <input type='Password' placeholder='Create Password' className='rounded w-full px-4 py-2 outline-none' />
            </div>
            <div className='flex justify-center item-center'>
            <button className='bg-blue-500 px-4 py-2 rounded flex items-center justify-center text-center font-semibold' >
   <Link to ='/email'> SignUp</Link> 
</button>
</div>

        </div>
    </div>
    </div>
  )
}
