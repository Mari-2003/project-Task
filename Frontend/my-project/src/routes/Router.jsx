import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from '../components/Dashboard';
import  SignUp from '../components/signup/SignUp';
import Login from '../components/signin/Login';
import UserDashboard from '../components/UserDashboard';
import EmailVerifyPage from '../components/EmailVerifyPage';
import OtpPage from '../components/OtpPage'


export const router = createBrowserRouter([
    {
    path:'/',
    element:<Login />
},
{
    path:'/signup',
    element:<SignUp />
},
{
    path:'/dashboard',
    element:<Dashboard />
},
{
    path: '/user/:id',
    element:<UserDashboard/>
},
{
    path:'/email',
    element:< EmailVerifyPage/>
},
{
    path:'/otp',
    element:<OtpPage/>
}
])


