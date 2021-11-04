import { addTask, deleteToDo, clearCompleted } from './add_list.js';

describe('test CRUD function', () => {
  let taskList = [];
  function mockDom(tlist) {
    document.body.innerHTML = '<div><ul class= \'cont\'></ul></div>';
    const listCont = document.querySelector('.cont');
    let theList = tlist.map((item) => `<li>${item.description}</li>`);
    theList = theList.join('');
    listCont.innerHTML = theList;
    const list = document.querySelectorAll('.cont li');
    return list;
  }
  function mockDomChecked(tlist) {
    document.body.innerHTML = '<div><ul class= \'cont\'> </ul></div>';
    const listCont = document.querySelector('.cont');
    let theList = tlist.map((item) => `<li>
    ${item.description}
    <input class="check"  ${item.completed ? 'checked' : ''} type="checkbox">
    </li>`);
    theList = theList.join('');
    listCont.innerHTML = theList;
    const arr = [];
    const checkBox = document.querySelectorAll('.cont .check');
    checkBox.forEach((el) => {
      if (!el.checked) {
        arr.push({ completed: el.checked });
      }
    });
    return arr;
  }

  test('add task to to-do List', () => {
    addTask(taskList, 'samuel', false, 0);
    addTask(taskList, 'tope', false, 1);
    addTask(taskList, 'ife', false, 2);
    addTask(taskList, 'umbere', false, 3);
    addTask(taskList, 'tookoke', false, 4);
    addTask(taskList, 'irwrga', false, 5);
    expect(mockDom(taskList)).toHaveLength(6);
  });

  test('remove from to-do List', () => {
    taskList = deleteToDo(taskList, 'samuel');
    console.log(deleteToDo(taskList, 'sam'));
    taskList = deleteToDo(taskList, 'tope');
    taskList = deleteToDo(taskList, 'ife');
    expect(mockDom(taskList)).toHaveLength(3);
  });

  test('clear all completed', () => {
    addTask(taskList, 'samuel', true, 0);
    addTask(taskList, 'tope', true, 1);
    addTask(taskList, 'ife', false, 2);
    addTask(taskList, 'umbere', true, 3);
    addTask(taskList, 'tookoke', true, 4);
    addTask(taskList, 'irwrga', false, 5);
    const listCheck = mockDomChecked(taskList);
    const list = clearCompleted(taskList);
    expect(list).toHaveLength(listCheck.length);
  });
});
