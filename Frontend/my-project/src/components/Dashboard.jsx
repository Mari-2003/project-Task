import React, { useEffect, useState } from 'react'
import axios from 'axios'


export const Dashboard = () => {
    const [users, setUsers]  = useState([]);

    const getAllUsers = async () =>{
    await axios.get("http://localhost:3001/api/v1/alluser").then
    ((res)=> {
        setUsers(res.data.data);
    })
    }
    useEffect(()=>{
        getAllUsers();
    },[])
    
  return (
    <div className='bg-gray-400 h-screen w-full relative overflow-x-auto shadow-md sm:rounded-lg  '>
    <div className=' flex-col items-center justify-center bg-white w-full h-full'>
    <h2 className='font-semibold bg-red-300 px-3 py-4 mb-5 text-center'>ADMIN PANEL</h2>
    <div className='mb-3 flex justify-center space-x-60 w-full'>
        <input type ='search' placeholder='search' className='border rounded outline-none px-9 py-1 text-left'/>
        <div>
         <button className='px-2 py-1 bg-lime-600 rounded font-bold text-white hover:bg-green-500'> Add Record</button>
    </div>
    </div>
    <div className="flex justify-center ">
    <table className= 'text-center border border-black  '>
            <thead className=' text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400'>
        <tr className=''>
            <th className='px-4 py-2'>S.NO</th>
            <th className='px-4 py-2'>Name</th>
            <th className='px-4 py-2'>MobileNumber</th>
            <th className='px-4 py-2'>Email</th>
            <th className='px-4 py-2'>Edit</th>
            <th className='px-4 py-2'>Delete</th>
        </tr>
        </thead>
        <tbody>
  {Array.isArray(users) && users.map((user) => {
    return (
      <tr className='flex-wrap'>
        <td className='px-4 py-2'>{user.id}</td>
        <td className='px-4 py-2'>{user.name}</td>
        <td className='px-4 py-2'>{user.email}</td>
        <td className='px-4 py-2'>{user.mobileNumber}</td>
        <td className='px-4 py-2'>
          <button className='bg-lime-600 font-semibold px-2 py-1 hover:bg-green-500 rounded'>Edit</button>
        </td>
        <td className='px-4 py-2'>
          <button className='bg-gray-500 font-semibold px-2 py-1 hover:bg-gray-400 rounded'>Delete</button>
        </td>
      </tr>
    );
  })}
</tbody>

    </table>



</div>
</div>
</div>
  )
}
