import React from "react";
import BarTodo from "../components/BarTodo";
import TodoList from "../components/TodoList";

const Todo = () => {
  return (
    <div className="container todo-container">
      <div>
        <div>
          <h1>TODO</h1>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <BarTodo />
      <TodoList />
    </div>
  );
};

export default Todo;
