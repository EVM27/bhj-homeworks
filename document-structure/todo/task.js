
const taskForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');

function createTask(taskText) {

    const task = document.createElement('div');
    task.classList.add('task');
 
    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task__title');
    taskTitle.textContent = taskText;

    const taskRemove = document.createElement('a');
    taskRemove.classList.add('task__remove');
    taskRemove.href = '#';
    taskRemove.innerHTML = '&times;';
   
    taskRemove.addEventListener('click', (event) => {
        event.preventDefault(); 
        task.remove(); 
    });
   
    task.appendChild(taskTitle);
    task.appendChild(taskRemove);
    taskList.appendChild(task);
}

taskForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    
    const taskText = taskInput.value.trim(); 
    if (taskText !== '') {
        createTask(taskText); 
        taskInput.value = ''; 
    }
});
