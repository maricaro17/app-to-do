import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoList } from "../redux/actions/tareaAction";
import TodoAction from "./TodoAction";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((store) => store.tareas);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      dispatch(getTodoList());
    }
    return () => {
      setLoading(false);
    };
  }, [loading, dispatch]);
  return (
    <div className="container todo-list">
      {todoList.map((todo, index) => (
        <TodoItem key={index} tarea={todo} />
      ))}
      <TodoAction items={todoList}/>
    </div>
  );
};

export default TodoList;
