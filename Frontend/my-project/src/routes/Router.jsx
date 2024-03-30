import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {Login} from '../components/signin/Login'; 
import { Dashboard } from '../components/Dashboard';
import { UserDashboard } from '../components/UserDashboard';
import { EmailVerifyPage } from '../components/EmailVerifyPage';
import { OtpPage } from '../components/OtpPage';
import { SignUp } from '../components/signup/SignUp';


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
    path:'/user',
    element:<UserDashboard/>
},
{
    path:'/email',
    element:<EmailVerifyPage />
},
{
    path:'/otp',
    element:<OtpPage/>
}
])


