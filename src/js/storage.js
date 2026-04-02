export const getTasks = () => {
  JSON.parse(localStorage.getItem("tasks")) || [];
};

//save array of tasks in localStorage
export const saveTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
