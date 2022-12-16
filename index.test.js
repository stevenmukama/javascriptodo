document.body.innerHTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>To Do List In JavaScript</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"
    />
    <link rel="stylesheet" href="../src/style.css" />
  </head>
  <body>
    <div class="container">
      <header>
        <div class="new-todo">
          <form id="todoform">
            <input
              type="text"
              name="newtodo"
              id="newtodo"
              placeholder="Type here and press Enter ..."
            />
          </form>
          <button type="button" class="deletebutton" id="removeitem">
            Clear all completed
          </button>
        </div>
      </header>
      <div id="todos-list"></div>
      <div class="notification"></div>
    </div>
    <script src="/dist/awesome.js"></script>
    <script src="/src/index.js" type="module" defer></script>
  </body>
</html>
`;
const {
  saveTodo, deleteTodo, editTodo, clearAllTodos, clearCompleted, getTodos,
} = require('./utils.js');

const todoInput = document.getElementById('newtodo');

describe('Add Task Test ', () => {
  test('Add task', () => {
    todoInput.value = 'Task 1';
    const nt = saveTodo();
    expect(nt).toHaveLength(1);
  });
  test('Add task 2', () => {
    todoInput.value = 'Task 2';
    const nt = saveTodo();
    expect(nt).toHaveLength(2);
  });
});

describe('remove Task Test ', () => {
  test('remove task', () => {
    const newTodosDelete = deleteTodo(0);
    expect(newTodosDelete).toHaveLength(1);
  });
  test('remove task', () => {
    const newTodosDelete = deleteTodo(0);
    expect(newTodosDelete).toHaveLength(0);
  });
});

describe('edit task', () => {
  test('should return edit task', () => {
    todoInput.value = 'Task 1';
    const nt = saveTodo();
    const newNt = editTodo(nt[0].id, 'task edited');
    expect(newNt[0].value).toBe('task edited');
  });

  test('should return edit task', () => {
    todoInput.value = 'Task 1';
    const nt = saveTodo();
    const value = 'edit the task';
    const newNt = editTodo(nt[0].id, value);

    expect(newNt[0].value).toMatch(value);
  });

  test('should return edit task', () => {
    todoInput.value = 'Task 1';
    const nt = saveTodo();
    const value = 'edit the task';
    const newNt = editTodo(nt[0].id, value);

    // expect(newNt[0].value).toMatch(value);
    expect(newNt[0].value).toEqual(value);
  });
});

describe('Check Update of completed task', () => {
  test('Check if completed update', () => {
    clearAllTodos();

    todoInput.value = 'Task 1';
    saveTodo();
    todoInput.value = 'Task 2';
    saveTodo();

    document.getElementById('icons-0').click();
    expect(getTodos()[0].completed).toBe(true);
    expect(getTodos()[1].completed).toBe(false);
  });
});

describe('Test clear all completed task', () => {
  test('Test clear all checked task', () => {
    clearAllTodos();

    todoInput.value = 'Task n1';
    saveTodo();
    todoInput.value = 'Task n2';
    saveTodo();

    document.getElementById('icons-0').click();
    // console.log('Test§§§§§§§§§§, ', document.getElementById('icons-0'))
    const newTodos = clearCompleted();
    expect(newTodos).toHaveLength(1);
  });

  test('Test clear All checked task again', () => {
    document.getElementById('icons-0').click();
    const newTodos = clearCompleted();
    expect(newTodos).toHaveLength(0);
  });
});