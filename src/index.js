import _ from "lodash";
import "./style.css";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
library.add(faEllipsisV);
library.add(faTrash);
dom.watch();

const toDoList = [
  {
    description: "i want to smoke",
    index: 4,
    completed: true,
  },
  {
    description: "i want to laugh",
    index: 3,
    completed: true,
  },
  {
    description: "i want to shit",
    index: 1,
    completed: true,
  },
  {
    description: "i want to fight",
    index: 2,
    completed: true,
  },
  {
    description: "i want to box",
    index: 0,
    completed: true,
  },
];

// Lodash, currently included via a script, is required for this line to work
const element = document.createElement("div");
document.body.appendChild(element);
element.classList.add("container");
const container = document.createElement("ul");
container.classList.add("list-cont");
element.appendChild(container);
let clear = document.createElement("button");
clear.classList.add("clr-todo");
clear.innerHTML = "clear all completed";
element.appendChild(clear);
const title = document.createElement("h1");
title.classList.add("header-title");
title.textContent = "todays to do";
element.appendChild(title);
const enterInput = document.createElement("input");
enterInput.classList.add("add-todo");
enterInput.placeholder = "Add to your list";
element.appendChild(enterInput);

window.addEventListener("DOMContentLoaded", () => {
  displayToDo();
});

let displayToDo = () => {
  for (let i = 0; i < toDoList.length; i++) {
    toDoList.map((item) => {
      if (item.index === i) {
        let myIndex = toDoList.indexOf(item);
        createToDo(myIndex);
      }
    });
  }
};

let createToDo = (index) => {
  const list = document.createElement("li");
  list.setAttribute("draggable", "true");
  list.classList.add("to-do");
  const toDoCont = document.createElement("div");
  toDoCont.classList.add("todo-cont");
  const checkBox = document.createElement("input");
  const btnDiv = document.createElement("div");
  const input = document.createElement("input");
  const to_do = document.createElement("p");
  checkBox.type = "checkbox";
  list.appendChild(checkBox);
  list.appendChild(toDoCont);
  btnDiv.classList.add("btn-cont");
  const icon = document.createElement("i");
  const icon2 = document.createElement("i");
  btnDiv.appendChild(icon);
  btnDiv.appendChild(icon2);
  icon.classList.add("fas", "fa-trash", "trash");
  icon2.classList.add("fas", "fa-ellipsis-v", "menu");
  list.appendChild(btnDiv);
  to_do.innerHTML = toDoList[index].description;
  toDoCont.appendChild(input);
  toDoCont.appendChild(to_do);
  list.appendChild(btnDiv);
  container.appendChild(list);
  checkBox.addEventListener("click", () => {
    console.log(checkBox.checked);
  });
};
