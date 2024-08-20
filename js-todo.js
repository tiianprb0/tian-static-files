
document.addEventListener('DOMContentLoaded', loadTasks);

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const historyButton = document.getElementById('historyButton');
const historyPopup = document.getElementById('historyPopup');
const historyList = document.getElementById('historyList');
const clearHistoryButton = document.getElementById('clearHistoryButton');
const closeHistoryButton = document.getElementById('closeHistoryButton');
const deletePopup = document.getElementById('deletePopup');
const confirmDeleteButton = document.getElementById('confirmDeleteButton');
const cancelDeleteButton = document.getElementById('cancelDeleteButton');
const priorityDropdown = document.getElementById('priorityDropdown');

let taskToDelete = null;

addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskClick);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
historyButton.addEventListener('click', showHistory);
clearHistoryButton.addEventListener('click', clearHistory);
closeHistoryButton.addEventListener('click', closeHistory);
confirmDeleteButton.addEventListener('click', deleteTask);
cancelDeleteButton.addEventListener('click', () => deletePopup.style.display = 'none');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const priority = priorityDropdown.value;
    let priorityLabel = '';
    let priorityClass = '';
    switch (priority) {
        case 'high':
            priorityLabel = 'High';
            priorityClass = 'high-priority-label';
            break;
        case 'medium':
            priorityLabel = 'Medium';
            priorityClass = 'medium-priority-label';
            break;
        case 'low':
            priorityLabel = 'Low';
            priorityClass = 'low-priority-label';
            break;
    }

    const li = document.createElement('li');
    li.className = "draggable";
    li.draggable = true;
    li.innerHTML = `
        <input type="checkbox">
        <label>${taskText}</label>
        <div class="priority ${priorityClass}">${priorityLabel}</div>
        <button class="delete-button">x</button>
    `;
    
    taskList.appendChild(li);
    storeTaskInLocalStorage({ text: taskText, priority: priority, completed: false });

    taskInput.value = '';
    addDragAndDropHandlers(li);
}

function handleTaskClick(e) {
    if (e.target.classList.contains('delete-button')) {
        taskToDelete = e.target.parentElement;
        deletePopup.style.display = 'block';
    } else if (e.target.type === "checkbox") {
        const taskItem = e.target.parentElement;
        moveTaskToHistory(taskItem);
        taskItem.remove();
    }
}

function deleteTask() {
    if (taskToDelete) {
        removeTaskFromLocalStorage(taskToDelete.querySelector('label').textContent.trim());
        taskToDelete.remove();
        taskToDelete = null;
    }
    deletePopup.style.display = 'none';
}

function moveTaskToHistory(taskItem) {
    const taskText = taskItem.querySelector('label').textContent.trim();
    let history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [];
    history.push(taskText);
    localStorage.setItem('history', JSON.stringify(history));
    removeTaskFromLocalStorage(taskText);
}

function showHistory() {
    historyList.innerHTML = '';
    const history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [];
    history.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        li.style.borderBottom = "1px solid #ccc";  // Tambahkan garis pemisah
        historyList.appendChild(li);
    });
    historyPopup.style.display = 'block';
}

function clearHistory() {
    localStorage.removeItem('history');
    historyList.innerHTML = '';
}

function closeHistory() {
    historyPopup.style.display = 'none';
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
        let priorityLabel = '';
        let priorityClass = '';
        switch (task.priority) {
            case 'high':
                priorityLabel = 'High';
                priorityClass = 'high-priority-label';
                break;
            case 'medium':
                priorityLabel = 'Medium';
                priorityClass = 'medium-priority-label';
                break;
            case 'low':
                priorityLabel = 'Low';
                priorityClass = 'low-priority-label';
                break;
        }
        li.className = "draggable";
        li.draggable = true;
        li.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''}>
            <label>${task.text}</label>
            <div class="priority ${priorityClass}">${priorityLabel}</div>
            <button class="delete-button">x</button>
        `;
        taskList.appendChild(li);
        addDragAndDropHandlers(li);
    });
}

function addDragAndDropHandlers(li) {
    li.addEventListener('dragstart', handleDragStart);
    li.addEventListener('dragover', handleDragOver);
    li.addEventListener('drop', handleDrop);
    li.addEventListener('dragend', handleDragEnd);
}

function handleDragStart(e) {
    e.target.style.opacity = '0.4';
    e.dataTransfer.setData('text/plain', e.target.dataset.index);
    e.dataTransfer.effectAllowed = 'move';
    e.target.classList.add('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    const draggingElement = document.querySelector('.dragging');
    const currentElement = e.target.closest('li');
    
    if (currentElement && draggingElement !== currentElement) {
        const bounding = currentElement.getBoundingClientRect();
        const offset = e.clientY - bounding.top;
        
        if (offset > bounding.height / 2) {
            currentElement.style['border-top'] = '';
            currentElement.style['border-bottom'] = '2px solid #ccc';
        } else {
            currentElement.style['border-top'] = '2px solid #ccc';
            currentElement.style['border-bottom'] = '';
        }
    }
}

function handleDrop(e) {
    e.preventDefault();
    const draggingElement = document.querySelector('.dragging');
    const currentElement = e.target.closest('li');
    
    if (currentElement && draggingElement !== currentElement) {
        const bounding = currentElement.getBoundingClientRect();
        const offset = e.clientY - bounding.top;
        
        if (offset > bounding.height / 2) {
            currentElement.style['border-bottom'] = '';
            currentElement.parentNode.insertBefore(draggingElement, currentElement.nextSibling);
        } else {
            currentElement.style['border-top'] = '';
            currentElement.parentNode.insertBefore(draggingElement, currentElement);
        }
    }

    storeTasksOrder();
}

function handleDragEnd(e) {
    e.target.style.opacity = '1';
    e.target.classList.remove('dragging');
    
    const listItems = document.querySelectorAll('#taskList li');
    listItems.forEach(item => {
        item.style['border-top'] = '';
        item.style['border-bottom'] = '';
    });
}

function storeTasksOrder() {
    const taskElements = document.querySelectorAll('#taskList li');
    const tasks = [];
    taskElements.forEach(taskElement => {
        const text = taskElement.querySelector('label').textContent.trim();
        const priorityClass = taskElement.querySelector('.priority').classList;
        let priority = '';
        if (priorityClass.contains('high-priority-label')) priority = 'high';
        else if (priorityClass.contains('medium-priority-label')) priority = 'medium';
        else if (priorityClass.contains('low-priority-label')) priority = 'low';
        tasks.push({ text, priority, completed: false });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

