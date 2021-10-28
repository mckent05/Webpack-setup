import { localstorage } from './list';

const addTask = (description, completed, index) => {
  const toDo = { description, completed, index };
  return toDo;
};

const editToDo = (list, input, e) => {
  const target = e.target;
  if (target.classList.contains('task')) {
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

const deleteToDo = (list, e) => {
  const desc = e.currentTarget.parentElement.nextSibling.value;
  list = list.filter((item) => item.description !== desc);
  reArrangeIndex(list);
  localstorage(list);
  window.location.reload();
  displayToDo(list);
};

const clearCompleted = (list) => {
  list = list.filter((item) => item.completed === false);
  reArrangeIndex(list);
  localstorage(list);
  window.location.reload();
  displayToDo();
};

export { addTask, editToDo, deleteToDo, clearCompleted };
