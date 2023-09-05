let input = document.querySelector(".enter-list");
let addBtn = document.querySelector(".add-list");
let tasks = document.querySelector(".tasks");
let editingTask = null;

function createTaskItem(text) {
  const newItem = document.createElement("div");
  newItem.classList.add("item");
  newItem.innerHTML = `
    <p>${text}</p>
    <div class="item-btn">
      <i class="fa-solid fa-pen-to-square"></i> 
      <i class="fa-solid fa-trash"></i>
    </div>
  `;
  tasks.appendChild(newItem);
  return newItem;
}

// Function to toggle task completion
function toggleTaskCompletion(item) {
  item.classList.toggle("completed");
}

// Function to delete a task
function deleteTask(item) {
  item.remove();
}

// Function to start editing a task
function startEditingTask(item) {
  const editForm = document.createElement("div");
  editForm.classList.add("list-head", "editing");

  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.classList.add("enter-list");
  editInput.value = item.querySelector("p").textContent;

  const saveButton = document.createElement("button");
  saveButton.classList.add("add-list");
  saveButton.textContent = "Add Task";

  editForm.appendChild(editInput);
  editForm.appendChild(saveButton);
  item.appendChild(editForm);

  item.style.background = "none";
  item.querySelector(".fa-pen-to-square").style.display = "none";
  item.querySelector(".fa-trash").style.display = "none";
  item.querySelector("p").style.display = "none";

  // Apply styles for input and button
  saveButton.style.height = "40px";
  saveButton.addEventListener("click", () => {
    const updatedText = editInput.value.trim();
    if (updatedText !== "") {
      item.querySelector("p").textContent = updatedText;
    }

    item.removeChild(editForm);
    editingTask = null;
    item.style.background = "";
    item.querySelector(".fa-pen-to-square").style.display = "block";
    item.querySelector(".fa-trash").style.display = "inline";
    item.querySelector("p").style.display = "block";
  });
}

// Event listener for adding tasks
addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText !== "") {
    const newItem = createTaskItem(taskText);

    newItem.querySelector("p").addEventListener("click", () => {
      toggleTaskCompletion(newItem);
    });

    newItem.querySelector(".fa-trash").addEventListener("click", () => {
      deleteTask(newItem);
    });

    newItem.querySelector(".fa-pen-to-square").addEventListener("click", () => {
      if (!editingTask) {
        editingTask = newItem;
        startEditingTask(newItem);
      }
    });
    input.value = "";
  } else {
    alert("Please enter a task");
  }
});
