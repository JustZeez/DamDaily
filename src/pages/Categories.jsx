import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategoryStats } from '../data/api'; 

export default function Categories() {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryUI = {
    politics: { icon: "pi pi-flag", color: "bg-blue-100 text-blue-600" },
    technology: { icon: "pi pi-desktop", color: "bg-purple-100 text-purple-600" },
    sports: { icon: "pi pi-trophy", color: "bg-green-100 text-green-600" },
    business: { icon: "pi pi-chart-line", color: "bg-yellow-100 text-yellow-600" },
    health: { icon: "pi pi-heart", color: "bg-red-100 text-red-600" },
    entertainment: { icon: "pi pi-video", color: "bg-pink-100 text-pink-600" },
    science: { icon: "pi pi-microchip", color: "bg-indigo-100 text-indigo-600" },
    world: { icon: "pi pi-globe", color: "bg-cyan-100 text-cyan-600" }
  };

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await getCategoryStats(token);
        setStats(res.data.data);
      } catch (err) {
        console.error("Error fetching stats:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Browse by Category</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Real-time updates from your favorite topics.</p>
        </div>
        {loading ? (
          <div className="text-center py-10">
             <i className="pi pi-spin pi-spinner text-3xl text-green-600"></i>
             <p className="text-gray-500 mt-2">Loading categories...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Object.keys(categoryUI).map((catName) => {
              const liveData = stats.find(s => s._id.toLowerCase() === catName) || { count: 0 };
              const ui = categoryUI[catName];

              return (
                <Link key={catName} to={`/news?filter=${catName}`} className="block group">
                  <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg ${ui.color} group-hover:scale-110 transition-transform`}>
                        <i className={`${ui.icon} text-xl`}></i>
                      </div>
                      <span className="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded">
                        {liveData.count} Articles
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-800 mb-2 capitalize">{catName}</h3>
                    <p className="text-gray-500 text-sm mb-4">Explore the latest trends in {catName}.</p>
                    
                    <div className="flex items-center text-green-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View Feed</span>
                      <i className="pi pi-arrow-right ml-2"></i>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}