import React from 'react'


export const Dashboard = () => {
  return (
    <div className='bg-gray-400 h-screen w-full '>
    <div className=' flex-col items-center justify-center bg-white w-max h-full'>
    <h2>ADMIN PANEL</h2>
    <div className='input-search'>
        <input type ='search' />
        <button> Add Record</button>
    </div>
    <table className= 'table'>
        <thead>
            <tr>
                <th>S.NO</th>
                <th>Name</th>
                <th>Email</th>
                <th>MobileNumber</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
        <tr>
                <td>1</td>
                <td>Ram</td>
                <td>marinamachivayam@gmail.com</td>
                <td>95008183803</td>
                <td>
                    <button>Edit</button>
                </td>
                <td>
                    <button>Delete</button>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Maro</td>
                <td>marinamachivayam@gmail.com</td>
                <td>95008183803</td>
                <td>
                    <button>Edit</button>
                </td>
                <td>
                    <button>Delete</button>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Esai</td>
                <td>marinamachivayam@gmail.com</td>
                <td>7486574354</td>
                <td>
                    <button>Edit</button>
                </td>
                <td>
                    <button>Delete</button>
                </td>
            </tr>
            <tr>
                <td>4</td>
                <td>Ravi</td>
                <td>marinamachivayam@gmail.com</td>
                <td>95008183803</td>
                <td>
                    <button>Edit</button>
                </td>
                <td>
                    <button>Delete</button>
                </td>
            </tr>
        </tbody>
            
    </table>

</div>
</div>
  )
}
