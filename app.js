// Define UI Variables
const taskInput = document.getElementById('task');
const taskForm = document.getElementById('task-form');
const clearTasks = document.querySelector('.clear-tasks');
const taskList = document.querySelector('.collection');
const filterTasks = document.getElementById('filter');

taskForm.addEventListener('submit', e => {
  if (taskInput.value === '') {
    alert('Please enter a Task');
  } else {
    // Create li Element
    const li = document.createElement('li');
    // Assign class
    li.classList.add('collection-item');
    // Add Text to li
    li.innerText = taskInput.value;
    // Create New Link to Delete
    const link = document.createElement('a');
    // Add Class
    link.classList.add = 'delete-item secondary-content';
    // Add icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append to ul
    taskList.appendChild(li);
    // Clear New Task Text
    taskInput.value = '';
  }

  // Prevents the Form Submit From Redirecting
  e.preventDefault();
});
