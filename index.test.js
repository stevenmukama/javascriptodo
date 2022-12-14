const { saveTodo } = require('./utils.js');

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

const form = document.getElementById('todoform');
const todoInput = document.getElementById('newtodo');
const todosListEl = document.getElementById('todos-list');
const notificationEl = document.querySelector('.notification');
// deleteselecteditems
const deleteButton = document.getElementById('removeitem');

describe('Add Task Test ', () => {
  test('Add task', () => {
    document.getElementById('newtodo');
    // expect().
  });
});
