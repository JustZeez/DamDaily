import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword } from "../data/api";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const submitforgotpassword = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your registered email');
      return;
    }

    setLoading(true); 

    try {
      const response = await forgotPassword(email);
      if (response.data?.success) {
        toast.success('Reset instructions have been sent to your email');

        if (response.data.data.resetToken) {
          sessionStorage.setItem("resettoken", response.data.data.resetToken);
        }
        navigate('/resetpassword'); 
      }
    } catch (error) {
      console.log("Forgot Password Error:", error);
      toast.error(error.response?.data?.message || 'Failed to send reset link');
    } finally {
      setLoading(false); 
    }
  }

  return (
    <div className="min-h-screen bg-[#f4f7f4] text-gray-800 flex justify-center items-center p-6">
      <div className="w-full max-w-md bg-white/90 shadow-lg rounded-2xl p-8 border border-green-200">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Forgot Password
        </h1>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Enter your registered <span className="font-semibold text-green-700">email</span> below, and we'll
          send you instructions to reset your password.
        </p>

        <form className="space-y-5" onSubmit={submitforgotpassword}>
          <div>
            <label className="block font-semibold text-green-700">
              Email Address
            </label>
            <input
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className={`w-full py-2 rounded-md font-semibold transition-all flex items-center justify-center gap-2 ${
              loading 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-green-600 hover:bg-green-700 text-white shadow-md active:scale-95"
            }`}
          >
            {loading && <i className="pi pi-spin pi-spinner text-lg"></i>}
            <span>{loading ? "Sending link..." : "Send Reset Instructions"}</span>
          </button>

          <p className="text-sm text-center text-gray-700 mt-4">
            Remembered your password?{" "}
            <Link to="/login" className="text-green-700 font-semibold hover:underline">
              Login here
            </Link>
          </p>
        </form>

        <p className="text-xs text-center text-gray-500 mt-6 leading-relaxed">
          If you don't receive a reset link within a few minutes, make sure you
          entered the correct email address or check your spam folder.
        </p>
      </div>
    </div>
  );
}
