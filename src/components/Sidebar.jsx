// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Sidebar() {
//   return (
//     <div>
//       <div className='shadow-md p-4 m-4 rounded-lg bg-green-50 flex flex-col'>
//         <div className='text-sm cursor-pointer flex items-center gap-2 font-semibold transition-colors duration-200 rounded-lg  hover:bg-green-200 text-gray-700  p-3 m-2 '>
//           <i className='pi pi-user text-blue-500'></i> <span><Link to='/user'>Profile</Link></span>
//         </div>
//         <div className='text-sm cursor-pointer flex items-center gap-2 font-semibold transition-colors duration-200 rounded-lg  hover:bg-green-200 text-gray-700  p-3 m-2'>
//           <i className='pi pi-key text-orange-500'></i> <span><Link to='/changepassword'>Change Password</Link></span>
//         </div>
//         <div className='text-sm cursor-pointer flex items-center gap-2 font-semibold transition-colors duration-200 rounded-lg  hover:bg-green-200 text-gray-700  p-3 m-2'>
//           <i className='pi pi-image text-gray-700'></i><span>Profile Picture</span>
//         </div>
//         <div className='text-sm cursor-pointer flex items-center gap-2 font-semibold transition-colors duration-200 rounded-lg  hover:bg-green-200 text-gray-700  p-3 m-2'>
//           <i className='pi pi-credit-card text-purple-500'></i><span><Link to='/subscription'>Subscription</Link></span>
//         </div>
//         <div className='text-sm cursor-pointer flex items-center gap-2 font-semibold transition-colors duration-200 rounded-lg  hover:bg-green-200 text-gray-700  p-3 m-2'>
//           <i className='pi pi-trash text-red-500'></i> <span>Deactivate</span>
//         </div>
//       </div>
//     </div>
//   )
// }
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { deactivateUserAccount } from '../data/api';

export default function Sidebar() {
  const navigate = useNavigate();

  const handleDeactivate = async () => {
    const confirmFirst = window.confirm("Are you sure you want to deactivate your account?");
    
    if (confirmFirst) {
      const password = prompt("Please enter your password to confirm deactivation:");
      
      if (password) {
        try {
          const token = localStorage.getItem("token");
          const res = await deactivateUserAccount(password, token);
          if (res.data.success) {
            alert("Account deactivated successfully.");
            localStorage.clear(); // Clear token and user data
            navigate('/login');
          }
        } catch (err) {
          alert(err.response?.data?.message || "Error deactivating account");
        }
      }
    }
  };

  return (
    <div className='w-full md:w-64'>
      <div className='shadow-md p-4 m-4 rounded-lg bg-green-50 flex flex-col'>
        <Link to='/user' className='text-sm flex items-center gap-2 font-semibold transition-colors duration-200 rounded-lg hover:bg-green-200 text-gray-700 p-3 m-2'>
          <i className='pi pi-user text-blue-500'></i> <span>Profile</span>
        </Link>
        <Link to='/changepassword' className='text-sm flex items-center gap-2 font-semibold transition-colors duration-200 rounded-lg hover:bg-green-200 text-gray-700 p-3 m-2'>
          <i className='pi pi-key text-orange-500'></i> <span>Change Password</span>
        </Link>
        <Link to='/me' className='text-sm flex items-center gap-2 font-semibold transition-colors duration-200 rounded-lg hover:bg-green-200 text-gray-700 p-3 m-2'>
  <i className='pi pi-id-card text-green-500'></i> <span>Bio</span>
</Link>
        {/* Deactivate Button */}
        <div 
          onClick={handleDeactivate}
          className='text-sm cursor-pointer flex items-center gap-2 font-semibold transition-colors duration-200 rounded-lg hover:bg-red-100 text-gray-700 p-3 m-2'
        >
          <i className='pi pi-trash text-red-500'></i> <span>Deactivate</span>
        </div>
      </div>
    </div>
  );
}