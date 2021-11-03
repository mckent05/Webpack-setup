import { addTask, deleteToDo } from './add_list.js';

// describe('test CRUD function', () => {
//   const taskList = [];

//   test('add task to to-do List', () => {
//     expect(addTask(taskList, 'samuel', false, 0)).toHaveLength(1);
//     expect(addTask(taskList, 'tope', false, 1)).toHaveLength(2);
//     expect(addTask(taskList, 'tope', false, 2)).toHaveLength(3);
//   });
//   test('remove task from to-do', () => {
//     expect(deleteToDo(taskList, 'samuel')).toHaveLength(2);
//   });
// });

describe('test CRUD function', () => {
  let taskList = [];
  function mockDom(tlist) {
    document.body.innerHTML = `<div><ul class='cont'></ul></div>`;
    const listCont = document.querySelector('.cont');
    let theList = tlist.map((item) => `<li>${item.description}</li>`);
    theList = theList.join('');
    listCont.innerHTML = theList;
    const list = document.querySelectorAll('.cont li');
    return list;
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
    taskList = deleteToDo(taskList,'samuel');
    taskList = deleteToDo(taskList,'tope');
    taskList = deleteToDo(taskList,'ife');
    expect(mockDom(taskList)).toHaveLength(3);
  });

});
