// Define UI Variables
const taskInput = document.getElementById('task');
const taskForm = document.getElementById('task-form');
const clearTasks = document.querySelector('.clear-tasks');
const taskList = document.querySelector('.collection');
const filterTasks = document.getElementById('filter');

// Add New Task
taskForm.addEventListener('submit', e => {
  if (taskInput.value === '') {
    alert('Please enter a Task');
  } else {
    // Create New Task Element
    const li = document.createElement('li');
    li.classList.add('collection-item');
    li.innerText = taskInput.value;
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);

    // Clear Input After Adding Task
    taskInput.value = '';
  }

  // Prevents the Form Submit From Redirecting
  e.preventDefault();
});

// Delete Particular Single Task
taskList.addEventListener('click', function(e) {
  const li = e.target.parentElement.parentElement;

  if (li.className == 'collection-item') {
    if (confirm('Are you sure you want to delete this task?')) {
      li.remove();
    }
  }
});

// Clear All Tasks
clearTasks.addEventListener('click', e => {
  // If You Move This Line Outside, This code Does Not Work
  // This is because on the event, it is redefining the variable
  const tasks = document.querySelectorAll('.collection-item');
  tasks.forEach(li => li.remove());
});

// Filter Through Tasks
filterTasks.addEventListener('keyup', e => {
  const filterWord = filterTasks.value;
  const tasks = document.querySelectorAll('.collection-item');

  tasks.forEach(task => console.log(task.innerText));
});
