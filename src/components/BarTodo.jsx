import React from "react";
import { useDispatch } from "react-redux";
import { addTarea } from "../redux/actions/tareaAction";

const BarTodo = (e) => {
  const dispatch = useDispatch();
  const generateId = () => Math.random().toString(36).substr(2, 18);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("You must have pressed Enter ");
      dispatch(
        addTarea({
          id: generateId(),
          name: e.target.value,
          isCompleted: false,
        })
      );
      e.target.value = "";
    }
  };
  return (
    <div>
      <input type="textfield" onKeyPress={handleKeyPress} />
    </div>
  );
};

export default BarTodo;
