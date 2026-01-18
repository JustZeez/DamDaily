import React from "react";
import { Link } from "react-router-dom";

export default function ResendOtp() {
  return (
    <div className="min-h-screen bg-[#f4f7f4] flex justify-center items-center p-6">
      <div className="w-full max-w-md bg-white shadow rounded-xl p-8 border border-green-200">
        <div className="text-3xl font-bold text-center text-green-700 mb-6">
            Resend OTP Code
        </div>
        <div className="text-gray-600 text-center mb-6">
          Enter your email or phone number to receive a new verification code
        </div>
        <form className="space-y-4">
          <div>
            <div className="text-green-700">Email or Phone Number</div>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email or phone number"
              required
            />
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded font-semibold">Send New OTP</button>
          <div className="text-sm text-center text-gray-700">
            <Link to="/verify" className="text-green-700 font-semibold">Back to Verify OTP</Link>
          </div>
        </form>
      </div>
    </div>
  );
}