import { addTask, deleteToDo } from "./add_list.js";
import { addToDo } from "./index.js";

test('add task to add to-do', () => {
    expect(addTask(eat, false, 1)).toBe({description:'eat', completed:false, index:'1',})
})