//UI
//Task Popups
const addProjectCancel = document.getElementById("addProject-Cancel");
const addProjectBtn = document.getElementById("addProject");
const addProjectPopup = document.getElementById("addProject-Popup");

const addTaskBtn = document.getElementById("addTask");
const addTaskCancel = document.getElementById("addTask-Cancel");
const addTaskPopup = document.getElementById("addTask-Popup");

const editTaskBtn = document.getElementById("editTask");
const editTaskCancel = document.getElementById("editTask-Cancel");
const editTaskPopup = document.getElementById("editTask-Popup");

function openProjectPopup() {
  addProjectPopup.style.display = "block";
}

function openTaskPopup() {
  addTaskPopup.style.display = "block";
}

function openEditPopup() {
  editTaskPopup.style.display = "block";
}

function closeEditPopup() {
  taskInputTitle.value = "";
  taskInputDesc.value = "";
  taskInputDate.value = "";
  editTaskPopup.style.display = "none" 
}

function closeTaskPopup() {
  taskInputTitle.value = "";
  taskInputDesc.value = "";
  taskInputDate.value = "";
  addTaskPopup.style.display = "none" 
}

function closeProjectPopup() {
  projectInput.value = "";
  addProjectPopup.style.display = "none";
}

addProjectBtn.addEventListener("click", () => {openProjectPopup(); editOrAdd = "ADD";});
addProjectCancel.addEventListener(
  "click", closeProjectPopup);

addTaskBtn.addEventListener("click", openTaskPopup);
addTaskCancel.addEventListener(
  "click", closeTaskPopup);

//TodoList for PROJECT
const projectInput = document.querySelector("#addProject-Popup input");
const projectList = document.getElementById("project-list");

function submitProject(event) {
  event.preventDefault();
  const newProject = projectInput.value;
  if (!newProject == "") {
    closeProjectPopup()
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

const editInputTitle = document.querySelector("#editTask-Popup .taskInput-Title");
const editInputDesc = document.querySelector("#editTask-Popup .taskInput-Desc");
const editInputDate = document.querySelector("#editTask-Popup .taskInput-Date");

const taskList = document.getElementById("task-list");

const TASKS_KEY = "task";
let tasks = [];

function saveTask() {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

function deleteTask(event) {
  const li = event.target.parentElement.parentElement;
  li.remove();
  tasks = tasks.filter((tasks) => tasks.id !== parseInt(li.id));
  saveTask();
}

function editTask(event) {
  event.preventDefault();
  const li = event.target.parentElement;
  const newTaskTitle = editInputTitle.value;
  const newTaskDesc = editInputDesc.value;
  const newTaskDate = (editInputDate.value == 0) ? "No Date" : taskInputDate.value;
  if (!newTaskTitle == "") {
    closeEditPopup();
  }
  const newTaskObj = {
    title: newTaskTitle,
    desc: newTaskDesc,
    date: newTaskDate,
    id: Date.now(),
  };
  //tasks = tasks.filter((tasks) => tasks.id !== parseInt(li.id));
  const found = tasks.indexOf((tasks) => tasks.id == parseInt(li.id));
  li.remove();
  console.log(found + " asdasdsad");
  saveTask();
}

function submitTask(event) {
  event.preventDefault();
  const newTaskTitle = taskInputTitle.value;
  const newTaskDesc = taskInputDesc.value;
  const newTaskDate = (taskInputDate.value == 0) ? "No Date" : taskInputDate.value;
  if (!newTaskTitle == "") {
    closeTaskPopup();
  }
  const newTaskObj = {
    title: newTaskTitle,
    desc: newTaskDesc,
    date: newTaskDate,
    id: Date.now(),
  };
    tasks.push(newTaskObj);
    addTask(newTaskObj);
    saveTask();
}

function addTask(newTask) {
    const li = document.createElement("div");
    const leftContainer = document.createElement("div");
    const rightContainer = document.createElement("div");
    li.id = newTask.id;
    const checked = document.createElement("button");
    checked.innerText = "❌";
    checked.addEventListener("click", deleteTask);
    const edit = document.createElement("button");
    edit.innerText = "✏️️"
    edit.addEventListener("click", () => {
      editInputTitle.value = newTask.title;
      editInputDesc.value = newTask.desc;
      editInputDate.value = newTask.date;
      openEditPopup();
    });
    const spanTitle = document.createElement("span");
    const spanDesc = document.createElement("span");
    const spanDate = document.createElement("span");
    li.classList.add("eachTasks");
    spanTitle.classList.add("title");
    spanDesc.classList.add("desc");
    spanDate.classList.add("date");
    leftContainer.classList.add("leftContainer");
    spanTitle.innerText = newTask.title;
    spanDesc.innerText = newTask.desc;
    spanDate.innerText = newTask.date;
    leftContainer.appendChild(checked);
    leftContainer.appendChild(spanTitle);
    leftContainer.appendChild(spanDesc);
    rightContainer.appendChild(spanDate);
    rightContainer.appendChild(edit);
    li.appendChild(leftContainer);
    li.appendChild(rightContainer);
    taskList.appendChild(li);
  }

addTaskPopup.addEventListener("submit", submitTask);
editTaskPopup.addEventListener("submit", editTask);

const savedTask = localStorage.getItem(TASKS_KEY);
if (savedTask) {
  const parsedToDos = JSON.parse(savedTask);
  toDos = parsedToDos;
  parsedToDos.forEach(addTask);
}