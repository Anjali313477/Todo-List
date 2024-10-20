let tasks = [];
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
    tasks.push(taskInput);
    document.querySelector('#task').value = ""

    showtaskList()
}

function showtaskList() {
    document.querySelector('.task-list').classList.remove('hide')
    const taskAreaDiv = document.querySelector('.task-list');
    let tasklist = ""
    tasks.forEach(task => {
        tasklist += `
        <li class= "flex">
        <div class="input-field">
         <input type ="text" value="${task}"
        </div>
       <div class= icon>
        <i class="fa-solid fa-check"></i>
        <i class="fa-solid fa-trash"></i>
       </div>
       </li>
        `;
    })
    taskAreaDiv.innerHTML = tasklist;
}



