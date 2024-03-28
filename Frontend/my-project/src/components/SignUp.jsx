import React from 'react'
import { GrAndroid } from "react-icons/gr";



export const SignUp = () => {
  return (
    <div className='h-screen w-auto flex bg-gray-600 items-center justify-center '>
    <div className="h-screen w-max  flex-col bg-white rounded-lg shadow-lg items-center justify-center">
        <div className='mx-auto '>
            <h1 className="font-semibold mt-4 text-3xl text-blue-700 mb-8 text-center">Register Form</h1>
        </div>
        <div className='mb-5 flex items-center justify-center rounded-full  w-12 h-12 bg-'>
        <GrAndroid className='w-8 h-8'/>
        </div>
        <div className='mb-6'>
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
            <button className='bg-blue-500 rounded flex items-center justify-center text-center font-semibold'>
    SignUp
</button>

        </div>
    </div>
    </div>
  )
}
