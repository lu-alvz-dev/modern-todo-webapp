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
  localStorage.setItem(task, JSON.stringify(tasks));
};

const render = function () {
  clearList();
};

//rendering To-Do List

render();
