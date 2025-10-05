import React from "react";
import { Edit2, Trash2, Check, X } from "lucide-react";

export default function TaskList({ filteredTasks, editingId, editText, setEditText, saveEdit, setEditingId, toggleComplete, startEdit, deleteTask, darkMode }) {
  return (
    <div className="space-y-3">
      {filteredTasks.map((task) => (
        <div
          key={task.id}
          className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-xl p-4 shadow-lg transition hover:shadow-xl`}
        >
          {editingId === task.id ? (
            <div className="flex gap-2">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className={`flex-1 px-3 py-2 border ${darkMode ? "bg-gray-700 border-gray-600" : "border-gray-300"} rounded-lg`}
              />
              <button onClick={saveEdit} className="bg-green-500 text-white p-2 rounded-lg">
                <Check className="w-5 h-5" />
              </button>
              <button onClick={() => setEditingId(null)} className="bg-red-500 text-white p-2 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={() => toggleComplete(task.id)}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  task.completed ? "bg-green-500 border-green-500" : "border-gray-300"
                }`}
              >
                {task.completed && <Check className="w-4 h-4 text-white" />}
              </button>
              <div className="flex-1">
                <p className={`font-medium ${task.completed ? "line-through text-gray-400" : ""}`}>{task.text}</p>
                <div className="flex gap-2 mt-1">
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">{task.category}</span>
                  <span className="text-xs text-gray-500">{task.createdAt}</span>
                </div>
              </div>
              <button onClick={() => startEdit(task)} className="p-2 hover:bg-blue-100 rounded-lg transition">
                <Edit2 className="w-4 h-4 text-blue-500" />
              </button>
              <button onClick={() => deleteTask(task.id)} className="p-2 hover:bg-red-100 rounded-lg transition">
                <Trash2 className="w-4 h-4 text-red-500" />
              </button>
            </div>
          )}
        </div>
      ))}
      {filteredTasks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No tasks found!</p>
        </div>
      )}
    </div>
  );
}
