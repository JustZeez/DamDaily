import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { deactivateUserAccount } from '../data/api';
import { toast } from 'react-toastify';

export default function Sidebar() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false); 
  const [loading, setLoading] = useState(false);

  const handleDeactivateConfirm = async () => {
    const password = prompt("Please enter your password to confirm deactivation:");
    
    if (!password) return;

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await deactivateUserAccount(password, token);
      
      if (res.data.success) {
        toast.success("Account deactivated successfully. We're sorry to see you go!");
        localStorage.clear();
        setShowModal(false);
        setTimeout(() => navigate('/login'), 2000); 
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Error deactivating account");
    } finally {
      setLoading(false);
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

       
        <div 
          onClick={() => setShowModal(true)}
          className='text-sm cursor-pointer flex items-center gap-2 font-semibold transition-colors duration-200 rounded-lg hover:bg-red-100 text-gray-700 p-3 m-2'
        >
          <i className='pi pi-trash text-red-500'></i> <span>Deactivate</span>
        </div>
      </div>

     
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm w-full transform transition-all scale-105">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="pi pi-exclamation-triangle text-red-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Wait! We hate to see you go...</h3>
              <p className="text-gray-600 mb-6">Are you absolutely sure you want to deactivate your account? This action cannot be undone.</p>
              
              <div className="flex flex-col gap-3">
                <button 
                  onClick={handleDeactivateConfirm}
                  disabled={loading}
                  className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? <i className="pi pi-spin pi-spinner"></i> : "Yes, Deactivate"}
                </button>
                <button 
                  onClick={() => setShowModal(false)}
                  className="w-full bg-gray-100 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  No, stay with us
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}