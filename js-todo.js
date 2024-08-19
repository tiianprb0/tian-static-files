document.addEventListener('DOMContentLoaded', loadTasks);

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskClick);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox">
        <label>${taskText}</label>
        <button class="delete-button">x</button>
    `;
    
    taskList.appendChild(li);
    storeTaskInLocalStorage({ text: taskText, completed: false });

    taskInput.value = '';
}

function handleTaskClick(e) {
    if (e.target.classList.contains('delete-button')) {
        const taskItem = e.target.parentElement;
        removeTaskFromLocalStorage(taskItem.querySelector('label').textContent.trim());
        taskItem.remove();
    } else if (e.target.type === "checkbox") {
        toggleTaskCompletion(e.target);
    }
}

function toggleTaskCompletion(checkbox) {
    const taskItem = checkbox.parentElement;
    const taskText = taskItem.querySelector('label').textContent.trim();
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.forEach(task => {
        if (task.text === taskText) {
            task.completed = checkbox.checked;
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function storeTaskInLocalStorage(task) {
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(taskToDelete) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = tasks.filter(task => task.text !== taskToDelete);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''}>
            <label>${task.text}</label>
            <button class="delete-button">x</button>
        `;
        taskList.appendChild(li);
    });
}
