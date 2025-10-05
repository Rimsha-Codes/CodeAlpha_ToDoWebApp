import React from "react";
import { Search } from "lucide-react";

export default function SearchFilter({ searchTerm, setSearchTerm, filter, setFilter, darkMode }) {
  return (
    <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-xl p-6 shadow-lg mb-6`}>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search tasks..."
            className={`w-full pl-10 pr-4 py-3 border ${darkMode ? "bg-gray-700 border-gray-600" : "border-gray-300"} rounded-lg`}
          />
        </div>
        <div className="flex gap-2">
          {["all", "active", "completed"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filter === f ? "bg-blue-500 text-white" : darkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
