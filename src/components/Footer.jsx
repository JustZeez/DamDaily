import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-green-700 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-green-500 pb-6">
          <div className="flex items-start space-x-3">
            <img
              src="/images/logo.png"
              alt="DamDaily Logo"
              className="h-10 w-10 object-contain"
            />
            <div>
              <h2 className="text-2xl font-bold">DamDaily</h2>
              <p className="text-sm text-green-100 mt-2 leading-relaxed">
                Your trusted source for daily news updates across the globe.
                Stay informed, stay inspired.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-green-100">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacypolicy"
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/termsandconditions"
                  className="hover:text-white transition"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-green-100 text-sm">
              Email:{" "}
              <a href="mailto:info@damdaily.com" className="hover:text-white">
                info@damdaily.com
              </a>
            </p>
            <p className="text-green-100 text-sm mt-1">
              Phone:{" "}
              <a href="tel:+234-701-611-5001" className="hover:text-white">
                +234-701-611-5001
              </a>
            </p>
            <div className="flex space-x-4 mt-4">
              <Link to="" className="hover:text-white transition">
                <i className="pi pi-facebook text-xl"></i>
              </Link>
              <Link to="" className="hover:text-white transition">
                <i className="pi pi-twitter text-xl"></i>
              </Link>
              <Link to="" className="hover:text-white transition">
                <i className="pi pi-instagram text-xl"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col md:flex-row items-center justify-between text-green-100 text-sm">
          <p>© {new Date().getFullYear()} DamDaily. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed  by the
            DamDaily Team
          </p>
        </div>
      </div>
    </div>
  );
}
