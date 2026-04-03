import { getTasks, saveTasks } from "./storage.js";
import { filterTasks } from "./filter.js";
import { clearList, createTaskElement } from "./dom.js";

const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add");
const filters = document.querySelectorAll(".flt_btn");
const taskList = document.querySelector(".task-list");

let tasks = getTasks();
let currentFilter = "all";

const render = () => {
  clearList(taskList);

  const filtered = filterTasks(tasks, currentFilter);

  filtered.forEach((task, index) => {
    const element = createTaskElement(task, index, handleDelete, handleToggle);
    taskList.appendChild(element);
  });
};

const handleDelete = (index) => {
  tasks.splice(index, 1);
  saveTasks(tasks);
  render();
};

const handleToggle = (index) => {
  tasks[index].isChecked = !tasks[index].isChecked;
  saveTasks(tasks);
  render();
};

addBtn.addEventListener("click", () => {
  const value = taskInput.value.trim();

  if (!value) {
    alert("Task cannot be empty");
    return;
  }

  tasks.push({ newTask: value, isChecked: false });
  saveTasks(tasks);

  taskInput.value = "";
  render();
});

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((b) => b.classList.remove("clicked"));
    btn.classList.add("clicked");

    currentFilter = btn.dataset.fltr;
    render();
  });
});

render();
