import { localstorage } from './list.js';

const addTask = (list, description, completed, index) => {
  const toDo = { description, completed, index };
  list.push(toDo);
  return list;
};

const editToDo = (list, input, e) => {
  if (e.target.classList.contains('task')) {
    input.readOnly = false;
    const task = input.value;
    input.addEventListener('change', () => {
      list.forEach((item) => {
        if (item.description === task) {
          if (input.value === '') {
            item.description = task;
          } else {
            item.description = input.value;
          }
        }
      });
      window.location.reload();
      localstorage(list);
    });
  }
};

const reArrangeIndex = (list) => {
  list.forEach((item, index) => {
    item.index = index + 1;
  });
};

const deleteToDo = (list, desc) => {
  list = list.filter((item) => item.description !== desc);
  reArrangeIndex(list);
  localstorage(list);
  window.location.reload();
  return list;
};

const clearCompleted = (list) => {
  list = list.filter((item) => item.completed === false);
  reArrangeIndex(list);
  localstorage(list);
  window.location.reload();
};

export {
  addTask, editToDo, deleteToDo, clearCompleted,
};
