const alert = document.querySelector('.alert');

const taskCompleted = (list, index, e) => {
  list[index].completed = e.currentTarget.checked;
  const inner = e.currentTarget.nextSibling.nextSibling;
  const parent = e.currentTarget.parentElement;
  if (e.currentTarget.checked === true) {
    inner.classList.add('strike');
    parent.classList.add('remove-edit');
    displayAlert('great job! task completed', 'success');
  } else {
    inner.classList.remove('strike');
    parent.classList.remove('remove-edit');
  }
};

const addToLocalStorage = (list) => {
  const completed = list.filter((item) => item.completed === false);
  localStorage.setItem('completedtask', JSON.stringify(completed));
};

const displayAlert = (message, action) => {
  alert.innerHTML = message;
  alert.classList.add(`alert-${action}`);
  setTimeout(() => {
    alert.innerHTML = '';
    alert.classList.remove(`alert-${action}`);
  }, 3000);
};

export { taskCompleted, addToLocalStorage as localstorage, displayAlert };
