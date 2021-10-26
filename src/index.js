import './style.css';
import { taskCompleted, localstorage, displayAlert } from './list.js';

let toDoList = [
  {
    description: 'i want to be great',
    index: 3,
    completed: false,
  },
  {
    description: 'i want to laugh',
    index: 5,
    completed: false,
  },
  {
    description: 'i want to have fun',
    index: 1,
    completed: false,
  },
  {
    description: 'i want to run',
    index: 4,
    completed: false,
  },
  {
    description: 'i want to box',
    index: 2,
    completed: false,
  },
];

const main = document.querySelector('.main');

const element = document.createElement('div');
element.classList.add('container');
main.appendChild(element);

const container = document.createElement('ul');
container.classList.add('list-cont');
element.appendChild(container);

const clear = document.createElement('button');
clear.classList.add('clr-todo');
clear.innerHTML = 'clear all completed';
element.appendChild(clear);

const inputDiv = document.createElement('div');
inputDiv.classList.add('inputdiv');
element.appendChild(inputDiv);

const titleDiv = document.createElement('div');
titleDiv.classList.add('title-cont');
element.appendChild(titleDiv);

const title = document.createElement('h1');
title.classList.add('header-title');
title.textContent = 'todays to do';
titleDiv.appendChild(title);

const sync = document.createElement('i');
sync.classList.add('fa', 'fa-sync-alt', 'sync');
titleDiv.appendChild(sync);

const enterInput = document.createElement('input');
enterInput.classList.add('add-todo');
enterInput.placeholder = 'Add to your list ...';
inputDiv.appendChild(enterInput);

const enterIcon = document.createElement('i');
enterIcon.classList.add('fa', 'fa-sign-in-alt', 'enter');
inputDiv.appendChild(enterIcon);

const createToDo = (doList, index) => {
  const list = document.createElement('li');
  list.setAttribute('draggable', 'true');
  list.classList.add('to-do');
  container.appendChild(list);

  const checkBox = document.createElement('input');
  checkBox.classList.add('check');
  checkBox.checked = doList[index].completed;
  checkBox.type = 'checkbox';
  list.appendChild(checkBox);

  checkBox.addEventListener('change', (e) => {
    taskCompleted(toDoList, index, e);
    localstorage(toDoList);
  });

  const btnDiv = document.createElement('div');
  btnDiv.classList.add('btn-cont');
  list.appendChild(btnDiv);

  const input = document.createElement('input');
  input.classList.add('task');
  input.readOnly = true;
  input.value = doList[index].description;
  list.appendChild(input);

  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-trash', 'trash');
  btnDiv.appendChild(icon);

  const icon2 = document.createElement('i');
  icon2.classList.add('fas', 'fa-ellipsis-v', 'menu');
  btnDiv.appendChild(icon2);
};

const displayToDo = (list) => {
  for (let i = 1; i <= list.length + 5; i += 1) {
    list.forEach((item) => {
      if (item.index === i) {
        const myIndex = list.indexOf(item);
        createToDo(list, myIndex);
      }
    });
  }
};

window.addEventListener('DOMContentLoaded', () => {
  if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    toDoList = JSON.parse(localStorage.getItem('completedtask'));
    displayToDo(toDoList);
    if (container.children.length === 0) {
      displayAlert('all tasks have been completed', 'success');
      clear.classList.add('hide-btn');
    }
  } else {
    displayToDo(toDoList);
    localstorage(toDoList);
  }
});
