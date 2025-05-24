import React from "react";
import {
  MdDashboard,
  MdHistory,
  MdCalendarToday,
  MdAddBox,
  MdQueryStats,
  MdChat,
  MdCall,
  MdSettings,
} from "react-icons/md";

type MenuItem = {
  icon: JSX.Element;
  label: string;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

const generalMenu: MenuSection = {
  title: "General",
  items: [
    { icon: <MdDashboard size={20} />, label: "Dashboard" },
    { icon: <MdHistory size={20} />, label: "History" },
    { icon: <MdCalendarToday size={20} />, label: "Calendar" },
    { icon: <MdAddBox size={20} />, label: "Appointments" },
    { icon: <MdQueryStats size={20} />, label: "Statistics" },
  ],
};

const toolsMenu: MenuSection = {
  title: "Tools",
  items: [
    { icon: <MdChat size={20} />, label: "Chat" },
    { icon: <MdCall size={20} />, label: "Support" },
  ],
};

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-screen bg-[#f9fbfc] shadow-md flex flex-col justify-between p-6 rounded-tr-3xl rounded-br-3xl">
      <div className="ml-6">
        <h1 className="text-2xl font-bold mb-8 ">
          <span className="text-cyan-500">Health</span>
          <span className="text-indigo-900">care.</span>
        </h1>

        {[generalMenu, toolsMenu].map((section) => (
          <div key={section.title} className="mb-6">
            <p className="text-xs text-gray-400 uppercase mb-2">{section.title}</p>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center text-gray-500 hover:text-indigo-900 transition-colors mt-4"
                >
                  <span className="mr-3">{item.icon}</span>
                  <span className="ml-2">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <li className="flex items-center text-gray-400 hover:text-indigo-900 cursor-pointer">
          <MdSettings className="mr-3" size={20} />
          <span>Setting</span>
        </li>
      </div>
    </aside>
  );
};

export default Sidebar;