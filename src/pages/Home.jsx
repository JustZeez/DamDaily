import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGlobe,
  FaShieldAlt,
  FaBolt,
  FaCheck,
  FaStar,
  FaCrown,
  FaRocket,
  FaUsers,
  FaChartLine,
  FaAward,
  FaLockOpen,
  FaGem,
  FaInfinity,
} from "react-icons/fa/index.js";

export default function Home() {
  const [activeReaders, setActiveReaders] = useState(0);
  const [newsSources, setNewsSources] = useState(0);
  const [accuracyRate, setAccuracyRate] = useState(0);

  const statsConfig = [
    {
      id: "readers",
      target: 50000,
      duration: 2000,
      prefix: "",
      suffix: "+",
    },
    {
      id: "sources",
      target: 150,
      duration: 1500,
      prefix: "",
      suffix: "+",
    },
    {
      id: "accuracy",
      target: 99.8,
      duration: 2500,
      prefix: "",
      suffix: "%",
    },
  ];

  useEffect(() => {
    // This is use to start counters when component mounts
    const startCounters = () => {
      // Active Readers counter
      animateCounter(0, 50000, 2000, setActiveReaders, "+");

      // News Sources counter
      animateCounter(0, 150, 1500, setNewsSources, "+");

      // Accuracy Rate counter (with decimal)
      animateCounter(0, 99.8, 2500, setAccuracyRate, "%", true);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounters();
            observer.unobserve(entry.target);
          }
        });
      },
      // start when 50% of the page is visible
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById("stats-section");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, []);

  const animateCounter = (
    start,
    end,
    duration,
    setState,
    suffix = "",
    isDecimal = false
  ) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      const currentValue = start + (end - start) * easeOutQuart;

      if (isDecimal) {
        setState(parseFloat(currentValue.toFixed(1)));
      } else {
        setState(Math.floor(currentValue));
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-emerald-100/20">
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-emerald-400 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-green-500 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">⚡</span>
              </div>
              <span className="text-3xl font-bold text-white">NewsPulse</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Intelligence</span>
              <span className="block md:inline md:ml-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-400">
                Meets
              </span>
              <span className="block md:inline md:ml-4 text-white">
                Insight
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Where global narratives converge with premium analysis. Discover
              stories that matter, curated for minds that lead.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/signup"
                className="group relative px-8 py-4 bg-white text-emerald-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10">Start Free Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-emerald-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>

              <Link
                to="/login"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-sm"
              >
                Member Access
              </Link>
            </div>

            <div className="mt-12 text-sm text-emerald-200 flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Trusted by 50K+ readers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Global coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Real-time updates</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      <div className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why <span className="text-emerald-600">Readers</span> Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're not just another news aggregator. We're your intelligence
              partner.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaGlobe className="text-3xl" />,
                title: "Global Intelligence Network",
                description:
                  "Sourced from 150+ verified global outlets with real-time translation",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <FaShieldAlt className="text-3xl" />,
                title: "Truth-First Verification",
                description:
                  "Every story undergoes 3-step fact-checking process before publication",
                color: "from-emerald-500 to-green-500",
              },
              {
                icon: <FaChartLine className="text-3xl" />,
                title: "Predictive Analysis",
                description:
                  "AI-powered trend prediction to keep you ahead of the curve",
                color: "from-purple-500 to-pink-500",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${feature.color})`,
                  }}
                ></div>

                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your <span className="text-emerald-600">Experience</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From casual reading to premium intelligence gathering
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:border-emerald-200 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-4">
                  <FaUsers className="text-2xl text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Explorer</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-gray-900">$0</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "Basic global news access",
                  "Basic search functionality",
                  "Community view only",
                  "Standard news updates",
                  "Email newsletter",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <FaCheck className="text-emerald-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/signup"
                className="block w-full py-3 px-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                Start Free
              </Link>
            </div>

            <div className="relative bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-800 rounded-3xl p-8 shadow-2xl transform lg:scale-105 z-10">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  MOST POPULAR
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl mb-4">
                  <FaCrown className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Insider</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-white">$9.99</span>
                  <span className="text-emerald-200">/month</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "All Explorer features",
                  "All categories unlocked",
                  "Insider badge & recognition",
                  "Ad-free experience",
                  "Priority email support",
                  "Anonymous & Confession Corner access",
                  "Brand Spotlight advertising",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <FaStar className="text-amber-300 mt-1 flex-shrink-0" />
                    <span className="text-emerald-100">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/signup"
                className="block w-full py-3 px-4 bg-white text-emerald-900 font-bold rounded-xl text-center hover:shadow-xl transition-all hover:-translate-y-0.5 hover:bg-gray-50"
              >
                Go Premium
              </Link>
            </div>

            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:border-purple-200 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl mb-4">
                  <FaGem className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Visionary</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-gray-900">
                    $49.99
                  </span>
                  <span className="text-gray-500">/month</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "All Insider features",
                  "Professional Networking Hub",
                  "API access for developers",
                  "Visionary badge & and recognition",
                  "Ad-free experience",
                  "24/7 priority support",
                  "Verified Author Publishing",
                  "Aspiring Writers Circle",
                  "Brand Spotlight advertising",
                  "Anonymous & Confession corner",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <FaRocket className="text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="block w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-semibold rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                Contact Sales
              </Link>
            </div>
          </div>

          <div className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b">
              <h3 className="text-lg font-bold text-gray-900">
                Feature Comparison
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left text-sm font-semibold text-gray-900">
                      Features
                    </th>
                    <th className="p-4 text-center text-sm font-semibold text-gray-900">
                      Explorer
                    </th>
                    <th className="p-4 text-center text-sm font-semibold text-emerald-900">
                      Insider
                    </th>
                    <th className="p-4 text-center text-sm font-semibold text-purple-900">
                      Visionary
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["News Access", "✓", "✓", "✓"],
                    ["Ad-free Experience", "✗", "✓", "✓"],
                    ["Community Features", "✗", "✓", "✓"],
                    ["Brand Spotlight", "✗", "✓", "✓"],
                    ["Badge & recognition", "✗", "✓", "✓"],
                    ["API access", "✗", "✗", "✓"],
                    ["Priority Support", "✗", "✓", "✓"],
                    ["Networking Hub", "✗", "✗", "✓"],
                    ["Writers Circle", "✗", "✗", "✓"],
                  ].map(([feature, free, premium, pro], idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="p-4 text-sm text-gray-700">{feature}</td>
                      <td className="p-4 text-center">
                        <span
                          className={`text-lg ${
                            free === "✓" ? "text-emerald-500" : "text-gray-300"
                          }`}
                        >
                          {free}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span
                          className={`text-lg ${
                            premium === "✓"
                              ? "text-emerald-500"
                              : "text-gray-300"
                          }`}
                        >
                          {premium}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span
                          className={`text-lg ${
                            pro === "✓" ? "text-purple-500" : "text-gray-300"
                          }`}
                        >
                          {pro}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <section
        id="stats-section"
        className="py-16 bg-gradient-to-r from-emerald-900 to-green-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                👥
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {activeReaders.toLocaleString()}+
              </div>
              <div className="text-emerald-200 text-sm">Active Readers</div>
              <div className="mt-2 h-1 w-16 mx-auto bg-gradient-to-r from-emerald-400 to-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <div className="text-center group">
              <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                📰
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {newsSources}+
              </div>
              <div className="text-emerald-200 text-sm">News Sources</div>
              <div className="mt-2 h-1 w-16 mx-auto bg-gradient-to-r from-emerald-400 to-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <div className="text-center group">
              <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                ⏰
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                LIVE
              </div>
              <div className="text-emerald-200 text-sm">
                {currentTime.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </div>
              <div className="mt-2 h-1 w-16 mx-auto bg-gradient-to-r from-emerald-400 to-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <div className="text-center group">
              <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                🎯
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {accuracyRate}%
              </div>
              <div className="text-emerald-200 text-sm">Accuracy Rate</div>
              <div className="mt-2 h-1 w-16 mx-auto bg-gradient-to-r from-emerald-400 to-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by <span className="text-emerald-600">Leaders</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what industry leaders say about their experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The premium features transformed how my team consumes news. The brand spotlight alone was worth the subscription.",
                author: "Alex Chen",
                role: "Marketing Director",
                company: "TechSphere Inc.",
              },
              {
                quote:
                  "As a startup founder, the Visionary plan gave us the insights we needed to stay ahead in a competitive market.",
                author: "Sarah Johnson",
                role: "CEO & Founder",
                company: "NovaLabs",
              },
              {
                quote:
                  "The confession corner feature created genuine connections that led to valuable business partnerships.",
                author: "Marcus Rivera",
                role: "Community Manager",
                company: "GrowthCircle",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="text-4xl text-emerald-100 mb-6">"</div>
                <p className="text-gray-700 italic mb-8 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-20 bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your News Experience?
          </h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Join thousands of informed readers who trust us for premium
            intelligence and community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="group relative px-8 py-4 bg-white text-emerald-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <span className="relative z-10">Start 14-Day Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-emerald-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-sm"
            >
              Schedule a Demo
            </Link>
          </div>

          <p className="mt-6 text-emerald-200 text-sm">
            No credit card required • Cancel anytime • Premium support included
          </p>
        </div>
      </div>


    </div>
  );
}
