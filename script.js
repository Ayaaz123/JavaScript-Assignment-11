let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (task !== "") {
        tasks.push(task);
        displayTasks();
        taskInput.value = '';
    }
}

function removeLastTask() {
    tasks.pop();
    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${task}`;
        taskList.appendChild(li);
    });
}
