import React from "react";
import { Plus } from "lucide-react";

export default function AddTask({ newTask, setNewTask, category, setCategory, addTask, darkMode }) {
  return (
    <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-xl p-6 shadow-lg mb-6`}>
      <h2 className="text-xl font-bold mb-4">Add New Task</h2>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTask()}
          placeholder="What needs to be done?"
          className={`flex-1 px-4 py-3 border ${darkMode ? "bg-gray-700 border-gray-600" : "border-gray-300"} rounded-lg`}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={`px-4 py-3 border ${darkMode ? "bg-gray-700 border-gray-600" : "border-gray-300"} rounded-lg`}
        >
          <option>Personal</option>
          <option>Work</option>
          <option>Study</option>
          <option>Shopping</option>
        </select>
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}
