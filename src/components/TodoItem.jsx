import React from "react";
import { useDispatch } from "react-redux";
import { completedTarea } from "../redux/actions/tareaAction";
import Check from "./Check";

const TodoItem = ({ tarea }) => {
  const dispatch = useDispatch();
  const handleCompleted = () => {
    dispatch(
      completedTarea({
        id: tarea.id,
        name: tarea.name,
        isCompleted: !tarea.isCompleted,
      })
    );
  };
  return (
    <div className="d-flex">
      <div>
        <Check isChecked={tarea.isCompleted} click={handleCompleted} />
      </div>
      <div className="ml-10">
        <p>{tarea.name}</p>
      </div>
    </div>
  );
};
export default TodoItem;
