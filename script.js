"use strict"
const tasks=[];
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
    const taskArea = document.querySelector('.task-area').classList.remove('hide')
    document.querySelector('#tasks').value=taskInput   
}