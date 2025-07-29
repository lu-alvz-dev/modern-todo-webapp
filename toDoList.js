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
  //clearing list
  clearList();
  // filtering active, done and all tasks
  const filterList = tasks.filter((filteredTask) => {
    if (filteredTask === "all") return true;
    if (filteredTask === "active") return !filteredTask.isChecked;
    if (filteredTask === "done") return filteredTask.isChecked;
  });

  //looping filter list to render each task

  filterList.forEach((fltrTask, i) => {
    //creating label
    const label = document.createElement("label");

    //setting for attribute for label to link input checkbox
    label.setAttribute("for", "checkTask");
    label.classList.add("taskLabel");

    //transfering task from user to Html label
    label.textContent = fltrTask.newTask;

    // creating input checkbox for new task
  });
};

//rendering To-Do List

render();

//Adding new task
add.addEventListener("click", () => {
  //getting task from input
  const newTask = document.getElementById("task").value;

  // pushing tasks into task array
  tasks.push({ newTask, isChecked: false });

  saveTasks();
  //reseting the input
  document.getElementById("task").value = "";
  render();
});
