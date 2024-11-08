document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const taskList = document.getElementById('task-list');

  const taskItem = document.createElement('li');
  taskItem.classList.add('task');
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

  taskList.appendChild(taskItem);

  taskItem.querySelector('.delete-btn').addEventListener('click', () => {
    taskItem.remove();
  });

  taskItem.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  taskInput.value = '';
}
