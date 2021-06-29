/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\r\n\r\n_modules_UI__WEBPACK_IMPORTED_MODULE_0__.default.loadUI();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {\r\n  const LOCAL_STORAGE_LIST_KEY = \"lists\";\r\n  let lists = [];\r\n\r\n  const buildAddProjectButton = () => {\r\n    const addProjectBtn = document.getElementById(\"addProject\");\r\n    const projectListForm = document.querySelector(\"[data-new-project-form]\");\r\n    const deleteProject = document.querySelectorAll(\".close\");\r\n    addProjectBtn.addEventListener(\"click\", () => {\r\n      projectListForm.style.display = \"block\";\r\n      buildAddProjectPopup();\r\n    });\r\n    deleteProject.addEventListener(\"click\", (event) => {\r\n      const li = event.target.parentElement;\r\n      li.remove();\r\n    });\r\n  };\r\n\r\n  const buildAddProjectPopup = () => {\r\n    const projectListForm = document.querySelector(\"[data-new-project-form]\");\r\n    const projectListInput = document.querySelector(\"[data-new-project-input]\");\r\n    const addProjectCancel = document.getElementById(\"addProject-Cancel\");\r\n    function submitProject(event) {\r\n      event.preventDefault();\r\n      const name = projectListInput.value;\r\n      if (name == null || name == \"\") return;\r\n      const list = buildAddProjectForm(name);\r\n      lists.push(list);\r\n      render();\r\n      projectListInput.value = \"\";\r\n      projectListForm.style.display = \"none\";\r\n    }\r\n\r\n    addProjectCancel.addEventListener(\"click\", () => {\r\n      projectListInput.value = \"\";\r\n      projectListForm.style.display = \"none\";\r\n    });\r\n    projectListForm.addEventListener(\"submit\", submitProject);\r\n  };\r\n\r\n  const buildAddProjectForm = (name) => {\r\n    return { id: Date.now().toString(), name: name, tasks: [] };\r\n  };\r\n\r\n  const render = () => {\r\n    const listsContainer = document.querySelector(\"[data-lists]\");\r\n    clearElement(listsContainer);\r\n    lists.forEach((list) => {\r\n      const listElement = document.createElement(\"li\");\r\n      const projectName = document.createElement(\"span\");\r\n      const close = document.createElement(\"span\");\r\n      projectName.classList.add(\"projectName\");\r\n      close.classList.add(\"close\");\r\n      close.innerHTML = \"&times;\";\r\n      listElement.dataset.listid = list.id;\r\n      listElement.classList.add(\"list-name\");\r\n      projectName.innerText = \" \" + list.name;\r\n      listElement.appendChild(close);\r\n      listElement.appendChild(projectName);\r\n      listsContainer.appendChild(listElement);\r\n    });\r\n  };\r\n\r\n  const clearElement = (element) => {\r\n    while (element.firstChild) {\r\n      element.removeChild(element.firstChild);\r\n    }\r\n  };\r\n\r\n  const buildAddTaskPopup = () => {\r\n    const addTaskBtn = document.getElementById(\"addTask\");\r\n    const addTaskCancel = document.getElementById(\"addTask-Cancel\");\r\n    const addTaskPopup = document.getElementById(\"addTask-Popup\");\r\n    addTaskBtn.addEventListener(\"click\", () => {\r\n      addTaskPopup.style.display = \"block\";\r\n    });\r\n    addTaskCancel.addEventListener(\"click\", () => {\r\n      taskInputTitle.value = \"\";\r\n      taskInputDesc.value = \"\";\r\n      taskInputDate.value = \"\";\r\n      addTaskPopup.style.display = \"none\";\r\n    });\r\n    //addTaskPopup.addEventListener(\"submit\", submitTask);\r\n  };\r\n\r\n  const buildEditTaskPopup = () => {\r\n    const editTaskBtn = document.getElementsByClassName(\"editTask\");\r\n    const editTaskCancel = document.getElementById(\"editTask-Cancel\");\r\n    const taskListForm = document.getElementById(\"[data-new-list-form]\");\r\n    editTaskBtn.addEventListener(\"click\", () => {\r\n      taskListForm.style.display = \"block\";\r\n    });\r\n    editTaskCancel.addEventListener(\"click\", () => {\r\n      taskInputTitle.value = \"\";\r\n      taskInputDesc.value = \"\";\r\n      taskInputDate.value = \"\";\r\n      taskListForm.style.display = \"none\";\r\n    });\r\n    //taskListForm.addEventListener(\"submit\", editTask);\r\n  };\r\n\r\n  //TodoList for PROJECT\r\n  const projectInput = document.querySelector(\"#addProject-Popup input\");\r\n  const projectList = document.getElementById(\"project-list\");\r\n\r\n  /* function submitProject(event) {\r\n      event.preventDefault();\r\n      const newProject = projectInput.value;\r\n      if (!newProject == \"\") {\r\n        closeProjectPopup()\r\n      }\r\n      const newProjectObj = {\r\n        text: newProject,\r\n        id: Date.now(),\r\n      };\r\n      addProject(newProjectObj);\r\n    }\r\n    \r\n    function addProject(newProject) {\r\n        const li = document.createElement(\"li\");\r\n        li.id = newProject.id;\r\n        const button = document.createElement(\"button\");\r\n        button.innerText = \"❌\";\r\n        button.addEventListener(\"click\", deleteProject);\r\n        const span = document.createElement(\"span\");\r\n        span.innerText = newProject.text;\r\n        li.appendChild(button);\r\n        li.appendChild(span);\r\n        projectList.appendChild(li);\r\n      } */\r\n\r\n//   function deleteProject(event) {\r\n//     const li = event.target.parentElement;\r\n//     li.remove();\r\n//   }\r\n\r\n  //TODO list for FORMS\r\n  const taskInputTitle = document.querySelector(\r\n    \"#addTask-Popup .taskInput-Title\"\r\n  );\r\n  const taskInputDesc = document.querySelector(\r\n    \"#addTask-Popup .taskInput-Desc\"\r\n  );\r\n  const taskInputDate = document.querySelector(\r\n    \"#addTask-Popup .taskInput-Date\"\r\n  );\r\n\r\n  const editInputTitle = document.querySelector(\r\n    \"#editTask-Popup .taskInput-Title\"\r\n  );\r\n  const editInputDesc = document.querySelector(\r\n    \"#editTask-Popup .taskInput-Desc\"\r\n  );\r\n  const editInputDate = document.querySelector(\r\n    \"#editTask-Popup .taskInput-Date\"\r\n  );\r\n\r\n  const taskList = document.getElementById(\"task-list\");\r\n  /* \r\n    const TASKS_KEY = \"task\";\r\n    let tasks = [];\r\n    \r\n    function saveTask() {\r\n      localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));\r\n    }\r\n    \r\n    function deleteTask(event) {\r\n      const li = event.target.parentElement.parentElement;\r\n      li.remove();\r\n      tasks = tasks.filter((tasks) => tasks.id !== parseInt(li.id));\r\n      saveTask();\r\n    }\r\n    \r\n    function editTask(event) {\r\n      event.preventDefault();\r\n      const li = event.target.parentElement;\r\n      const newTaskTitle = editInputTitle.value;\r\n      const newTaskDesc = editInputDesc.value;\r\n      const newTaskDate = (editInputDate.value == 0) ? \"No Date\" : taskInputDate.value;\r\n      if (!newTaskTitle == \"\") {\r\n        closeEditPopup();\r\n      }\r\n      const newTaskObj = {\r\n        title: newTaskTitle,\r\n        desc: newTaskDesc,\r\n        date: newTaskDate,\r\n        id: Date.now(),\r\n      };\r\n      //tasks = tasks.filter((tasks) => tasks.id !== parseInt(li.id));\r\n      const found = tasks.indexOf((tasks) => tasks.id == parseInt(li.id));\r\n      li.remove();\r\n      console.log(found + \" asdasdsad\");\r\n      saveTask();\r\n    }\r\n    \r\n    function submitTask(event) {\r\n      event.preventDefault();\r\n      const newTaskTitle = taskInputTitle.value;\r\n      const newTaskDesc = taskInputDesc.value;\r\n      const newTaskDate = (taskInputDate.value == 0) ? \"No Date\" : taskInputDate.value;\r\n      if (!newTaskTitle == \"\") {\r\n        closeTaskPopup();\r\n      }\r\n      const newTaskObj = {\r\n        title: newTaskTitle,\r\n        desc: newTaskDesc,\r\n        date: newTaskDate,\r\n        id: Date.now(),\r\n      };\r\n        tasks.push(newTaskObj);\r\n        addTask(newTaskObj);\r\n        saveTask();\r\n    }\r\n    \r\n    function addTask(newTask) {\r\n        const li = document.createElement(\"div\");\r\n        const leftContainer = document.createElement(\"div\");\r\n        const rightContainer = document.createElement(\"div\");\r\n        li.id = newTask.id;\r\n        const checked = document.createElement(\"button\");\r\n        checked.innerText = \"❌\";\r\n        checked.addEventListener(\"click\", deleteTask);\r\n        const edit = document.createElement(\"button\");\r\n        edit.innerText = \"✏️️\"\r\n        edit.addEventListener(\"click\", () => {\r\n          editInputTitle.value = newTask.title;\r\n          editInputDesc.value = newTask.desc;\r\n          editInputDate.value = newTask.date;\r\n          openEditPopup();\r\n        });\r\n        const spanTitle = document.createElement(\"span\");\r\n        const spanDesc = document.createElement(\"span\");\r\n        const spanDate = document.createElement(\"span\");\r\n        li.classList.add(\"eachTasks\");\r\n        spanTitle.classList.add(\"title\");\r\n        spanDesc.classList.add(\"desc\");\r\n        spanDate.classList.add(\"date\");\r\n        leftContainer.classList.add(\"leftContainer\");\r\n        spanTitle.innerText = newTask.title;\r\n        spanDesc.innerText = newTask.desc;\r\n        spanDate.innerText = newTask.date;\r\n        leftContainer.appendChild(checked);\r\n        leftContainer.appendChild(spanTitle);\r\n        leftContainer.appendChild(spanDesc);\r\n        rightContainer.appendChild(spanDate);\r\n        rightContainer.appendChild(edit);\r\n        li.appendChild(leftContainer);\r\n        li.appendChild(rightContainer);\r\n        taskList.appendChild(li);\r\n      }\r\n    \r\n    const savedTask = localStorage.getItem(TASKS_KEY);\r\n    if (savedTask) {\r\n      const parsedToDos = JSON.parse(savedTask);\r\n      toDos = parsedToDos;\r\n      parsedToDos.forEach(addTask);\r\n    } */\r\n  const loadUI = () => {\r\n    buildAddProjectButton();\r\n    buildAddTaskPopup();\r\n    //buildEditTaskPopup();\r\n  };\r\n\r\n  render();\r\n\r\n  return {\r\n    loadUI,\r\n  };\r\n})());\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/UI.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;