import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import {
  getUserProfile,
  updateUserProfile,
  uploadProfileImage,
} from "../data/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    Username: "",
    email: "",
    Phonenumber: "",
    country: "",
    bio: "",
    profilePicture: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await getUserProfile(token);
        if (res.data.success) {
          setFormData(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching profile", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append("profilePicture", file);

    try {
      const token = localStorage.getItem("token");
      const res = await uploadProfileImage(data, token);
      if (res.data.success) {
        setFormData({
          ...formData,
          profilePicture: res.data.data.profilePicture,
        });
        toast.success("Picture updated!");
      }
    } catch (err) {
      toast.error("Upload failed");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (formData.bio?.length > 500) {
      toast.error("Bio cannot exceed 500 characters");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const res = await updateUserProfile(formData, token);
      if (res.data.success) {
        toast.success("Profile updated successfully!");

        setTimeout(() => {
          navigate("/me");
        }, 1500);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Update failed");
    }
  };

  if (loading)
    return (
      <div className="p-10 text-center font-bold text-green-600">
        Loading Profile...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <Sidebar />

      <div className="flex-1 max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-10">
          <h1 className="text-2xl font-black text-slate-800 mb-6 uppercase tracking-tight">
            Edit Profile
          </h1>

          <form onSubmit={handleUpdate} className="space-y-6">
            <div className="flex items-center gap-4 mb-8 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <label className="relative cursor-pointer group">
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <div className="h-24 w-24 bg-white rounded-3xl flex items-center justify-center text-xl text-green-600 font-bold overflow-hidden border-4 border-white shadow-md">
                  {formData.profilePicture ? (
                    <img
                      src={formData.profilePicture}
                      alt="Profile"
                      className="h-full w-full object-cover transition group-hover:scale-110"
                    />
                  ) : (
                    <span className="text-3xl">
                      {formData.Firstname?.charAt(0)}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-[10px] font-black uppercase">
                      Change
                    </span>
                  </div>
                </div>
              </label>
              <div>
                <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight">
                  {formData.Firstname} {formData.Lastname}
                </h2>
                <p className="text-sm text-green-600 font-bold">
                  @{formData.Username?.toLowerCase()}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                  First Name
                </label>
                <input
                  name="Firstname"
                  value={formData.Firstname || ""}
                  onChange={handleChange}
                  type="text"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none font-bold text-slate-700"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                  Last Name
                </label>
                <input
                  name="Lastname"
                  value={formData.Lastname || ""}
                  onChange={handleChange}
                  type="text"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none font-bold text-slate-700"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                Username
              </label>
              <input
                name="Username"
                value={formData.Username || ""}
                onChange={handleChange}
                type="text"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none font-bold text-slate-700"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Bio
                </label>
                <span
                  className={`text-[10px] font-bold ${
                    formData.bio?.length > 500
                      ? "text-red-500"
                      : "text-slate-400"
                  }`}
                >
                  {formData.bio?.length || 0}/500
                </span>
              </div>
              <textarea
                name="bio"
                value={formData.bio || ""}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about yourself..."
                className={`w-full px-4 py-3 bg-slate-50 border ${
                  formData.bio?.length > 500
                    ? "border-red-400"
                    : "border-slate-200"
                } rounded-2xl focus:ring-2 focus:ring-green-500 outline-none font-bold text-slate-700 resize-none`}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                  Country
                </label>
                <input
                  name="country"
                  value={formData.country || ""}
                  onChange={handleChange}
                  type="text"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none font-bold text-slate-700"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                  Phone Number
                </label>
                <input
                  name="Phonenumber"
                  value={formData.Phonenumber || ""}
                  onChange={handleChange}
                  type="text"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none font-bold text-slate-700"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full md:w-auto bg-green-600 text-white px-12 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-green-700 transition-all shadow-xl shadow-green-100 active:scale-95"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
