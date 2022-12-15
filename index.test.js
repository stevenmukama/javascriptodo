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
const { todos, saveTodo, deleteTodo } = require('./utils.js');

const todoInput = document.getElementById('newtodo');

describe('Add Task Test ', () => {
  test('Add task', () => {
    todoInput.value = 'Task 1';
    saveTodo();
    expect(todos).toHaveLength(1);
  });
  test('Add task 2', () => {
    todoInput.value = 'Task 2';
    saveTodo();
    expect(todos).toHaveLength(2);
  });
  test('Add task 3', () => {
    expect(todos.length).toEqual(2);
  });
});

describe('remove Task Test ', () => {
  test('remove task', () => {
    const newTodos = deleteTodo(0);
    expect(newTodos).toHaveLength(1);
  });
  test('remove task', () => {
    const newTodos = deleteTodo(0);
    expect(newTodos).toHaveLength(0);
  });
});
