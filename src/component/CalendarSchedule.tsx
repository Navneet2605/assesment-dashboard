import React from "react";

const appointments = [
  {
    title: "Dentist",
    time: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
    icon: "\ud83e\uddb7",
    bg: "bg-indigo-900",
    textColor: "text-white",
  },
  {
    title: "Physiotherapy Appointment",
    time: "11:00-12:00",
    doctor: "Dr. Kevin Djones",
    icon: "💪",
    bg: "bg-blue-100",
    textColor: "text-indigo-900",
  },
];

const upcoming = {
  Thursday: [
    {
      title: "Health checkup complete",
      time: "11:00 AM",
      icon: "\ud83d\udc89",
    },
    { title: "Ophthalmologist", time: "14:00 PM", icon: "\ud83d\udc41\ufe0f" },
  ],
  Saturday: [
    { title: "Cardiologist", time: "12:00 AM", icon: "\u2764\ufe0f" },
    {
      title: "Neurologist",
      time: "16:00 PM",
      icon: "\ud83d\udc68\u200d\u2695\ufe0f",
    },
  ],
};

const calendarData = [
  { day: "Mon", date: 25 },
  { day: "Tues", date: 26, highlight: true },
  { day: "Wed", date: 27 },
  { day: "Thurs", date: 28 },
  { day: "Fri", date: 29 },
  { day: "Sat", date: 30 },
  { day: "Sun", date: 31 },
];

const timeSlots = [
  ["10:00", "11:00", "12:00"],
  ["08:00", "09:00", "10:00"], // Highlight 09:00
  ["12:00", "—", "13:00"],
  ["10:00", "11:00", "—"],
  ["14:00", "—", "16:00"],
  ["12:00", "14:00", "15:00"],
  ["09:00", "10:00", "11:00"],
];

const CalendarSchedule = () => {
  return (
    <div className="w-full max-w-3/8 mx-auto p-4 space-y-4 h-screen overflow-y-auto bg-[#f5f7fa] shadow-lg rounded-3xl">
      {/* Header */}
      <div className="flex justify-end items-center">
        <div className="flex items-center space-x-2">
          <div className="w-14 h-14 rounded-2xl bg-cyan-400 flex items-center justify-center">
            <span role="img" aria-label="avatar">
              <img src="src/assets/avatar.png" alt="" />
            </span>
          </div>
          <button className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-800 text-white text-4xl">
            +
          </button>
        </div>
      </div>

      {/* Month */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-indigo-900">October 2021</div>
        <div className="flex space-x-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full ">
            ←
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-indigo-950">
            →
          </button>
        </div>
      </div>

      {/* Calendar */}
      <div className="grid grid-cols-7 gap-2 text-center text-xs text-indigo-900 ">
        {calendarData.map(({ day, date, highlight }, idx) => (
          <div
            key={date}
            className={`rounded-xl p-2 ${
              highlight ? "bg-blue-100" : "bg-transparent"
            }`}
          >
            <div className="font-semibold text-sm">{day}</div>
            <div className="text-md font-bold text-xl  mt-1">{date}</div>
            <div className="mt-3 space-y-1 text-[11px] text-indigo-900">
              {timeSlots[idx].map((time, i) => (
                <div
                  key={i}
                  className={`rounded-md px-2 py-1 font-semibold ${
                    highlight && time === "09:00"
                      ? "bg-indigo-900 text-white"
                      : ""
                  }`}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Appointments */}
      <div className="flex space-x-2 mt-8">
        {appointments.map(({ title, time, doctor, icon, bg, textColor }) => (
          <div
            key={title}
            className={`rounded-3xl p-4 w-1/2 ${bg} ${textColor}`}
          >
            <div className="font-bold text-sm flex justify-between items-center">
              {title} <span>{icon}</span>
            </div>
            <div className="text-xs">{time}</div>
            <div className="text-xs mt-1">{doctor}</div>
          </div>
        ))}
      </div>

      {/* Upcoming Schedule */}
      <div className="mt-6">
        <h3 className="font-bold text-md text-indigo-900">
          The Upcoming Schedule
        </h3>
        {Object.entries(upcoming).map(([day, events]) => (
          <div key={day} className="mt-2 ">
            <div className="text-m font-medium text-gray-500 mt-4">
              On {day}
            </div>
            <div className="grid grid-cols-2 gap-3 mt-2 mx-2">
              {events.map(({ title, time, icon }) => (
                <div
                  key={title}
                  className="bg-blue-100 rounded-3xl p-4 text-sm flex flex-col justify-center items-start min-h-[80px]"
                >
                  <div className="font-medium mb-1">
                    {title} {icon}
                  </div>
                  <div className="text-xs text-indigo-900">{time}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarSchedule;
