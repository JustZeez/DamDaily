import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { resendOtp } from "../data/api";
import { useNavigate } from "react-router-dom";

export default function ResendOtp() {
  const [email, setEmail] = useState(''); 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    setLoading(true);
    try {
      await resendOtp(email); 
      
      toast.success("OTP resent successfully!");
      console.log("OTP resent successfully");
      navigate('/verify')
    } catch (error) {
      const message = error.response?.data?.message || "Failed to resend OTP.";
      toast.error(message);
      console.log('Failed to resend OTP.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7f4] flex justify-center items-center p-6">
      <div className="w-full max-w-md bg-white shadow rounded-xl p-8 border border-green-200">
        <div className="text-3xl font-bold text-center text-green-700 mb-6">
          Resend OTP Code
        </div>
        <div className="text-gray-600 text-center mb-6">
          Enter your email to receive a new verification code
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="text-green-700 font-semibold mb-1">Email</div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <button 
            disabled={loading}
            className={`w-full py-3 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${
              loading 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-green-600 hover:bg-green-700 shadow-lg shadow-green-200 active:scale-95"
            }`}
          >
          
            {loading && <i className="pi pi-spin pi-spinner text-lg"></i>}
            <span>{loading ? "Sending..." : "Send New OTP"}</span>
          </button>

          <div className="text-sm text-center text-gray-700">
            <Link to="/verify" className="text-green-700 font-semibold hover:underline">
              Back to Verify OTP
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}