const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

loadTasks();



addButton.addEventListener("click", addTask);

function addTask() {
  const task = taskInput.value.trim();

  if (task === "") {
    alert("Dont entry empty content!!! ")
    removeEventListener(deleteButton)
  }

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskInput.value = "";
  loadTasks();
}


function loadTasks() {
  taskList.innerHTML = "";
  tasks.forEach(function (task, index)
  {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    span.innerText = task;
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function () {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      loadTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}