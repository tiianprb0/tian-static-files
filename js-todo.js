document.addEventListener('DOMContentLoaded', loadTasks);

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', removeTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `<input type="radio"> ${taskText} <button class="delete-button">x</button>`;
    
    taskList.appendChild(li);
    storeTaskInLocalStorage(taskText);

    taskInput.value = '';
}

function removeTask(e) {
    if (e.target.classList.contains('delete-button')) {
        const taskItem = e.target.parentElement;
        removeTaskFromLocalStorage(taskItem.textContent.trim());
        taskItem.remove();
    }
}

function storeTaskInLocalStorage(task) {
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(taskToDelete) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = tasks.filter(task => task !== taskToDelete);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="radio"> ${task} <button class="delete-button">x</button>`;
        taskList.appendChild(li);
    });
}
