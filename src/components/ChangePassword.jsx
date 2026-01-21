import React from "react";

export default function ChangePassword() {
  return (
    <div className="p-4 m-4 rounded-lg bg-green-50 flex flex-col shadow-md">
      <div>
        <p className="text-xl font-bold mb-6">Change Password</p>
      </div>
      <div className="space-y-4">
        <div className="">
          <p className="text-sm font-semibold text-gray-700 mb-1">
            Current Password
          </p>
          <input
            className=" w-full px-3 py-2 border border-gray-300  rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            type="password"
            name=""
            id=""
            placeholder="Current password"
          />
        </div>
        <div className="">
          <p className="text-sm font-semibold text-gray-700 mb-1">
            New Password
          </p>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            type="password"
            name=""
            id=""
            placeholder="New password"
          />
        </div>
        <div className="">
          <p className="text-sm font-semibold text-gray-700 mb-1">
            Comfirm Password
          </p>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            type="password"
            name=""
            id=""
            placeholder="Confirm password"
          />
        </div>
      </div>
      <button className="bg-green-700 px-5 py-3 text-white font-semibold w-full mt-6 rounded hover:bg-green-800 transition-colors">
        Update Password
      </button>
    </div>
  );
}
