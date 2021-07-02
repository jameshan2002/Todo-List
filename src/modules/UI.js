export default (function () {
  const LOCAL_STORAGE_LIST_KEY = "task.lists";
  const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "task.selectedListId";
  let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
  let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

  const buildAddProjectButton = () => {
    const addProjectBtn = document.getElementById("addProject");
    const projectListForm = document.querySelector("[data-new-project-form]");
    addProjectBtn.addEventListener("click", () => {
      projectListForm.style.display = "block";
      buildAddProjectPopup();
    });
  };

  const buildAddProjectForm = (name) => {
    return { id: Date.now().toString(), name: name, tasks: [] };
  };

  const buildAddTaskForm = (name, date) => {
    return { id: Date.now().toString(), name: name, date: date };
  };

  const buildAddProjectPopup = () => {
    const projectListForm = document.querySelector("[data-new-project-form]");
    const projectListInput = document.querySelector("[data-new-project-input]");
    const addProjectCancel = document.getElementById("addProject-Cancel");

    function submitProject(event) {
      event.preventDefault();
      const name = projectListInput.value;
      if (name == null || name == "") return;
      const list = buildAddProjectForm(name);
      projectListInput.value = null;
      lists.push(list);
      saveAndRender();

      projectListForm.style.display = "none";
    }

    addProjectCancel.addEventListener("click", () => {
      projectListInput.value = "";
      projectListForm.style.display = "none";
    });

    projectListForm.addEventListener("submit", submitProject);
  };

  const buildAddTaskPopup = () => {
    const addTaskBtn = document.getElementById("addTask");
    const addTaskAdd = document.getElementById("addTask-Add");
    const addTaskCancel = document.getElementById("addTask-Cancel");
    const newTaskForm = document.querySelector("[data-new-task-form]");
    const newTaskTitle = document.querySelector("[data-new-task-title]");
    //const newTaskPriority = document.querySelector("[data-new-task-priority]");
    const newTaskDate = document.querySelector("[data-new-task-date]");

    function submitTask(event) {
      event.preventDefault();
      const taskName = newTaskTitle.value;
      //const taskPriority = newTaskPriority.value;
      const taskDate = newTaskDate.value;
      if (taskName == null || taskName == "") return;
      //if (taskPriority == null || taskPriority == "") return;
      if (taskDate == null || taskDate == "") return;
      const task = buildAddTaskForm(taskName, taskDate);
      newTaskTitle.value = null;
      //newTaskPriority.value = null;
      newTaskDate.value = null;
      const selectedList = lists.find((list) => list.id === selectedListId);
      selectedList.tasks.push(task);
      saveAndRender();
      newTaskForm.style.display = "none";
    }

    addTaskBtn.addEventListener("click", () => {
      newTaskForm.style.display = "block";
    });
    addTaskCancel.addEventListener("click", () => {
      newTaskTitle.value = "";
      //newTaskPriority.value = "";
      newTaskDate.value = "";
      newTaskForm.style.display = "none";
    });

    addTaskAdd.addEventListener("click", submitTask);
  };

  const activeProject = (e) => {
    //if (e.target.tagName.toLowerCase() === "li") {
    selectedListId = e.target.parentElement.dataset.listId;
    saveAndRender();
    //}
  };
  const deleteProject = (e) => {
    const li = e.target.parentElement;
    li.remove();
    lists = lists.filter((list) => list.id !== li.dataset.listId);
    selectedListId = null;
    saveAndRender();
  };

  const deleteTask = (e) => {
    const li = e.target.parentElement.parentElement.parentElement.parentElement;
    const li2 = e.target;
    li.remove();
    li2.remove();
    const selectedList = lists.find((list) => list.id === selectedListId);
    selectedList.tasks = selectedList.tasks.filter(
      (task) => task.id !== li2.id
    );
    saveAndRender();
  };
  //LOCALSTORAGE CODES
  const clearElement = (element) => {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  };

  const render = () => {
    const projectContainer = document.querySelector("[data-lists]");
    const listDisplayContainer = document.querySelector(
      "[data-list-display-container]"
    );
    const listTitleElement = document.querySelector("[data-list-title]");
    const tasksContainer = document.querySelector("[data-tasks]");
    clearElement(projectContainer);
    renderProjects();

    const selectedList = lists.find((list) => list.id === selectedListId);
    if (selectedListId == null) {
      listDisplayContainer.style.display = "none";
    } else {
      listDisplayContainer.style.display = "block";
      listTitleElement.innerText = selectedList.name;
      clearElement(tasksContainer);
      renderTasks(selectedList);
    }
  };

  const renderProjects = () => {
    const projectContainer = document.querySelector("[data-lists]");
    lists.forEach((list) => {
      const listElement = document.createElement("li");
      const close = document.createElement("button");
      const projectName = document.createElement("span");
      close.classList.add("closeProject");
      close.innerHTML = "&times;";
      listElement.dataset.listId = list.id;
      listElement.classList.add("list-name");
      projectName.classList.add("projectName");

      if (list.id === selectedListId) {
        listElement.classList.add("active-list");
      }

      projectName.innerText = " " + list.name;
      close.addEventListener("click", deleteProject);
      projectName.addEventListener("click", activeProject);
      listElement.appendChild(close);
      listElement.appendChild(projectName);
      projectContainer.appendChild(listElement);
    });
  };

  const renderTasks = (selectedList) => {
    const tasksContainer = document.querySelector("[data-tasks]");
    const taskTemplate = document.getElementById("task-template");
    selectedList.tasks.forEach((task) => {
      const taskElement = document.importNode(taskTemplate.content, true);
      const checkBox = taskElement.querySelector(".inner-circle");
      checkBox.id = task.id;
      const title = taskElement.querySelector(".task-Title");
      title.htmlfor = task.id;
      const date = taskElement.querySelector(".task-DueDate");
      date.htmlfor = task.id;
      checkBox.addEventListener("click", deleteTask);
      title.append(task.name);
      date.append(task.date);
      tasksContainer.appendChild(taskElement);
    });
  };

  const save = () => {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
  };
  const saveAndRender = () => {
    save();
    render();
  };

  const loadUI = () => {
    buildAddProjectButton();
    buildAddTaskPopup();
    //buildEditTaskPopup();
  };

  render();

  const buildEditTaskPopup = () => {
    const editTaskBtn = document.getElementsByClassName("editTask");
    const editTaskCancel = document.getElementById("editTask-Cancel");
    const taskListForm = document.getElementById("[data-new-list-form]");
    editTaskBtn.addEventListener("click", () => {
      taskListForm.style.display = "block";
    });
    editTaskCancel.addEventListener("click", () => {
      taskInputTitle.value = "";
      taskInputDesc.value = "";
      taskInputDate.value = "";
      taskListForm.style.display = "none";
    });
    //taskListForm.addEventListener("submit", editTask);
  };

  return {
    loadUI,
  };
})();
