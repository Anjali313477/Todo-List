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

    let tasks = JSON.parse(localStorage.getItem("object")) || [];
    tasks.push(taskInput);
    localStorage.setItem("object", JSON.stringify(tasks));
    document.querySelector('#task').value = ""
    showtaskList()
}

function showtaskList() {
    const taskAreaDiv = document.querySelector('.taskList-Container');
    document.querySelector('.taskList-Conatiner').classList.remove("hide")
    let tasks = localStorage.getItem('object');
    let tasksList = JSON.parse(tasks) || [];

    let elementsList = "";
    tasksList.forEach((task) => {
        elementsList += `
         <div class="task-list ">
             <div>
                    <input type="text" value="${task}" class="input-field"> 
                </div>
                <div class="icon-list">
                    <i class="fa-solid fa-check"></i>
                    <i class="fa-solid fa-trash"></i> 
                </div>
                
         </div>`


    });

    taskAreaDiv.innerHTML = elementsList;
}







