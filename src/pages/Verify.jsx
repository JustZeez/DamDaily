import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { verifyOtp } from "../data/api";
import { toast } from "react-toastify";

export default function Verify() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
      
      console.log('Email retrieved from localStorage:', storedEmail);
    } else {
      toast.error('No email found. Please register again.');
      console.log('No email found in localStorage');
    }
  }, []);

  const submitotp = async (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      toast.warning('Please enter a valid 6-digit OTP');
      return;
    }

    if (!email) {
      toast.warning('Email is missing. Please register first.');
      return;
    }

    setLoading(true); 

    try {
      const response = await verifyOtp(email, otp);
      if (response.data.success) {
        toast.success(response.data.message || 'OTP verified successfully');
        localStorage.removeItem('email');
        navigate('/login');
      } else {
        toast.error(response.data.message || 'OTP verification failed');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Verification failed');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7f4] flex justify-center items-center p-6">
      <div className="w-full max-w-md bg-white shadow rounded-xl p-8 border border-green-200">
        <div className="text-3xl font-bold text-center text-green-700 mb-6">
          Verify Your Account
        </div>
        <div className="text-gray-600 text-center mb-6">
          Enter the OTP code sent to <span className="font-semibold">{email || 'your email'}</span>
        </div>

        <form className="space-y-4" onSubmit={submitotp}>
          <div>
            <div className="text-green-700 font-medium mb-1">OTP Code</div>
            <input
              type="text"
              maxLength="6"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))} 
              className="w-full p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-center tracking-widest text-xl font-bold"
              placeholder="000000"
              required
            />
          </div>

          <button 
            disabled={loading}
            className={`w-full py-2 rounded font-semibold flex items-center justify-center gap-2 transition-all ${
              loading 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-green-600 hover:bg-green-700 text-white shadow-md active:scale-95"
            }`}
          >
            {loading && <i className="pi pi-spin pi-spinner text-lg"></i>}
            <span>{loading ? "Verifying..." : "Verify Account"}</span>
          </button>

          <div className="text-sm text-center text-gray-700 pt-2">
            Didn't receive code?{" "}
            <Link to="/resendotp" className="text-green-700 font-semibold hover:underline">
              Resend OTP
            </Link>
          </div>
          
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