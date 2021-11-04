import { localstorage } from './list.js';

const addTask = (list, description, completed, index) => {
  const toDo = { description, completed, index };
  list.push(toDo);
  return list;
};

const editToDo = (list, formerTask, newTask) => {
  list.forEach((item) => {
    if (item.description === formerTask) {
      if (newTask === '') {
        item.description = formerTask;
      } else {
        item.description = newTask;
      }
    }
  });
  window.location.reload();
  localstorage(list);
  return list;
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
  return list;
};

export { 
  addTask, editToDo, deleteToDo, clearCompleted,
};
