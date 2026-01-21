import React, { useState, useEffect } from "react";
import { getNews } from "../data/api";
import { useLocation } from "react-router-dom";

export default function News() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialFilter = queryParams.get("filter") || "all";

  const [activeCategory, setActiveCategory] = useState(initialFilter);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = [
    { name: "All News", slug: "all" },
    { name: "Politics", slug: "politics" },
    { name: "Technology", slug: "technology" },
    { name: "Sports", slug: "sports" },
    { name: "Business", slug: "business" },
    { name: "Health", slug: "health" },
    { name: "Entertainment", slug: "entertainment" },
  ];

  useEffect(() => {
    const newFilter = queryParams.get("filter") || "all";
    setActiveCategory(newFilter);
  }, [location.search]);

  const fetchNewsData = async (cat) => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("User not authenticated. Please login.");
        setLoading(false);
        return;
      }

      const response = await getNews(cat, token);
      if (response.data && response.data.data) {
        setArticles(response.data.data);
      }
    } catch (err) {
      console.error("Error fetching news:", err);
      setError(
        err.response?.status === 401
          ? "Session expired. Please login again."
          : "Failed to load news."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsData(activeCategory);
  }, [activeCategory]);

  const handleImageError = (e) => {
    e.target.src =
      "https://via.placeholder.com/600x400?text=News+Image+Unavailable";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto py-3 space-x-6 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.slug
                    ? "bg-green-600 text-white shadow-md"
                    : "text-gray-600 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-8 text-center">
            {error}{" "}
            <a href="/login" className="underline font-bold ml-2">
              Login Here
            </a>
          </div>
        )}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-2 h-8 bg-green-600 rounded-full mr-3"></span>
            Featured Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {loading
              ? [...Array(2)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-pulse"
                  >
                    <div className="h-72 bg-gray-200"></div>
                    <div className="p-6">
                      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                ))
              : articles.slice(0, 2).map((article, index) => (
                  <article
                    key={index}
                    className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={
                          article.image_url ||
                          "https://via.placeholder.com/600x400?text=Premium+News"
                        }
                        onError={handleImageError}
                        alt={article.title}
                        className="h-72 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-green-600 text-white px-3 py-1 rounded-md text-xs font-bold uppercase">
                          {article.category?.[0] || "Top Story"}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                        {article.description ||
                          "No description available for this article."}
                      </p>
                      <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-50">
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-gray-900">
                            {article.source_name}
                          </span>
                          <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                            {article.pubDate
                              ? new Date(article.pubDate).toLocaleDateString()
                              : "Today"}
                          </span>
                        </div>
                        <a
                          href={article.link}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors shadow-sm"
                        >
                          Read Full Story
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-2 h-8 bg-gray-300 rounded-full mr-3"></span>
            Latest Headlines
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? [...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 animate-pulse"
                  >
                    <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                    <div className="h-5 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-5 bg-gray-200 rounded w-2/3"></div>
                  </div>
                ))
              : articles.slice(2).map((article, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col hover:border-green-200 transition-all"
                  >
                    <img
                      src={
                        article.image_url ||
                        "https://via.placeholder.com/400x200?text=News"
                      }
                      onError={handleImageError}
                      alt=""
                      className="h-48 w-full object-cover rounded-t-xl"
                    />
                    <div className="p-4 flex flex-col flex-grow">
                      <span className="text-[10px] font-black text-green-600 mb-2 uppercase tracking-tighter">
                        {article.category?.[0] || activeCategory}
                      </span>
                      <h3 className="text-md font-bold text-gray-800 mb-2 line-clamp-2 min-h-[3rem]">
                        {article.title}
                      </h3>
                      <p className="text-gray-500 text-xs mb-4 line-clamp-3">
                        {article.description}
                      </p>
                      <div className="mt-auto flex justify-between items-center pt-3 border-t border-gray-50">
                        <span className="text-[10px] text-gray-400 font-medium italic">
                          via {article.source_name}
                        </span>
                        <a
                          href={article.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-green-600 hover:text-green-800 font-bold text-xs flex items-center"
                        >
                          OPEN{" "}
                          <i className="pi pi-external-link ml-1 text-[10px]"></i>
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
          </div>
        </section>

        {!loading && articles.length === 0 && !error && (
          <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-200">
            <i className="pi pi-folder-open text-5xl text-gray-300 mb-4"></i>
            <p className="text-gray-500 text-lg">
              No articles found in this category.
            </p>
            <button
              onClick={() => fetchNewsData(activeCategory)}
              className="mt-4 text-green-600 font-bold"
            >
              Try Refreshing
            </button>
          </div>
        )}

        <div className="text-center mt-16">
          <button
            onClick={() => fetchNewsData(activeCategory)}
            disabled={loading}
            className={`bg-white border-2 border-gray-900 text-gray-900 px-10 py-3 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-all transform active:scale-95 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Fetching Fresh News..." : "Refresh Feed"}
          </button>
        </div>
      </div>
    </div>
  );
}
