import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Toaster } from 'react-hot-toast';
import {SignUp} from './SignUp';
import { useSignupMutation } from '../../store/api/user';

interface Values {
  name: string;
  email: string;
  mobileNumber: string;
  fileUpload: object | null;
  password: string;
}


const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    mobileNumber: Yup.string().matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits').required('Required'),
    fileUpload: Yup.mixed().test('fileType', 'Please upload a valid photo', (value) => {
      if (!value) return true; 
      return value instanceof File;
    }).required('Required'),
    password: Yup.string()
      .required('Required')
      .min(8, 'Password must be at least 8 characters')
      .matches( /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,16}$/, 'Password must contain one uppercase letter, one number, and one special symbol'),
  });

const Page = () => {
    const [signup] = useSignupMutation();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobileNumber: '',
      fileUpload: null,
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values: Values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Toaster />
      <SignUp formik={formik} />
    </div>
  );
};

export default Page;
