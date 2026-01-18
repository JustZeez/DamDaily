import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { getUserProfile } from "../data/api";
import { FaCrown, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaEdit, FaShareAlt, FaUserCheck, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Me() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchMe = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const res = await getUserProfile(token);
        if (res.data.success) {
          setUser(res.data.data);
        }
      } catch (err) {
        if (err.response?.status === 401) {
          console.error("Token invalid");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchMe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <h1 className="text-lg font-bold text-gray-800">My Account</h1>
          <div className="flex items-center gap-4">
            <button className="text-gray-500 hover:text-green-600 transition">
              <FaShareAlt />
            </button>
            <div className="h-8 w-[1px] bg-gray-200 mx-2"></div>
            <button className="flex items-center gap-2 text-sm font-medium text-red-500 hover:bg-red-50 px-3 py-1.5 rounded-lg transition">
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </header>

        <main className="p-4 md:p-8 max-w-5xl mx-auto w-full">
          {/* Profile Header Card */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-6">
            <div className="h-32 bg-gradient-to-r from-green-500 to-emerald-600"></div>
            <div className="px-8 pb-6">
              <div className="relative flex justify-between items-end -mt-12 mb-4">
                <div className="relative">
                  <div className="h-24 w-24 rounded-2xl border-4 border-white bg-gray-100 shadow-sm overflow-hidden">
                    {user?.profilePicture ? (
                      <img src={user.profilePicture} className="h-full w-full object-cover" alt="User" />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-green-50 text-green-700 text-2xl font-bold">
                        {user?.Firstname?.charAt(0)}
                      </div>
                    )}
                  </div>
                  {user?.plan === "premium" && (
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-white p-1.5 rounded-lg shadow-md">
                      <FaCrown size={14} />
                    </div>
                  )}
                </div>
                <button 
                  onClick={() => setIsEditing(!isEditing)}
                  className="bg-white border border-gray-300 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all flex items-center gap-2"
                >
                  <FaEdit className="text-gray-500" /> Edit Profile
                </button>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold text-gray-900">{user?.Firstname} {user?.Lastname}</h2>
                  {user?.isVerified && <FaUserCheck className="text-blue-500" title="Verified" />}
                </div>
                <p className="text-gray-500 font-medium">@{user?.Username}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-6">
              <section className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Biography</h3>
                <p className="text-gray-700 leading-relaxed">
                  {user?.bio || "No biography provided yet. Add one to let people know who you are."}
                </p>
              </section>

              <section className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                  <h3 className="font-bold text-gray-800">Account Details</h3>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-y-6">
                  <DetailItem icon={<FaEnvelope />} label="Email" value={user?.email} />
                  <DetailItem icon={<FaPhone />} label="Phone" value={user?.Phonenumber || "Not linked"} />
                  <DetailItem icon={<FaMapMarkerAlt />} label="Location" value={user?.country || "Earth"} />
                  <DetailItem icon={<FaCalendarAlt />} label="Member Since" value={new Date(user?.createdAt).toLocaleDateString()} />
                </div>
              </section>
            </div>

            {/* Side Info */}
            <div className="space-y-6">
              <div className="bg-green-600 rounded-2xl p-6 text-white shadow-lg shadow-green-200 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-1">Membership</h3>
                  <p className="text-green-100 text-sm mb-4 capitalize">{user?.plan || "Free"} Plan</p>
                  <button className="w-full bg-white text-green-700 font-bold py-2 rounded-xl text-sm hover:bg-green-50 transition">
                    View Benefits
                  </button>
                </div>
                <FaCrown className="absolute -bottom-4 -right-4 text-white/10 text-8xl transform -rotate-12" />
              </div>

              <nav className="bg-white rounded-2xl border border-gray-200 shadow-sm p-2">
                <QuickLink to="/notifications" label="Notifications" color="text-blue-500" bg="bg-blue-50" />
                <QuickLink to="/privacypolicy" label="Privacy & Security" color="text-purple-500" bg="bg-purple-50" />
                <QuickLink to="/settings" label="Account Settings" color="text-gray-500" bg="bg-gray-50" />
              </nav>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Minimal Helper Components
function DetailItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-green-600 mt-1">{icon}</div>
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">{label}</p>
        <p className="text-gray-900 font-medium">{value}</p>
      </div>
    </div>
  );
}

function QuickLink({ to, label, color, bg }) {
  return (
    <Link to={to} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition group">
      <div className="flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${bg} border border-current ${color}`}></div>
        <span className="text-sm font-semibold text-gray-700">{label}</span>
      </div>
      <span className="text-gray-300 group-hover:text-gray-500 transition">→</span>
    </Link>
  );
}