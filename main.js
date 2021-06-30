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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {\r\n  const LOCAL_STORAGE_LIST_KEY = \"task.lists\";\r\n  const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = \"task.selectedListId\";\r\n  let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];\r\n  let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);\r\n\r\n  const buildAddProjectButton = () => {\r\n    const addProjectBtn = document.getElementById(\"addProject\");\r\n    const projectListForm = document.querySelector(\"[data-new-project-form]\");\r\n    addProjectBtn.addEventListener(\"click\", () => {\r\n      projectListForm.style.display = \"block\";\r\n      buildAddProjectPopup();\r\n    });\r\n  };\r\n\r\n  const buildAddProjectForm = (name) => {\r\n    return { id: Date.now().toString(), name: name, tasks: [] };\r\n  };\r\n\r\n  const buildAddTaskForm = (name, date) => {\r\n    return { id: Date.now().toString(), name: name, date: date };\r\n  };\r\n\r\n  const buildAddProjectPopup = () => {\r\n    const projectListForm = document.querySelector(\"[data-new-project-form]\");\r\n    const projectListInput = document.querySelector(\"[data-new-project-input]\");\r\n    const addProjectCancel = document.getElementById(\"addProject-Cancel\");\r\n\r\n    function submitProject(event) {\r\n      event.preventDefault();\r\n      const name = projectListInput.value;\r\n      if (name == null || name == \"\") return;\r\n      const list = buildAddProjectForm(name);\r\n      projectListInput.value = null;\r\n      lists.push(list);\r\n      saveAndRender();\r\n\r\n      projectListForm.style.display = \"none\";\r\n    }\r\n\r\n    addProjectCancel.addEventListener(\"click\", () => {\r\n      projectListInput.value = \"\";\r\n      projectListForm.style.display = \"none\";\r\n    });\r\n\r\n    projectListForm.addEventListener(\"submit\", submitProject);\r\n  };\r\n\r\n  const buildAddTaskPopup = () => {\r\n    const addTaskBtn = document.getElementById(\"addTask\");\r\n    const addTaskAdd = document.getElementById(\"addTask-Add\");\r\n    const addTaskCancel = document.getElementById(\"addTask-Cancel\");\r\n    const newTaskForm = document.querySelector(\"[data-new-task-form]\");\r\n    const newTaskTitle = document.querySelector(\"[data-new-task-title]\");\r\n    //const newTaskPriority = document.querySelector(\"[data-new-task-priority]\");\r\n    const newTaskDate = document.querySelector(\"[data-new-task-date]\");\r\n\r\n    function submitTask(event) {\r\n      console.log(\"clicked\");\r\n      event.preventDefault();\r\n      const taskName = newTaskTitle.value;\r\n      //const taskPriority = newTaskPriority.value;\r\n      const taskDate = newTaskDate.value;\r\n      if (taskName == null || taskName == \"\") return;\r\n      //if (taskPriority == null || taskPriority == \"\") return;\r\n      if (taskDate == null || taskDate == \"\") return;\r\n      const task = buildAddTaskForm(taskName, taskDate);\r\n      newTaskTitle.value = null;\r\n      //newTaskPriority.value = null;\r\n      newTaskDate.value = null;\r\n      const selectedList = lists.find((list) => list.id === selectedListId);\r\n      selectedList.tasks.push(task);\r\n      saveAndRender();\r\n      newTaskForm.style.display = \"none\";\r\n    }\r\n\r\n    addTaskBtn.addEventListener(\"click\", () => {\r\n      newTaskForm.style.display = \"block\";\r\n    });\r\n    addTaskCancel.addEventListener(\"click\", () => {\r\n      newTaskTitle.value = \"\";\r\n      //newTaskPriority.value = \"\";\r\n      newTaskDate.value = \"\";\r\n      newTaskForm.style.display = \"none\";\r\n    });\r\n\r\n    addTaskAdd.addEventListener(\"click\", submitTask);\r\n  };\r\n\r\n  const activeProject = (e) => {\r\n    //if (e.target.tagName.toLowerCase() === \"li\") {\r\n    selectedListId = e.target.parentElement.dataset.listId;\r\n    saveAndRender();\r\n    //}\r\n  };\r\n  const deleteProject = (e) => {\r\n    const li = e.target.parentElement;\r\n    li.remove();\r\n    lists = lists.filter((list) => list.id !== li.dataset.listId);\r\n    selectedListId = null;\r\n    saveAndRender();\r\n  };\r\n\r\n  const deleteTask = (e) => {\r\n    const li = e.target.parentElement.parentElement.parentElement.parentElement;\r\n    const li2 = e.target.parentElement;\r\n    li.remove();\r\n    console.log(li)\r\n    console.log(li2.id)\r\n    lists = lists.filter((list) => list.tasks.id !== li2.id);\r\n    saveAndRender();\r\n  };\r\n  //LOCALSTORAGE CODES\r\n  const clearElement = (element) => {\r\n    while (element.firstChild) {\r\n      element.removeChild(element.firstChild);\r\n    }\r\n  };\r\n\r\n  const render = () => {\r\n    const projectContainer = document.querySelector(\"[data-lists]\");\r\n    const listDisplayContainer = document.querySelector(\r\n      \"[data-list-display-container]\"\r\n    );\r\n    const listTitleElement = document.querySelector(\"[data-list-title]\");\r\n    const tasksContainer = document.querySelector(\"[data-tasks]\");\r\n    clearElement(projectContainer);\r\n    renderProjects();\r\n\r\n    const selectedList = lists.find((list) => list.id === selectedListId);\r\n    if (selectedListId == null) {\r\n      listDisplayContainer.style.display = \"none\";\r\n    } else {\r\n      listDisplayContainer.style.display = \"block\";\r\n      listTitleElement.innerText = selectedList.name;\r\n      clearElement(tasksContainer);\r\n      renderTasks(selectedList);\r\n    }\r\n  };\r\n\r\n  const renderProjects = () => {\r\n    const projectContainer = document.querySelector(\"[data-lists]\");\r\n    lists.forEach((list) => {\r\n      const listElement = document.createElement(\"li\");\r\n      const close = document.createElement(\"button\");\r\n      const projectName = document.createElement(\"span\");\r\n      close.classList.add(\"closeProject\");\r\n      close.innerHTML = \"&times;\";\r\n      listElement.dataset.listId = list.id;\r\n      listElement.classList.add(\"list-name\");\r\n      projectName.classList.add(\"projectName\");\r\n\r\n      if (list.id === selectedListId) {\r\n        listElement.classList.add(\"active-list\");\r\n      }\r\n\r\n      projectName.innerText = \" \" + list.name;\r\n      close.addEventListener(\"click\", deleteProject);\r\n      projectName.addEventListener(\"click\", activeProject);\r\n      listElement.appendChild(close);\r\n      listElement.appendChild(projectName);\r\n      projectContainer.appendChild(listElement);\r\n    });\r\n  };\r\n\r\n  const renderTasks = (selectedList) => {\r\n    const tasksContainer = document.querySelector(\"[data-tasks]\");\r\n    const taskTemplate = document.getElementById(\"task-template\");\r\n    selectedList.tasks.forEach((task) => {\r\n      const taskElement = document.importNode(taskTemplate.content, true);\r\n      const checkBox = taskElement.querySelector(\"button\");\r\n      checkBox.id = task.id;\r\n      const title = taskElement.querySelector(\".task-Title\");\r\n      title.htmlfor = task.id;\r\n      const date = taskElement.querySelector(\".task-DueDate\");\r\n      date.htmlfor = task.id;\r\n      checkBox.addEventListener(\"click\", deleteTask);\r\n      title.append(task.name);\r\n      date.append(task.date);\r\n      tasksContainer.appendChild(taskElement);\r\n    });\r\n  };\r\n\r\n  const save = () => {\r\n    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));\r\n    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);\r\n  };\r\n  const saveAndRender = () => {\r\n    save();\r\n    render();\r\n  };\r\n\r\n  const loadUI = () => {\r\n    buildAddProjectButton();\r\n    buildAddTaskPopup();\r\n    //buildEditTaskPopup();\r\n  };\r\n\r\n  render();\r\n\r\n  const buildEditTaskPopup = () => {\r\n    const editTaskBtn = document.getElementsByClassName(\"editTask\");\r\n    const editTaskCancel = document.getElementById(\"editTask-Cancel\");\r\n    const taskListForm = document.getElementById(\"[data-new-list-form]\");\r\n    editTaskBtn.addEventListener(\"click\", () => {\r\n      taskListForm.style.display = \"block\";\r\n    });\r\n    editTaskCancel.addEventListener(\"click\", () => {\r\n      taskInputTitle.value = \"\";\r\n      taskInputDesc.value = \"\";\r\n      taskInputDate.value = \"\";\r\n      taskListForm.style.display = \"none\";\r\n    });\r\n    //taskListForm.addEventListener(\"submit\", editTask);\r\n  };\r\n\r\n  return {\r\n    loadUI,\r\n  };\r\n})());\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/UI.js?");

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