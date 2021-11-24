import './style.css';
import {
  taskCompleted, localstorage, displayAlert,
} from './list.js';
import {
  addTask, editToDo, deleteToDo, clearCompleted,
} from './add_list.js';

let toDoList = [];

const main = document.querySelector('.main');

const element = document.createElement('div');
element.classList.add('container', 'd-flex', 'f-col');
main.appendChild(element);

const clear = document.createElement('button');
clear.classList.add('clr-todo', 't-transform', 'd-flex', 'a-center', 'j-center', 'bor-none', 'outl-none');
clear.innerHTML = 'clear all completed';
element.appendChild(clear);

const container = document.createElement('ul');
container.classList.add('list-cont', 'd-flex', 'f-col');
element.appendChild(container);

const createToDo = (doList, index) => {
  const list = document.createElement('li');
  list.setAttribute('draggable', 'true');
  list.classList.add('to-do', 'd-flex', 'a-center');
  container.appendChild(list);

  const checkBox = document.createElement('input');
  checkBox.classList.add('check');
  checkBox.checked = doList[index].completed;
  checkBox.type = 'checkbox';
  list.appendChild(checkBox);

  const btnDiv = document.createElement('div');
  btnDiv.classList.add('btn-cont', 'd-flex');
  list.appendChild(btnDiv);

  checkBox.addEventListener('change', (e) => {
    taskCompleted(toDoList, index, e);
    localstorage(toDoList);
    btnDiv.classList.remove('show-trash');
  });

  const input = document.createElement('input');
  input.classList.add('task', 'd-flex', 't-transform', 'bor-none', 'outl-none');
  input.readOnly = true;
  input.value = doList[index].description;
  list.appendChild(input);

  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-trash', 'trash');
  btnDiv.appendChild(icon);

  const icon2 = document.createElement('i');
  icon2.classList.add('fas', 'fa-ellipsis-v', 'menu');
  btnDiv.appendChild(icon2);

  list.addEventListener('click', (e) => {
    btnDiv.classList.add('show-trash');
    editToDo(toDoList, input, e, icon);
  });

  icon.addEventListener('click', (e) => {
    deleteToDo(toDoList, e);
  });

  clear.addEventListener('click', () => {
    clearCompleted(toDoList);
  });
};

const inputDiv = document.createElement('div');
inputDiv.classList.add('inputdiv', 'd-flex', 'a-center');
element.appendChild(inputDiv);

const titleDiv = document.createElement('div');
titleDiv.classList.add('title-cont', 'd-flex', 'a-center');
element.appendChild(titleDiv);

const title = document.createElement('h1');
title.classList.add('header-title', 'd-flex', 't-transform');
title.textContent = 'todays to do';
titleDiv.appendChild(title);

const sync = document.createElement('i');
sync.classList.add('fa', 'fa-sync-alt', 'sync');
titleDiv.appendChild(sync);

const enterInput = document.createElement('input');
enterInput.classList.add('add-todo', 'bor-none', 'outl-none');
enterInput.placeholder = 'Add to your list ...';
inputDiv.appendChild(enterInput);

enterInput.addEventListener('change', () => {
  const index = toDoList.length;
  toDoList.push(addTask(enterInput.value, false, index + 1));
  createToDo(toDoList, index);
  localstorage(toDoList);
  displayAlert('Your task has been added', 'success', 3000);
  enterInput.value = '';
});

const displayToDo = (list) => {
  for (let i = 0; i <= list.length; i += 1) {
    list.forEach((item, index) => {
      if (item.index === i) {
        createToDo(list, index);
      }
    });
  }
};

const enterIcon = document.createElement('i');
enterIcon.classList.add('fa', 'fa-sign-in-alt', 'enter', 'd-flex');
inputDiv.appendChild(enterIcon);

window.addEventListener('DOMContentLoaded', () => {
  if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    toDoList = localStorage.getItem('toDo')
      ? JSON.parse(localStorage.getItem('toDo'))
      : [];
    displayToDo(toDoList);
    const tasks = document.querySelectorAll('.task');
    toDoList.forEach((item) => {
      if (item.completed === true) {
        const b = item.description;
        tasks.forEach((task) => {
          if (task.value === b) {
            task.classList.add('strike');
          }
        });
      }
    });
  } else {
    displayToDo(toDoList);
    localstorage(toDoList);
  }
});
