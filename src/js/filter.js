export const filterTasks = (tasks, filter) => {
  if (filter === "all") return tasks;
  if (filter === "active") return tasks.filter((t) => !t.isChecked);
  if (filter === "done") return tasks.filter((t) => t.isChecked);
};
