import React, { useState } from 'react'
import userProfile from '../assets/profile.png'


export const UserDashboard = () => {
  const [users,setUsers] = useState({})

  const getoneUsers = async () =>{
    await axios.get("http://localhost:3001/api/v1/profile").then
    ((res)=> {
        //console.log(res.data)
        setUsers(res.data.data);
    })
    }
    useEffect(()=>{
      getoneUsers();
    },[])

  return (
    <div className='flex justify-center items-center text-wrap h-screen w-full'>
    <div className='bg-gray-950 text-center flex-col justify-center items-center space-y-5 w-3/12 h-4/5 rounded-md'>
        <span className='text-4xl text-white'>PROFILE</span>
        <div className="flex justify-center mt-5 mb-5">
            <img src={userProfile} alt='User' className=''/>
        </div>
        <h3 className='text-white'>Full Name</h3>
        <h3 className='text-white'>Email.gmail.com</h3>
        <h3 className='text-white'>9500813803</h3>

        <div className=''>
            <button className='bg-lime-500 rounded-lg p-3 font-medium hover:bg-green-500'>Edit</button>
        </div>
    </div>
</div>


  )
}
