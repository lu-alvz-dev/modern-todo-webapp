// DOOM variables

const task = document.getElementById("task");
const add = document.getElementById("add");
const filter = document.querySelectorAll(".flt_btn");
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
    if (fltr === "all") return true;
    if (fltr === "active") return !filteredTask.isChecked;
    if (fltr === "done") return filteredTask.isChecked;
  });

  //looping filter list to render each task

  filterList.forEach((fltrTask, i) => {
    //creating label
    const label = document.createElement("label");

    //setting for attribute for label to link input checkbox
    label.setAttribute("for", `checkTask${[i]}`);
    label.classList.add("taskLabel");

    //transfering task from user to Html label
    label.textContent = fltrTask.newTask;

    // creating input checkbox for new task and adding attributes
    const input = document.createElement("input");

    input.setAttribute("type", "checkbox");
    input.setAttribute("id", `checkTask${[i]}`);
    input.setAttribute("name", "checkTask");

    //setting the value checked into input newtask  from filtered tasks
    input.checked = fltrTask.isChecked;

    //creating task delete button
    const delBtn = document.createElement("button");
    delBtn.classList.add("del_btn");
    delBtn.textContent = "X";

    // Adding Listener to update checked value  to task

    input.addEventListener("change", () => {
      tasks[i].isChecked = input.checked;
      saveTasks();
      render();
    });

    //Creating div element to wrap input and label task
    const div = document.createElement("div");

    div.appendChild(input);
    div.appendChild(label);

    // adding if to append delbtn to div when a tasj is done
    if (input.checked) div.appendChild(delBtn);
    //adding div element to task section
    section.appendChild(div);
  });

  //adding forEach to add listener to button filter selected
  filter.forEach((ftr) => {
    ftr.addEventListener("click", () => {
      fltr = ftr.dataset.fltr;
      render();
    });
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
