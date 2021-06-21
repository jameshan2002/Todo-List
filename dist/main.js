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

eval("//UI\r\nconst addProjectCancel = document.getElementById('addProject-Cancel');\r\nconst addProjectBtn = document.getElementById('addProject');\r\nconst addProjectPopup = document.getElementById('addProject-Popup');\r\n\r\nfunction openPopup() {\r\n    addProjectPopup.style.display = \"block\";\r\n}\r\n\r\naddProjectBtn.addEventListener('click', openPopup)\r\naddProjectCancel.addEventListener('click', () => addProjectPopup.style.display = 'none');\r\n\r\n//TodoList\r\n\r\nconst projectInput = document.querySelector(\"#addProject-Popup input\");\r\n\r\n\r\nfunction addProject() {\r\n\r\n}\r\n\r\nfunction submitProject(event) {\r\n    event.preventDefault();\r\n    console.log(projectInput.value);\r\n    if(!projectInput.value == \"\") {\r\n        projectInput.value = \"\";\r\n        addProjectPopup.style.display = 'none';\r\n    }\r\n}\r\n\r\naddProjectPopup.addEventListener(\"submit\", submitProject);\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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