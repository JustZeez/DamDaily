import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { resetPassword } from "../data/api";
import { toast } from "react-toastify";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const submitReset = async (e) => {
    e.preventDefault();

    try {
     const token = sessionStorage.getItem('resettoken');
     console.log(token);
     if (!token) {
      toast.error('No reset token found. please request a new password reset')
      console.log('No reset token found in sessionStorage');
      return;
     }
     if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      console.log('Passwords do not match');
      return;
     }
      const response = await resetPassword(token, newPassword);
      console.log(response);
      if (response.data?.success) {
        toast.success(response.data.message || 'Password reset sucessful');
        console.log(response.data.message || 'Password reset sucessful');
        sessionStorage.removeItem('resettoken')
        navigate('/login');
      }
      
     
    } catch (error) {
      toast.error(error.response?.data?.message || 'Passwordreset failed');
      console.log(error.data.message);
      
    }
  }
  return (
    <div className="min-h-screen bg-[#f4f7f4] flex justify-center items-center p-6">
      <div className="w-full max-w-md bg-white shadow rounded-xl p-8 border border-green-200">
        <div className="text-3xl font-bold text-center text-green-700 mb-6">
          Reset Password
        </div>
        <div className="text-gray-600 text-center mb-6">
          Create a new password for your account
        </div>
        <form className="space-y-4" onSubmit={submitReset}>
          <div>
            <div className="text-green-700">New Password</div>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword (e.target.value)}
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter new password"
              required
            />
          </div>
          <div>
            <div className="text-green-700">Confirm New Password</div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Confirm new password"
              required
            />
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded font-semibold">Reset Password</button>
          <div className="text-sm text-center text-gray-700">
            <Link to="/login" className="text-green-700 font-semibold">Back to Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}