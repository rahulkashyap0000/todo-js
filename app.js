// Define UI Vars

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

loadEventListeners();
// Load all event listeners
function loadEventListeners() {
    // DOM Load Event
    document.addEventListener("DOMContentLoaded", getTasks);
    // Add task event
    form.addEventListener("submit", addTask);
    // Remove task event
    taskList.addEventListener("click", removeTask);
    // Clear tasks event
    clearBtn.addEventListener("click", clearTasks);
    // filter tasks event
    filter.addEventListener("keyup", filterTasks);
}

// Add Task
function addTask(e) {
    e.preventDefault();
    // If nothing added
    if (taskInput.value === "") {
        alert("Add a task");
    }

    // Create li
    const li = document.createElement("li");
    // li class="collection-item"
    li.className = "collection-item";
    // <li>taskInput</li>
    li.appendChild(document.createTextNode(taskInput.value));
    // Create a new link element
    const link = document.createElement("a");
    // Add class
    link.className = "delete-item secondary-content";
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    //Clear input
    taskInput.value = "";
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains("delete-item")) {
        if (confirm("Are you sure?")) {
            e.target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
}