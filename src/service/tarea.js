const getTodoList = () => {
  return localStorage.getItem("todoList")
    ? JSON.parse(localStorage.getItem("todoList"))
    : [];
};
const add = (todo) => {
  const todoList = getTodoList();
  todoList.push(todo);
  localStorage.setItem("todoList", JSON.stringify(todoList));
};
const updateTarea = (todo) => {
  const list = getTodoList();
  const todoList = list.filter((tarea) => tarea.id !== todo.id);
  todoList.push(todo);
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

const pendingTarea = () => {
  const todoList = getTodoList().filter((todo) => todo.isCompleted === false);
  return todoList;
};

const completedTareas = () => {
  const todoList = getTodoList().filter((todo) => todo.isCompleted === true);
  return todoList;
};

const clearTareasCompleted = () => {
  localStorage.setItem("todoList", JSON.stringify(pendingTarea()));
};
const Tarea = {
  add,
  getTodoList,
  updateTarea,
  pendingTarea,
  completedTareas,
  clearTareasCompleted,
};
export default Tarea;
