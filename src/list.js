const alert = document.querySelector('.alert');

const displayAlert = (message, action, time) => {
  alert.innerHTML = message;
  alert.classList.add(`alert-${action}`);
  setTimeout(() => {
    alert.innerHTML = '';
    alert.classList.remove(`alert-${action}`);
  }, time);
};

const addToLocalStorage = (list) => {
  localStorage.setItem('toDo', JSON.stringify(list));
};

const taskCompleted = (list) => {
  addToLocalStorage(list);
  return list;
};

export { taskCompleted, addToLocalStorage as localstorage, displayAlert };
