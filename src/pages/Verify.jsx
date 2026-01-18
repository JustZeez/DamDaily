import React, {useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { verifyOtp } from "../data/api";
import { toast } from "react-toastify";

export default function Verify() {

    const [email, setEmail]  = useState('');
    const [otp, setOtp] = useState('');
    const navigate = useNavigate(); 

    useEffect(() =>{
      const storedEmail = localStorage.getItem('email');
      if (storedEmail) {
        setEmail(storedEmail)
        toast.warning('No eamil found in localStorage');
        console.log('email retrieved from localStorage:', storedEmail);
      }else{
        toast.error('No eamil found in localStorage');
        console.log('No email found in localStorage');
        
      }
    }, [])
    const submitotp = async (e) => {
      e.preventDefault();
      
      if (otp.length !== 6) {
        toast.warning('OTP must be 6 digits' || 'Please enter a valid OTP');
        console.log('OTP must be 6 digits' || 'Please enter a valid OTP');
        return;
      }

      if (!email) {
        toast.warning('Email is missing. Please register first.');
        console.log('Email is missing. Please register first.');
        return;
      }

      try {
        const response = await verifyOtp(email, otp);
        if (response.data.success) {
          toast.success(response.data.message);
          console.log(response.data.message || 'OTP verified successfully');
          localStorage.removeItem('email');
          navigate('/login')
        } else{
          toast.error(response.data.message || 'OTP verification failed');
          console.log(response.data.message || 'OTP verification failed');
        }
      } catch (error) {
        toast.error(error.response?.data?.message)
      }
    }
  return (
    <div className="min-h-screen bg-[#f4f7f4] flex justify-center items-center p-6">
      <div className="w-full max-w-md bg-white shadow rounded-xl p-8 border border-green-200">
        <div className="text-3xl font-bold text-center text-green-700 mb-6">Verify Your Account</div>
        <div className="text-gray-600 text-center mb-6">Enter the OTP code sent to your email or phone number</div>
        <form className="space-y-4" onSubmit={submitotp}>
          <div>
            <div className="text-green-700">OTP Code</div>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter 6-digit code"
              required
            />
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded font-semibold">Verify Account</button>
          <div className="text-sm text-center text-gray-700">
            Didn't receive code?{" "}
            <Link to="/resendotp" className="text-green-700 font-semibold">
              Resend OTP
            </Link>
          </div>
          <div className="text-sm text-center text-gray-700">
            <Link to="/login" className="text-green-700 font-semibold">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}