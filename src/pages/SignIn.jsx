import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../data/api";
import { toast } from "react-toastify";

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const loginsubmit = async (e) => {
    e.preventDefault();

    if (!email || !Password) {
      toast.warning('Please fill all the required details');
      return;
    }

    setLoading(true); 

    try {
      const response = await loginUser(email, Password);
      
      if (response.data?.success) {
        toast.success(response.data.message || 'Login Successful');
        const token = response.data.data.token;
        localStorage.setItem('token', token);
        console.log('User:', response.data.data.user.email, 'token saved successfully');
        navigate('/news'); 
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("Login Error:", error);
      toast.error(error.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false); 
    }
  }

  return (
    <div className="min-h-screen bg-[#f4f7f4] text-gray-800 flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-white/90 shadow-lg rounded-2xl p-8 border border-green-200">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Welcome Back</h1>
        
        <form className="space-y-4" onSubmit={loginsubmit}>
          <div>
            <label className="block font-semibold text-green-700">Email or Phone Number</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email or phone"
              className="w-full mt-1 p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-green-700">Password</label>
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="checkbox" className="accent-green-600" />
              Remember Me
            </label>
            <Link to="/forgotpassword" className="text-green-600 text-sm hover:underline font-medium">
              Forgot Password?
            </Link>
          </div>

          
          <button 
            type="submit" 
            disabled={loading}
            className={`w-full py-2 rounded-md font-semibold transition-all flex items-center justify-center gap-2 ${
              loading 
                ? "bg-gray-400 cursor-not-allowed text-gray-200" 
                : "bg-green-600 hover:bg-green-700 text-white shadow-md active:scale-95"
            }`}
          >
            {loading && <i className="pi pi-spin pi-spinner text-lg"></i>}
            <span>{loading ? "Authenticating..." : "Login"}</span>
          </button>

          <p className="text-sm text-center text-gray-700 mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-green-700 font-semibold hover:underline">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}