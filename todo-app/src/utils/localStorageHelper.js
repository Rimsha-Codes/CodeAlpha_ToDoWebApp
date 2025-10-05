export const localStorageHelper = {
  saveUser: (userData) => {
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    users[userData.username] = userData;
    localStorage.setItem("users", JSON.stringify(users));
  },
  getUser: (username) => {
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    return users[username] || null;
  },
  saveTasks: (username, tasks) => {
    localStorage.setItem(`tasks_${username}`, JSON.stringify(tasks));
  },
  getTasks: (username) => {
    return JSON.parse(localStorage.getItem(`tasks_${username}`) || "[]");
  },
  setCurrentUser: (username) => {
    localStorage.setItem("currentUser", username);
  },
  getCurrentUser: () => {
    return localStorage.getItem("currentUser");
  },
  logout: () => {
    localStorage.removeItem("currentUser");
  },
};
