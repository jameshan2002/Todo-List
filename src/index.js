//UI
//Task Popups
const addProjectCancel = document.getElementById("addProject-Cancel");
const addProjectBtn = document.getElementById("addProject");
const addProjectPopup = document.getElementById("addProject-Popup");

const addTaskBtn = document.getElementById("addTask");
const addTaskCancel = document.getElementById("addTask-Cancel");
const addTaskPopup = document.getElementById("addTask-Popup");

function openProjectPopup() {
  addProjectPopup.style.display = "block";
}

function openTaskPopup() {
  addTaskPopup.style.display = "block";
}

addProjectBtn.addEventListener("click", openProjectPopup);
addProjectCancel.addEventListener(
  "click",
  () => (addProjectPopup.style.display = "none")
);

addTaskBtn.addEventListener("click", openTaskPopup);
addTaskCancel.addEventListener(
  "click",
  () => (addTaskPopup.style.display = "none")
);

//TodoList for PROJECT
const projectInput = document.querySelector("#addProject-Popup input");
const projectList = document.getElementById("project-list");

function submitProject(event) {
  event.preventDefault();
  const newProject = projectInput.value;
  if (!newProject == "") {
    projectInput.value = "";
    addProjectPopup.style.display = "none";
  }
  const newProjectObj = {
    text: newProject,
    id: Date.now(),
  };
  addProject(newProjectObj);
}

function addProject(newProject) {
    const li = document.createElement("li");
    li.id = newProject.id;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteProject);
    const span = document.createElement("span");
    span.innerText = newProject.text;
    li.appendChild(button);
    li.appendChild(span);
    projectList.appendChild(li);
    console.log(newProject.text)
  }


  function deleteProject(event) {
    const li = event.target.parentElement;
    li.remove();
  }

addProjectPopup.addEventListener("submit", submitProject);

//TODO list for FORMS
const taskInputTitle = document.querySelector("#addTask-Popup .taskInput-Title");
const taskInputDesc = document.querySelector("#addTask-Popup .taskInput-Desc");
const taskInputDate = document.querySelector("#addTask-Popup .taskInput-Date");
const taskList = document.getElementById("task-list");

function submitTask(event) {
  event.preventDefault();
  const newTaskTitle = taskInputTitle.value;
  const newTaskDesc = taskInputDesc.value;
  const newTaskDate = taskInputDate.value;
  if (!newTaskTitle == "") {
    taskInputTitle.value = "";
    addTaskPopup.style.display = "none";
  }
  const newTaskObj = {
    title: newTaskTitle,
    desc: newTaskDesc,
    date: newTaskDate,
    id: Date.now(),
  };
  addTask(newTaskObj);
}

function addTask(newTask) {
    const li = document.createElement("div");
    const taskContainer = document.createElement("div");
    li.id = newTask.id;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTask);
    const spanTitle = document.createElement("span");
    const spanDesc = document.createElement("span");
    const spanDate = document.createElement("div");
    spanTitle.classList.add("title");
    spanDesc.classList.add("desc");
    spanDate.classList.add("date");
    taskContainer.classList.add("taskContainer");
    spanTitle.innerText = newTask.title;
    spanDesc.innerText = newTask.desc;
    spanDate.innerText = newTask.date;
    taskContainer.appendChild(button);
    taskContainer.appendChild(spanTitle);
    taskContainer.appendChild(spanDesc);
    li.appendChild(taskContainer);
    li.appendChild(spanDate);
    taskList.appendChild(li);
  }


  function deleteTask(event) {
    const li = event.target.parentElement;
    li.remove();
    console.log("heelo")
  }

addTaskPopup.addEventListener("submit", submitTask);