import React from "react";
import Sidebar from "./Sidebar";
import { MdSearch, MdNotificationsNone } from "react-icons/md";

const HomeScreen = () => {
  return (
    <div className="flex h-screen bg-[#f5f7fa]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top bar with search */}
        <div className="flex justify-between items-center ml-2">
          {/* Search Bar */}
          <div className="flex items-center bg-white shadow-sm rounded-xl px-4 py-2 w-full max-w-xl">
            <MdSearch className="text-indigo-900 mr-2" size={22} />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400"
            />
            <div className="ml-4 bg-white rounded-lg p-2 shadow-sm">
              <MdNotificationsNone className="text-indigo-900" size={22} />
            </div>
          </div>
        </div>

        {/* You can add more main content below this */}
        <div className="mt-8 ml-2">
          <div className="">
            <span className="text-indigo-900 text-2xl font-bold mb-8">Dashboard</span>
             <span className="text-indigo-900">This week</span>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
