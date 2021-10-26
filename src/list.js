const taskCompleted = (list, index, e) => {
  list[index].completed = e.currentTarget.checked;
  const inner = e.currentTarget.nextSibling.nextSibling;
  const parent = e.currentTarget.parentElement;
  if (e.currentTarget.checked === true) {
    inner.classList.add('strike');
    parent.classList.add('remove-edit');
  } else {
    inner.classList.remove('strike');
    parent.classList.remove('remove-edit');
  }
};

const addToLocalStorage = (list) => {
  const completed = list.filter((item) => item.completed === false);
  localStorage.setItem('completedtask', JSON.stringify(completed));
};

export { taskCompleted, addToLocalStorage as localstorage };
