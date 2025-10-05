import React, { useState, useEffect } from "react";
import Stats from "@/components/Dashboard/Stats";
import AddTask from "@/components/Dashboard/AddTask";
import SearchFilter from "@/components/Dashboard/SearchFilter";
import TaskList from "@/components/Dashboard/TaskList";
import { localStorageHelper } from "@/utils/localStorageHelper";
import "../index.css";

export default function TodoDashboard({ username, onLogout }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [category, setCategory] = useState("Personal");
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState("all");

 
  useEffect(() => {
    setTasks(localStorageHelper.getTasks(username));
  }, [username]);

  useEffect(() => {
    localStorageHelper.saveTasks(username, tasks);
  }, [tasks, username]);

  const addTask = () => {
    if (!newTask.trim()) return;
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
      category,
      createdAt: new Date().toLocaleString(),
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };


  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));
  const toggleComplete = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditText(task.text);
  };

  const saveEdit = () => {
    setTasks(tasks.map((t) => (t.id === editingId ? { ...t, text: editText } : t)));
    setEditingId(null);
    setEditText("");
  };

 
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === "all" ||
      (filter === "completed" && task.completed) ||
      (filter === "active" && !task.completed);
    return matchesSearch && matchesFilter;
  });

 
  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.completed).length,
    active: tasks.filter((t) => !t.completed).length,
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } transition-colors`}
    >

      <div className="max-w-4xl mx-auto p-6">
        <Stats stats={stats} darkMode={darkMode} />
        <AddTask
          newTask={newTask}
          setNewTask={setNewTask}
          category={category}
          setCategory={setCategory}
          addTask={addTask}
          darkMode={darkMode}
        />
        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filter={filter}
          setFilter={setFilter}
          darkMode={darkMode}
        />
        <TaskList
          filteredTasks={filteredTasks}
          editingId={editingId}
          editText={editText}
          setEditText={setEditText}
          saveEdit={saveEdit}
          setEditingId={setEditingId}
          toggleComplete={toggleComplete}
          startEdit={startEdit}
          deleteTask={deleteTask}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
}
