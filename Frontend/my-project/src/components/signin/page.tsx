// Page.js
import React from 'react';
import * as Yup from 'yup';
import { Login } from './Login';
import { useFormik } from "formik";
import { toast, ToastContainer } from 'react-toastify';
import { useLoginMutation } from '../../store/api/user';

// Define the interface for form values
interface Values {
  email: string;
  password: string;
}

// Define validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

const Page = () => {
  const [login] = useLoginMutation(); // Custom hook for login mutation
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values: Values) => {
      try {
        // Your form submission logic
      } catch (error) {
        // Handle errors
      }
    },
  });

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <ToastContainer />
      <Login formik={formik} />
    </div>
  );
}

export default Page;
