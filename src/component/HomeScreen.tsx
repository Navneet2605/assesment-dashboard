import Sidebar from "./Sidebar";
import{ useState } from "react";
import {
  MdSearch,
  MdNotificationsNone,
  MdArrowDropDown,
  MdFavorite,
  MdAccessibilityNew,
  MdZoomIn,
} from "react-icons/md";
import { FaLungs, FaTooth, FaBone } from "react-icons/fa";
import CalendarSchedule from "./CalendarSchedule";

const HomeScreen = () => {
  const [selectedWeek, setSelectedWeek] = useState("This week");
  const [isOpen, setIsOpen] = useState(false);

  const weeks = ["This week", "Last week", "2 weeks ago", "This month"];
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 mx-6 py-8 overflow-y-auto flex flex-col">
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

        <div className="flex justify-between items-center mt-8">
          <h2 className="text-indigo-900 text-2xl font-bold">Dashboard</h2>
          <div className="relative inline-block text-left">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center text-indigo-900 text-sm px-3 py-1"
            >
              {selectedWeek}
              <MdArrowDropDown className="ml-1" size={20} />
            </button>
            {isOpen && (
              <ul className="absolute mt-1 w-full z-10 bg-white shadow rounded">
                {weeks.map((week) => (
                  <li
                    key={week}
                    onClick={() => {
                      setSelectedWeek(week);
                      setIsOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                  >
                    {week}
                  </li>
                ))}
              </ul>
            )} 
            {/* https://ibb.co/BVk8BqbJ
https://ibb.co/HfGHrwXs */}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          <div className="flex flex-col gap-6 w-full lg:w-200">
            <div className="relative bg-gray-100 rounded-3xl shadow-lg p-6 flex justify-center items-center h-[400px]">
              <img
                src="https://i.postimg.cc/6pdpn720/humanbody.png"
                alt="Human Body"
                className="h-full object-contain"
              />
              <div className="absolute top-20 right-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm flex items-center">
                <MdFavorite className="mr-2" /> Healthy Heart
              </div>
              <div className="absolute bottom-20 left-6 bg-cyan-400 text-white px-4 py-2 rounded-full text-sm flex items-center">
                <MdAccessibilityNew className="mr-2" /> Healthy Leg
              </div>
              <div className="absolute top-4 right-4 p-2 rounded-full bg-white shadow cursor-pointer">
                <MdZoomIn size={20} className="text-indigo-900" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 w-full p-8">
            {[
              {
                icon: <FaLungs />,
                label: "Lungs",
                color: "bg-red-400",
                width: "w-3/5",
              },
              {
                icon: <FaTooth />,
                label: "Teeth",
                color: "bg-teal-400",
                width: "w-4/5",
              },
              {
                icon: <FaBone />,
                label: "Bone",
                color: "bg-orange-400",
                width: "w-2/5",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-2xl shadow p-4 flex flex-col justify-between pt-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-2xl text-indigo-900">{item.icon}</div>
                  <div>
                    <p className="text-indigo-900 font-semibold">
                      {item.label}
                    </p>
                    <p className="text-gray-400 text-sm">Date: 26 Oct 2021</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                  <div
                    className={`h-2 ${item.color} rounded-full ${item.width}`}
                  ></div>
                </div>
              </div>
            ))}
            <div className="text-right text-indigo-900 text-sm cursor-pointer hover:underline">
              Details →
            </div>
          </div>
        </div>
        <div className=" rounded-3xl shadow-lg mt-6 p-6 bg-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-indigo-900 text-lg font-semibold">Activity</h3>
            <span className="text-gray-400 text-sm">
              3 appointments this week
            </span>
          </div>
          <div className="flex justify-between  items-end h-32 px-8">
            {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map(
              (day, i) => (
                <div key={i} className="flex flex-col items-center space-y-1">
                  <div className="flex space-x-1 items-end h-24">
                    <div
                      className="w-1.5 bg-indigo-400"
                      style={{ height: `${Math.random() * 60 + 20}px` }}
                    ></div>
                    <div
                      className="w-1.5 bg-cyan-400"
                      style={{ height: `${Math.random() * 60 + 10}px` }}
                    ></div>
                    <div
                      className="w-1.5 bg-purple-400"
                      style={{ height: `${Math.random() * 40 + 10}px` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-400">{day}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <CalendarSchedule />
    </div>
  );
};

export default HomeScreen;
