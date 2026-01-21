import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { getMyFullProfile } from "../data/api";
import { 
  FaCrown, FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaCalendarAlt, FaEdit, FaUserCheck, 
  FaSignOutAlt, FaGlobe, FaIdBadge, FaTimes 
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Me() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }
      try {
        const res = await getMyFullProfile(token);
        if (res.data.success) {
          setUser(res.data.data);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMe();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex flex-col md:flex-row">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-4 md:px-8 sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-5 bg-green-500 rounded-full"></div>
            <h1 className="text-base md:text-lg font-bold text-slate-800 tracking-tight">My Identity</h1>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <button onClick={() => navigate("/user")} className="flex items-center gap-2 text-xs md:text-sm font-semibold bg-slate-100 text-slate-700 px-3 py-2 md:px-4 rounded-lg hover:bg-slate-200 transition">
              <FaEdit /> <span className="hidden sm:inline">Edit Profile</span>
            </button>
            <button className="p-2 text-slate-400 hover:text-red-500 transition">
              <FaSignOutAlt size={18} />
            </button>
          </div>
        </header>

        <main className="p-4 md:p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="h-32 md:h-40 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-600 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 blur-2xl"></div>
              </div>
              
              <div className="px-5 md:px-8 pb-6 md:pb-8">
                <div className="relative flex flex-col md:flex-row md:items-end justify-between -mt-12 md:-mt-20 gap-4 md:gap-6">
                  <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-6 text-center md:text-left">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-tr from-green-400 to-teal-400 rounded-full animate-pulse group-hover:scale-110 transition duration-500 opacity-20"></div>
                      
                      <div 
                        onClick={() => user?.profilePicture && setIsPreviewOpen(true)}
                        className={`relative h-28 w-28 md:h-36 md:w-36 rounded-full border-[4px] md:border-[6px] border-white bg-white shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 ${user?.profilePicture ? 'cursor-pointer' : 'cursor-default'}`}
                      >
                        {user?.profilePicture ? (
                          <img src={user.profilePicture} className="h-full w-full object-cover" alt="User" />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center bg-slate-50 text-green-600 text-3xl md:text-4xl font-black">
                            {user?.Firstname?.charAt(0)}
                          </div>
                        )}
                        {user?.profilePicture && (
                           <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <span className="text-white text-[10px] font-bold uppercase mb-1">View</span>
                           </div>
                        )}
                      </div>

                      {user?.plan === "premium" && (
                        <div className="absolute top-0 right-0 bg-yellow-400 text-white p-2 md:p-2.5 rounded-full shadow-lg border-2 md:border-4 border-white z-10">
                          <FaCrown size={12} className="md:size-[14px]" />
                        </div>
                      )}
                    </div>
                    
                    <div className="mb-1 md:mb-2">
                      <div className="flex items-center gap-2 justify-center md:justify-start">
                        <h2 className="text-xl md:text-3xl font-black text-slate-800 uppercase tracking-tight">
                          {user?.Firstname} {user?.Lastname}
                        </h2>
                        {user?.isVerified && <FaUserCheck className="text-blue-500" size={18} />}
                      </div>
                      <p className="text-green-600 font-bold tracking-tight text-xs md:text-sm lowercase">@{user?.Username?.toLowerCase()}</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <button onClick={() => navigate("/user")} className="w-full md:w-auto bg-green-600 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-xl md:rounded-2xl text-xs md:text-sm font-bold hover:bg-green-700 shadow-lg shadow-green-100 transition-all flex items-center justify-center gap-2 uppercase">
                      <FaEdit /> UPDATE PROFILE
                    </button>
                  </div>
                </div>

                <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 pt-6 md:pt-8 border-t border-slate-100">
                    <StatBox label="Member Status" value={user?.plan || "Free Tier"} icon={<FaIdBadge className="text-blue-500" />} />
                    <StatBox label="Verification" value={user?.isVerified ? "Verified" : "Pending"} icon={<FaUserCheck className="text-green-500" />} />
                    <StatBox label="Location" value={user?.country || "Global"} icon={<FaGlobe className="text-orange-500" />} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm">
                  <h3 className="text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-widest mb-3 md:mb-4">The Biography</h3>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                    {user?.bio || "This user hasn't written a biography yet. A world of mystery!"}
                  </p>
                </div>

                <div className="bg-white rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                   <div className="px-6 py-4 md:px-8 md:py-5 border-b border-slate-50 bg-slate-50/50">
                     <h3 className="font-black text-slate-800 text-[10px] md:text-xs uppercase tracking-widest">Detailed Information</h3>
                   </div>
                   <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                     <InfoCard icon={<FaEnvelope />} label="Email Address" value={user?.email} />
                     <InfoCard icon={<FaPhone />} label="Contact Number" value={user?.Phonenumber || "No phone linked"} />
                     <InfoCard icon={<FaMapMarkerAlt />} label="Primary Country" value={user?.country || "Not set"} />
                     <InfoCard icon={<FaCalendarAlt />} label="Account Created" value={user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : "N/A"} />
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                <div className="bg-slate-900 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white relative overflow-hidden group">
                  <div className="relative z-10">
                    <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase mb-2">Current Plan</p>
                    <h3 className="text-xl md:text-2xl font-black mb-4 capitalize">{user?.plan || "Free"}</h3>
                    <Link to='/subscription'><button className="w-full bg-green-500 hover:bg-green-400 py-2.5 md:py-3 rounded-xl md:rounded-2xl text-sm font-bold transition">Manage Plan</button></Link>
                  </div>
                  <FaCrown className="absolute -bottom-6 -right-6 text-white/5 text-7xl md:text-9xl transform group-hover:scale-110 transition duration-500" />
                </div>

                <div className="bg-white rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm p-4">
                  <h4 className="px-4 py-2 text-[10px] font-black text-slate-400 uppercase">Quick Navigation</h4>
                  <Link to="/notifications" className="flex items-center justify-between p-3 md:p-4 hover:bg-slate-50 rounded-xl md:rounded-2xl transition group">
                    <span className="text-sm font-bold text-slate-700">Notifications</span>
                    <span className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-lg md:rounded-xl bg-slate-100 group-hover:bg-green-500 group-hover:text-white transition">→</span>
                  </Link>
                  <Link to="/privacypolicy" className="flex items-center justify-between p-3 md:p-4 hover:bg-slate-50 rounded-xl md:rounded-2xl transition group">
                    <span className="text-sm font-bold text-slate-700">Privacy & Terms</span>
                    <span className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-lg md:rounded-xl bg-slate-100 group-hover:bg-green-500 group-hover:text-white transition">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>


      {isPreviewOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div 
            className="relative bg-white p-1 rounded-2xl shadow-2xl max-w-[90vw] max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={() => setIsPreviewOpen(false)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition z-10"
            >
              <FaTimes size={16} />
            </button>
            <img 
              src={user?.profilePicture} 
              alt="Profile Full View" 
              className="w-full h-auto max-h-[75vh] object-contain rounded-xl"
            />
            <div className="p-3 text-center">
                <p className="text-slate-800 font-bold text-sm uppercase tracking-widest">{user?.Firstname} {user?.Lastname}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


function StatBox({ label, value, icon }) {
  return (
    <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-slate-50 border border-slate-100 transition hover:border-green-200">
      <div className="p-2 md:p-3 bg-white rounded-lg md:rounded-xl shadow-sm">{icon}</div>
      <div className="min-w-0">
        <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-tighter">{label}</p>
        <p className="text-xs md:text-sm font-bold text-slate-800 truncate">{value}</p>
      </div>
    </div>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2 text-green-500">
        <span className="text-sm">{icon}</span>
        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</span>
      </div>
      <p className="text-sm md:text-base text-slate-800 font-bold pl-5 md:pl-6 break-words">{value}</p>
    </div>
  );
}