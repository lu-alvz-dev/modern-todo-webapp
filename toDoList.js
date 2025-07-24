// DOOM variables

const task = document.getEmentById("task");
const add = document.getElementById("add");
const filter = document.getElementById("filter");
const taskList = document.getElementById("task-list");

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let fltr = "all";

const clearList = () => {
  taskList.textContent = "";
};

//save array of tasks in localStorage
const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const render = function () {
  clearList();
};

//rendering To-Do List

render();

//Adding new task
addBtn.addEventListener("click", () => {
  //getting task from input
  const newTask = document.getElementById("task").value;

  // pushing tasks into task array
  tasks.push({ newTask, isChecked: false });

  saveTask();
});
