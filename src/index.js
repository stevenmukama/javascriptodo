import 'lodash';

// SELECT ELEMENTS
const form = document.getElementById('todoform');
const todoInput = document.getElementById('newtodo');
const todosListEl = document.getElementById('todos-list');
const notificationEl = document.querySelector('.notification');
// deleteselecteditems
const deleteButton = document.getElementById('removeitem');

// VARS
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let EditTodoId = -1;

// RENDER TODOS
function renderTodos() {
  if (todos.length === 0) {
    todosListEl.innerHTML = '<center>Add tasks here and Press Enter !</center>';
    return;
  }

  // CLEAR ELEMENT BEFORE A RE-RENDER
  todosListEl.innerHTML = '';

  // RENDER TODOS
  todos.forEach((todo, index) => {
    todosListEl.innerHTML += `
    <div class="todo" id=${index}>
      <i 
        class="bi ${todo.completed ? 'bi-check-circle-fill' : 'bi-circle'}"
        style="color : ${todo.color}"
        data-action="check"
      ></i>
      <p class="${todo.completed ? 'completed' : ''}"  onclick="this.classList.toggle('selected')" data-action="check" >${todo.value}</p>
      <i class="bi bi-pencil-square" data-action="edit"></i>
      <i class="bi bi-trash" data-action="delete"></i>
    </div>
    `;
  });
}

// CHECK A TODO
function checkTodo(todoId) {
  todos = todos.map((todo, index) => ({
    ...todo,
    completed: index === todoId ? !todo.completed : todo.completed,
  }));

  renderTodos();
  localStorage.setItem('todos', JSON.stringify(todos));
}

// EDIT A TODO
function editTodo(todoId) {
  todoInput.value = todos[todoId].value;
  EditTodoId = todoId;
}

// DELETE TODO
function deleteTodo(todoId) {
  todos = todos.filter((todo, index) => index !== todoId);
  EditTodoId = -1;

  // re-render
  renderTodos();
  localStorage.setItem('todos', JSON.stringify(todos));
}

if (deleteButton) {
  deleteButton.addEventListener('click', () => {
    todos = todos.filter((todo) => !todo.completed);
    renderTodos();
    localStorage.setItem('todos', JSON.stringify(todos));
  });
}

// CLICK EVENT LISTENER FOR ALL THE TODOS
todosListEl.addEventListener('click', (event) => {
  const { target } = event;
  const parentElement = target.parentNode;

  if (parentElement.className !== 'todo') return;

  // t o d o id
  const todo = parentElement;
  const todoId = Number(todo.id);

  // target action
  const { action } = target.dataset;

  if (action === 'check') {
    checkTodo(todoId);
  } else if (action === 'edit') {
    editTodo(todoId);
  } else {
    deleteTodo(todoId);
  }
});
// SHOW A NOTIFICATION
function showNotification(msg) {
  // change the message
  notificationEl.innerHTML = msg;

  // notification enter
  notificationEl.classList.add('notif-enter');

  // notification leave
  setTimeout(() => {
    notificationEl.classList.remove('notif-enter');
  }, 2000);
}

// SAVE TODO
function saveTodo() {
  const todoValue = todoInput.value;

  // check if the todo is empty
  const isEmpty = todoValue === '';

  // check for duplicate todos
  const isDuplicate = todos.some((todo) => todo.value.toUpperCase() === todoValue.toUpperCase());

  if (isEmpty) {
    showNotification("Todo's input is empty");
  } else if (isDuplicate) {
    showNotification('Todo already exists!');
  } else {
    if (EditTodoId >= 0) {
      todos = todos.map((todo, index) => ({
        ...todo,
        value: index === EditTodoId ? todoValue : todo.value,
      }));
      EditTodoId = -1;
    } else {
      todos.push({
        value: todoValue,
        completed: false,
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      });
    }

    todoInput.value = '';
  }
}
// 1st render
renderTodos();

// FORM SUBMIT
form.addEventListener('submit', (event) => {
  event.preventDefault();

  saveTodo();
  renderTodos();
  localStorage.setItem('todos', JSON.stringify(todos));
});