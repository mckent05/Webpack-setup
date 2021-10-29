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

const taskCompleted = (list, index, e) => {
  list[index].completed = e.currentTarget.checked;
  const inner = e.currentTarget.nextSibling.nextSibling;
  const parent = e.currentTarget.parentElement;
  if (e.currentTarget.checked === true) {
    inner.classList.add('strike');
    parent.classList.add('remove-edit');
    displayAlert('great job! task completed', 'success', 3000);
  } else {
    inner.classList.remove('strike');
    parent.classList.remove('remove-edit');
  }
};

export { taskCompleted, addToLocalStorage as localstorage, displayAlert };
