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
    <button class="delete-btn btn btn-sm">X</button>
  `;

  // Adding task with fade-in effect
  taskItem.classList.add('fade-in');
  taskList.appendChild(taskItem);

  // Delete task functionality with animation
  taskItem.querySelector('.delete-btn').addEventListener('click', () => {
    taskItem.style.opacity = '0';
    taskItem.style.transform = 'scale(0.9)';
    setTimeout(() => {
      taskItem.remove();
    }, 300);
  });

  // Mark task as completed
  taskItem.addEventListener('click', () => {
    taskItem.classList.toggle('task-completed');
  });

  // Clear input field after task is added
  taskInput.value = '';
}
