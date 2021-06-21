//UI
const addProjectCancel = document.getElementById('addProject-Cancel');
const addProjectBtn = document.getElementById('addProject');
const addProjectPopup = document.getElementById('addProject-Popup');

function openPopup() {
    addProjectPopup.style.display = "block";
}

addProjectBtn.addEventListener('click', openPopup)
addProjectCancel.addEventListener('click', () => addProjectPopup.style.display = 'none');

//TodoList

const projectInput = document.querySelector("#addProject-Popup input");


function addProject() {

}

function submitProject(event) {
    event.preventDefault();
    console.log(projectInput.value);
    if(!projectInput.value == "") {
        projectInput.value = "";
        addProjectPopup.style.display = 'none';
    }
}

addProjectPopup.addEventListener("submit", submitProject);
