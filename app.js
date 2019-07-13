// Define UI Variables
const taskInput = document.getElementById('task');
const taskForm = document.getElementById('task-form');
const clearTasks = document.querySelector('.clear-tasks');
const taskList = document.querySelector('.collection');
const filterTasks = document.getElementById('filter');

// Load Tasks From Local Storage
window.addEventListener('load', e => {
  let storedTasks = JSON.parse(localStorage.getItem('Tasks'));

  storedTasks.forEach(task => {
    const li = document.createElement('li');
    li.classList.add('collection-item');
    li.innerText = task;
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
  });
});

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

    // Add Task to Local Storage
    let storedTasks = localStorage.getItem('Tasks');

    if (storedTasks == null) {
      storedTasks = [];
      storedTasks.push(taskInput.value);
      localStorage.setItem('Tasks', JSON.stringify(storedTasks));
    } else {
      storedTasks = JSON.parse(storedTasks);
      storedTasks.push(taskInput.value);
      localStorage.setItem('Tasks', JSON.stringify(storedTasks));
    }

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
      // Remove From DOM
      li.remove();

      // Remove Task from Local Storage
      let storedTasks = JSON.parse(localStorage.getItem('Tasks'));
      storedTasks.splice(storedTasks.indexOf(li.innerText), 1);
      localStorage.setItem('Tasks', JSON.stringify(storedTasks));
    }
  }
});

// Clear All Tasks
clearTasks.addEventListener('click', e => {
  // If You Move This Line Outside, This code Does Not Work
  // This is because on the event, it is redefining the variable
  const tasks = document.querySelectorAll('.collection-item');
  tasks.forEach(li => li.remove());

  // You can also use because li's are Child Elements
  // taskList.innerHTML = '';

  // Remove All Tasks from Local Storage
  localStorage.removeItem('Tasks');
});

// Filter Through Tasks
filterTasks.addEventListener('keyup', e => {
  const filterWord = filterTasks.value.toLowerCase();

  const tasks = Array.from(document.querySelectorAll('.collection-item'));

  tasks.forEach(task => {
    if (!task.textContent.toLowerCase().includes(filterWord)) {
      task.style.display = 'none';
    } else {
      task.style.display = 'list-item';
    }
  });
});
