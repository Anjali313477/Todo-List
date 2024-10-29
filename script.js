window.addEventListener('load', showtaskList)
function currentTime() {
    const newDate = new Date();
    const dateTime = newDate.toLocaleString();
    document.querySelector('.date').textContent = dateTime;
}
let interval = setInterval(currentTime, 1000);

function submitTask() {
    const taskInput = document.querySelector('#task').value.trim();
    if (taskInput === "") {
        swal("Please enter a task!", "", "warning");
        return false;
    }
    let tasks = JSON.parse(localStorage.getItem("object")) || []
    let newId = tasks.length ?
        tasks[tasks.length - 1].id + 1 : 1;
    let taskData = {
        id: newId,
        taskName: taskInput,
        isTaskComplete: false
    }

    tasks.push(taskData);
    localStorage.setItem("object", JSON.stringify(tasks));
    document.querySelector('#task').value = ""
    showtaskList()
}

function showtaskList() {
    const taskAreaDiv = document.querySelector('.taskList-Container');
    document.querySelector('.taskList-Container').classList.remove('hide');
    let tasks = localStorage.getItem('object');
    let tasksList = JSON.parse(tasks) || [];

    let elementsList = "";
    tasksList.forEach((task, index) => {
        elementsList += `
         <div class="task-list flex ">
             <div>
                <p class="${task.isTaskComplete?'text-strike-through':''}">${task.taskName}</p>
             </div>
                <div class="icon-list">
                    <i class="fa-solid fa-check ${task.isTaskComplete?'hide':''}" onclick="completeTask(${index})"></i>
                    <i class="fa-solid fa-trash"onclick=deleteTask(${index})></i> 
                </div>
                
         </div>`;
    });
    taskAreaDiv.innerHTML = elementsList;
    if(tasksList.length>=5){
       taskAreaDiv.style.overflowY='auto'
     }
}


function deleteTask(index) {
    let task = JSON.parse(localStorage.getItem("object")) || []
    task = task.filter((_, i) => i !== index)
    localStorage.setItem("object", JSON.stringify(task));
    showtaskList()
}

function completeTask(index) {
    let tasks = JSON.parse(localStorage.getItem("object")) || [];
    if (tasks[index]) {
        tasks[index].isTaskComplete = true;
        localStorage.setItem("object", JSON.stringify(tasks));
    }
    showtaskList();
}





