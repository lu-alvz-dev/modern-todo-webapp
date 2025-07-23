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

const render = function () {};
