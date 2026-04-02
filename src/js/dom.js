export const clearList = (container) => {
  container.textContent = "";
};

export const createTaskElement = (task, index, onDelete, onToggle) => {
  const label = document.createElement("label");
  label.textContent = task.newTask;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.isChecked;

  const delBtn = document.createElement("button");
  delBtn.textContent = "X";

  checkbox.addEventListener("change", () => onToggle(index));
  delBtn.addEventListener("click", () => onDelete(index));

  const div = document.createElement("div");
  div.appendChild(checkbox);
  div.appendChild(label);

  if (task.isChecked) div.appendChild(delBtn);

  return div;
};
