import {
  addTask, deleteToDo, editToDo, clearCompleted,
} from './add_list.js';
import { taskCompleted } from './list.js';

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

  class LocalStorageMock {
    constructor() {
      this.store = {};
    }

    clear() {
      this.store= {};
      return this.store;
    }

    getItem(key) {
      if (this.store[key] === null) {
        return [];
      }
      return this.store[key];
    }

    setItem(key, value) {
      this.store[key] = value;
      return this.store[key];
    }

    removeItem(key) {
      delete this.store[key];
    }
  }

  const localStorage = new LocalStorageMock();

  test('add task to to-do List', () => {
    addTask(taskList, 'samuel', true, 0);
    addTask(taskList, 'tope', false, 1);
    addTask(taskList, 'ife', false, 2);
    addTask(taskList, 'umbere', false, 3);
    addTask(taskList, 'tookoke', false, 4);
    addTask(taskList, 'irwrga', true, 5);
    expect(mockDom(taskList)).toHaveLength(6);
  });

  test('remove from to-do List', () => {
    taskList = deleteToDo(taskList, 'tope');
    taskList = deleteToDo(taskList, 'ife');
    expect(mockDom(taskList)).toHaveLength(4);
  });

  test('local storage', () => {
    localStorage.clear();
    localStorage.setItem('taskList', taskList);
    expect(localStorage.getItem('taskList')).toHaveLength(4);
  });

  test('edit to do', () => {
    taskList = editToDo(taskList, 'samuel', 'redmond');
    localStorage.setItem('taskList', taskList);
    expect(taskList).toContainEqual({
      description: 'redmond',
      completed: true,
      index: 1,
    });
    expect(taskList).not.toContainEqual({
      description: 'samuel',
      completed: false,
      index: 1,
    });
    expect(localStorage.getItem('taskList')).toContainEqual({
      description: 'redmond',
      completed: true,
      index: 1,
    });
    expect(localStorage.getItem('taskList')).not.toContainEqual({
      description: 'samuel',
      completed: false,
      index: 1,
    });
  });

  test('update task status', () => {
    taskList = taskCompleted(taskList);
    expect(localStorage.getItem('taskList')).toContainEqual({
      description: 'redmond',
      completed: true,
      index: 1,
    });
  });

  test('clear all completed', () => {
    taskList = mockDomChecked(taskList);
    const list = clearCompleted(taskList);
    expect(list).toHaveLength(taskList.length);
    localStorage.setItem('taskList', taskList);
    expect(localStorage.getItem('taskList')).toHaveLength(2);
    expect(localStorage.getItem('taskList')).not.toContainEqual({
      description: 'irwgra',
      completed: true,
      index: 6,
    });
  });
});
