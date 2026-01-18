import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../data/api";

export default function SignUp() {
  const navigate = useNavigate();
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [Username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [Phonenumber, setPhonenumber] = useState('');
  const [Country, setCountry] = useState('');
  const [Password, setPassword] = useState('');

  const submitform = async (e) =>{
    e.preventDefault();
    if (!Firstname || !Lastname || !Username || !email || !Phonenumber || !Country || !Password) {
     toast.warning('Please fill all the required fields');
     return; 
    }

    const data = {
      Firstname,
      Lastname,
      Username,
      email,
      Phonenumber,
      Country,
      Password
    }

    try {
      const response = await registerUser(data);
      if (response.data?.success) {
        toast.success(response.data.message);
        console.log(response.data);
        console.log('Signup successful');
        localStorage.setItem('email',response.data.data.email)
        localStorage.setItem('Id',response.data.data.userId)
        navigate('/verify')
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.response?.data?.message)
      
    }

    setFirstname('');
    setLastname('');
    setUsername('');
    setEmail('');
    setPhonenumber('');
    setCountry('');
    setPassword('');

  }
  return (
    <div className="min-h-screen bg-[#f4f7f4] flex justify-center items-center p-6">
      <div className="w-full max-w-md bg-white shadow rounded-xl p-8 border border-green-200">
        <div className="text-3xl font-bold text-center text-green-700 mb-6">
          Create Your Account
        </div>
        <form className="space-y-4" onSubmit={submitform}>
          <div>
            <div className="text-green-700">First Name</div>
            <input
              type="text"
              value={Firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <div className="text-green-700">Last Name</div>
            <input
              type="text"
              value={Lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <div className="text-green-700">Username</div>
            <input
              type="text"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <div className="text-green-700">Email</div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <div className="text-green-700">Phone Number</div>
            <input
              type="tel"
              value={Phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <div className="text-green-700">Country</div>
            <input
              type="text"
              value={Country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <div className="text-green-700">Password</div>
            <input
              type="password"
              value={Password}
              onChange={(e) =>setPassword(e.target.value)}
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" required />
            <div className="text-sm text-gray-700">
              I agree to the{" "}
              <Link to="/termsandconditions" className="text-green-600">
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" required />
            <div className="text-sm text-gray-700">
              I have made sure I have read the {''}
              <Link to="/privacypolicy" className="text-green-600">
                Privacy Policy
              </Link>{" "}
             
            </div>
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded font-semibold">
            Sign Up
          </button>
          <div className="text-sm text-center text-gray-600">
            An OTP will be sent to your email or phone after registration.
          </div>
          <div className="text-sm text-center text-gray-700">
            Already have an account?{" "}
            <Link to="/login" className="text-green-700 font-semibold">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
