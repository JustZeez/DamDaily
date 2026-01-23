import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../data/api";

export default function SignUp() {
  const navigate = useNavigate();

  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  const [country, setCountry] = useState("");
  const [Password, setPassword] = useState("");

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [readPrivacy, setReadPrivacy] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitform = async (e) => {
    e.preventDefault();

    if (
      !Firstname ||
      !Lastname ||
      !Username ||
      !email ||
      !Phonenumber ||
      !country ||
      !Password
    ) {
      toast.warning("Please fill all the required fields");
      return;
    }

    if (Password.length < 8) {
      toast.warning("Password must be at least 8 characters long");
      return;
    }

    const data = {
      Firstname,
      Lastname,
      Username,
      email,
      Phonenumber,
      country,
      Password,
    };

    setLoading(true);

    try {
      const response = await registerUser(data);
      if (response.data?.success) {
        toast.success(response.data.message);
        localStorage.setItem("email", response.data.data.email);
        localStorage.setItem("Id", response.data.data.userId);

        setFirstname("");
        setLastname("");
        setUsername("");
        setEmail("");
        setPhonenumber("");
        setCountry("");
        setPassword("");

        navigate("/verify");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred during signup"
      );
    } finally {
      setLoading(false);
    }
  };

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
              required
            />
          </div>

          <div>
            <div className="text-green-700">Phone Number</div>
            <input
              type="tel"
              value={Phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <div className="text-green-700">Country</div>
            <input
              type="text"
              value={country}
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
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Min 8 characters"
              required
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="cursor-pointer"
            />
            <div className="text-sm text-gray-700">
              I agree to the{" "}
              <Link
                to="/termsandconditions"
                className="text-green-600 font-semibold hover:underline"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={readPrivacy}
              onChange={(e) => setReadPrivacy(e.target.checked)}
              className="cursor-pointer"
            />
            <div className="text-sm text-gray-700">
              I have read the {""}
              <Link
                to="/privacypolicy"
                className="text-green-600 font-semibold hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <button
            disabled={!acceptedTerms || !readPrivacy || loading}
            className={`w-full py-2 rounded font-semibold flex items-center justify-center gap-2 transition-all ${
              !acceptedTerms || !readPrivacy || loading
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700 shadow-md active:scale-95"
            }`}
          >
            {loading && <i className="pi pi-spin pi-spinner text-lg"></i>}
            <span>{loading ? "Creating Account..." : "Sign Up"}</span>
          </button>

          <div className="text-sm text-center text-gray-600 italic">
            An OTP will be sent to your email after registration.
          </div>

          <div className="text-sm text-center text-gray-700">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-700 font-semibold hover:underline"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
