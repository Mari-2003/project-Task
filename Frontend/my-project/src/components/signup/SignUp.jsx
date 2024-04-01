import React from 'react';
import { GrAndroid } from "react-icons/gr";
import { Link, useNavigate } from 'react-router-dom'; 
import { Formik, useFormik } from 'formik';

const SignUp = () => {
  const navigate = useNavigate(); 

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobileNumber: '',
      password: '',
      pictureUpload: null,
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Required';
      }

      if (!values.email) {
        errors.email = 'Required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.mobileNumber) {
        errors.mobileNumber = 'Required';
      } else if (!/^\d{10}$/.test(values.mobileNumber)) {
        errors.mobileNumber = 'Invalid mobile number';
      }

      if (!values.password) {
        errors.password = 'Required';
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('mobileNumber', values.mobileNumber);
        formData.append('password', values.password);
        formData.append('fileUpload', values.pictureUpload); 

        const response = await fetch('http://localhost:3001/api/v1/signup', {
          method: 'POST',
          body: formData,
        });

        if (response === 200 || 201) {
          console.log('Form submitted:', values);
          navigate('/email');
        } else {
          console.error('Failed to submit form:', response.statusText);
        }
      } catch (error) {
        // Log and handle any errors that occur during form submission
        console.error('Error submitting form:', error);
      }
    }
  });

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
        <form onSubmit={formik.handleSubmit} className='mb-6 px-8'>
          <div className='mb-4'>
            <label className='px-2 block'>Name</label>
            <input type='text' placeholder='Enter your Name' className='w-full px-4 py-2 outline-none' id="name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className='mb-4'>
            <label className='block px-2'>Email</label>
            <input type='email' placeholder='Enter Your Email' className='w-full px-4 py-2 outline-none' id="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className='mb-4'>
            <label className='block px-2'>MobileNumber</label>
            <input type='tel' placeholder='Enter Your MobileNumber' className='rounded w-full px-4 py-2 outline-none' id="mobileNumber" name="mobileNumber" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobileNumber} />
            {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
              <div className="text-red-500">{formik.errors.mobileNumber}</div>
            ) : null}
          </div>
          <div className='mb-4'>
            <label htmlFor="pictureUpload" className='block px-2'>File Upload</label>
            <input type="file" id="pictureUpload" name="pictureUpload" accept="image/*" onChange={(event) => formik.setFieldValue("pictureUpload", event.currentTarget.files[0])} className='rounded w-full px-4 py-2 outline-none' />
          </div>
          <div className='mb-4'>
            <label className='block px-2'>Password</label>
            <input type='password' placeholder='Create Password' className='rounded w-full px-4 py-2 outline-none' id="password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className='flex justify-center item-center'>
            <button type="submit" className='bg-blue-500 px-4 py-2 rounded flex items-center justify-center text-center font-semibold'>
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
