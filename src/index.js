import 'lodash';
import todoList from './modules/index.js';

const todoTask = document.querySelector('.tasks-list');

todoList.forEach((item) => {
  todoTask.innerHTML += ` <div class = "todo-list" id = ${item.index} complete = ${item.completed}>
      <div class = "checkbox-description-container">
           <input type='checkbox'>
          <p>${item.description}</p>
      </div> 
        <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
       <div class="divider"></div>`;
});
