const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoDiv = document.getElementById("todo-lane");

form.addEventListener("submit", onSubmitCb);
function onSubmitCb(event) {
  event.preventDefault();
  const values = input.value;

  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerText = values;

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });

  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

  todoDiv.appendChild(newTask);
  input.value = "";
}
