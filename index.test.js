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
  todos, saveTodo, deleteTodo, editTodo,
} = require('./utils.js');

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

// edit
// describe('edit Task Test ', () => {
//   test('edit task', () => {
//     todoInput.value = 'Task 1';
//     saveTodo();
//     // Edit the first task
//     editTodo(0, 'Edited task');
//     expect(todos[0].value).toEqual('Edited task');
//   });
// });
// describe('edit Task Test ', () => {
//   test('edit task', () => {
//     todoInput.value = 'Task 1';
//     saveTodo();

//     // Edit the first task
//     editTodo(0, 'Edited task');

//     // Check that the task has been updated
//     expect(todos[0].value).toEqual('Edited task');
//   });
// });

// describe('Add Task Test ', () => {
//   test('Add task', () => {
//     todoInput.value = 'Task 1';
//     saveTodo();
//     // expect(todos).toHaveLength(1);

// describe('edit Task Test ', () => {
//   test('edit task', () => {
//     todoInput.value = 'Task 1';
//     saveTodo();

//     // Spy on the editTodo function
//     jest.spyOn(window, 'editTodo');

//     //

//     // Edit the first task
//     editTodo(0, 'Edited task');
//     // Check that the task has been updated
//     expect(todos[0].value).toEqual('Edited task');
//   });
// });
describe('edit Task Test ', () => {
  test('edit task', () => {
    const newInput = document.getElementById('newtodo');
    newInput.value = 'Task 1';
    // saveTodo();

    // Edit the first task
    editTodo(0, 'Edited task');

    // Check that the task has been updated
    expect(todos[0].value).toEqual('Edited task');

    // Check that the editTodo function is called with the correct arguments
    expect(editTodo).toHaveBeenCalledWith(0, 'Edited task');
  });
});
