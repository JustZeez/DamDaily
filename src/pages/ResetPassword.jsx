import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { resetPassword } from "../data/api";
import { toast } from "react-toastify";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false); 

  const navigate = useNavigate();

  const submitReset = async (e) => {
    e.preventDefault();

  
    const token = sessionStorage.getItem('resettoken');
    if (!token) {
      toast.error('No reset token found. Please request a new password reset.');
      return;
    }

    if (newPassword.length < 8) {
      toast.warning('Password must be at least 8 characters long');
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.warning('Passwords do not match'); 
      return;
    }

    setLoading(true); 

    try {
      const response = await resetPassword(token, newPassword);
      
      if (response.data?.success) {
        toast.success(response.data.message || 'Password reset successful');
        sessionStorage.removeItem('resettoken');
        navigate('/login');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Password reset failed');
      console.error('Reset Error:', error);
    } finally {
      setLoading(false); 
    }
  }

  return (
    <div className="min-h-screen bg-[#f4f7f4] flex justify-center items-center p-6">
      <div className="w-full max-w-md bg-white shadow rounded-xl p-8 border border-green-200">
        <div className="text-3xl font-bold text-center text-green-700 mb-6">
          Reset Password
        </div>
        <div className="text-gray-600 text-center mb-6 text-sm">
          Create a new password for your account. Make sure it is at least 8 characters.
        </div>
        
        <form className="space-y-4" onSubmit={submitReset}>
          <div>
            <label className="text-green-700 font-medium text-sm ml-1">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Min 8 characters"
              required
            />
          </div>
          
          <div>
            <label className="text-green-700 font-medium text-sm ml-1">Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Confirm new password"
              required
            />
          </div>

          <button 
            disabled={loading}
            className={`w-full py-2 rounded font-semibold flex items-center justify-center gap-2 transition-all ${
              loading 
                ? "bg-gray-400 cursor-not-allowed text-gray-200" 
                : "bg-green-600 hover:bg-green-700 text-white shadow-md active:scale-95"
            }`}
          >
            {loading && <i className="pi pi-spin pi-spinner text-lg"></i>}
            <span>{loading ? "Updating Password..." : "Reset Password"}</span>
          </button>

          <div className="text-sm text-center text-gray-700">
            <Link to="/login" className="text-green-700 font-semibold hover:underline">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}