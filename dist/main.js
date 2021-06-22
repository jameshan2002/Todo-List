/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//UI\r\n//Task Popups\r\nconst addProjectCancel = document.getElementById(\"addProject-Cancel\");\r\nconst addProjectBtn = document.getElementById(\"addProject\");\r\nconst addProjectPopup = document.getElementById(\"addProject-Popup\");\r\n\r\nconst addTaskBtn = document.getElementById(\"addTask\");\r\nconst addTaskCancel = document.getElementById(\"addTask-Cancel\");\r\nconst addTaskPopup = document.getElementById(\"addTask-Popup\");\r\n\r\nfunction openProjectPopup() {\r\n  addProjectPopup.style.display = \"block\";\r\n}\r\n\r\nfunction openTaskPopup() {\r\n  addTaskPopup.style.display = \"block\";\r\n}\r\n\r\naddProjectBtn.addEventListener(\"click\", openProjectPopup);\r\naddProjectCancel.addEventListener(\r\n  \"click\",\r\n  () => (addProjectPopup.style.display = \"none\")\r\n);\r\n\r\naddTaskBtn.addEventListener(\"click\", openTaskPopup);\r\naddTaskCancel.addEventListener(\r\n  \"click\",\r\n  () => (addTaskPopup.style.display = \"none\")\r\n);\r\n\r\n//TodoList for PROJECT\r\nconst projectInput = document.querySelector(\"#addProject-Popup input\");\r\nconst projectList = document.getElementById(\"project-list\");\r\n\r\nfunction submitProject(event) {\r\n  event.preventDefault();\r\n  const newProject = projectInput.value;\r\n  if (!newProject == \"\") {\r\n    projectInput.value = \"\";\r\n    addProjectPopup.style.display = \"none\";\r\n  }\r\n  const newProjectObj = {\r\n    text: newProject,\r\n    id: Date.now(),\r\n  };\r\n  addProject(newProjectObj);\r\n}\r\n\r\nfunction addProject(newProject) {\r\n    const li = document.createElement(\"li\");\r\n    li.id = newProject.id;\r\n    const button = document.createElement(\"button\");\r\n    button.innerText = \"❌\";\r\n    button.addEventListener(\"click\", deleteProject);\r\n    const span = document.createElement(\"span\");\r\n    span.innerText = newProject.text;\r\n    li.appendChild(button);\r\n    li.appendChild(span);\r\n    projectList.appendChild(li);\r\n    console.log(newProject.text)\r\n  }\r\n\r\n\r\n  function deleteProject(event) {\r\n    const li = event.target.parentElement;\r\n    li.remove();\r\n  }\r\n\r\naddProjectPopup.addEventListener(\"submit\", submitProject);\r\n\r\n//TODO list for FORMS\r\nconst taskInputTitle = document.querySelector(\"#addTask-Popup .taskInput-Title\");\r\nconst taskInputDesc = document.querySelector(\"#addTask-Popup .taskInput-Desc\");\r\nconst taskInputDate = document.querySelector(\"#addTask-Popup .taskInput-Date\");\r\nconst taskList = document.getElementById(\"task-list\");\r\n\r\nfunction submitTask(event) {\r\n  event.preventDefault();\r\n  const newTaskTitle = taskInputTitle.value;\r\n  const newTaskDesc = taskInputDesc.value;\r\n  const newTaskDate = taskInputDate.value;\r\n  if (!newTaskTitle == \"\") {\r\n    taskInputTitle.value = \"\";\r\n    addTaskPopup.style.display = \"none\";\r\n  }\r\n  const newTaskObj = {\r\n    title: newTaskTitle,\r\n    desc: newTaskDesc,\r\n    date: newTaskDate,\r\n    id: Date.now(),\r\n  };\r\n  addTask(newTaskObj);\r\n}\r\n\r\nfunction addTask(newTask) {\r\n    const li = document.createElement(\"div\");\r\n    const taskContainer = document.createElement(\"div\");\r\n    li.id = newTask.id;\r\n    const button = document.createElement(\"button\");\r\n    button.innerText = \"❌\";\r\n    button.addEventListener(\"click\", deleteTask);\r\n    const spanTitle = document.createElement(\"span\");\r\n    const spanDesc = document.createElement(\"span\");\r\n    const spanDate = document.createElement(\"div\");\r\n    spanTitle.classList.add(\"title\");\r\n    spanDesc.classList.add(\"desc\");\r\n    spanDate.classList.add(\"date\");\r\n    taskContainer.classList.add(\"taskContainer\");\r\n    spanTitle.innerText = newTask.title;\r\n    spanDesc.innerText = newTask.desc;\r\n    spanDate.innerText = newTask.date;\r\n    taskContainer.appendChild(button);\r\n    taskContainer.appendChild(spanTitle);\r\n    taskContainer.appendChild(spanDesc);\r\n    li.appendChild(taskContainer);\r\n    li.appendChild(spanDate);\r\n    taskList.appendChild(li);\r\n  }\r\n\r\n\r\n  function deleteTask(event) {\r\n    const li = event.target.parentElement;\r\n    li.remove();\r\n    console.log(\"heelo\")\r\n  }\r\n\r\naddTaskPopup.addEventListener(\"submit\", submitTask);\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;