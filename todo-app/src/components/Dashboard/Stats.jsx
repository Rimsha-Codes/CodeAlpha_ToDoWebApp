import React from "react";

export default function Stats({ stats, darkMode }) {
  const cardClass = `${darkMode ? "bg-gray-800" : "bg-white"} rounded-xl p-6 shadow-lg`;
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className={cardClass}>
        <p className="text-gray-500 text-sm">Total Tasks</p>
        <p className="text-3xl font-bold text-blue-500">{stats.total}</p>
      </div>
      <div className={cardClass}>
        <p className="text-gray-500 text-sm">Completed</p>
        <p className="text-3xl font-bold text-green-500">{stats.completed}</p>
      </div>
      <div className={cardClass}>
        <p className="text-gray-500 text-sm">Active</p>
        <p className="text-3xl font-bold text-orange-500">{stats.active}</p>
      </div>
    </div>
  );
}
