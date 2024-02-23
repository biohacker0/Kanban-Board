let draggableItems = document.getElementsByClassName("task");
let dropableDivs = document.getElementsByClassName("swim-lane");

// event listners when you drag a item , we add these class to each of the item
function dragendCB(event) {
  event.target.classList.remove("is-dragging");
}
function dragCb(event) {
  event.target.classList.add("is-dragging");
}

for (let task of draggableItems) {
  task.addEventListener("dragstart", dragCb);
  task.addEventListener("dragend", dragendCB);
}

// event listners on dropable div, where you are gonna drap the items

for (let dropableDiv of dropableDivs) {
  dropableDiv.addEventListener("dragover", function dragoverCB(event) {
    event.preventDefault();
    const bottomTask = insertAboveTask(dropableDiv, event.clientY);
    const currentTask = document.querySelector(".is-dragging");
    console.log(currentTask);

    if (!bottomTask) dropableDiv.appendChild(currentTask);
    else dropableDiv.insertBefore(currentTask, bottomTask);
  });
}

//gives the item below us, if we are at bottom then null , each you drag something this is fired
function insertAboveTask(dropableDiv, mouseY) {
  const currentDropableDivTasks = dropableDiv.getElementsByClassName("task");
  let closestTask = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  for (task of currentDropableDivTasks) {
    const { top } = task.getBoundingClientRect();
    const offset = mouseY - top;

    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closestTask = task;
    }
  }

  return closestTask;
}

console.log();
