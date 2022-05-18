import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { activeTareas, clearTareas, completarTareas, getTodoList } from "../redux/actions/tareaAction";

const TodoAction = ({items}) => {
    const todoListIncompleted = items.filter((item)=> item.isCompleted === false)
    const dispatch = useDispatch()
  return (
    <div className="d-flex justify-content-between bg-light">
      <div>
        {todoListIncompleted.length} items
      </div>
      <div>
        <Button className="action-btn" onClick={()=>dispatch(getTodoList())}>All</Button>
        <Button className="action-btn" onClick={()=>dispatch(activeTareas())}>Active</Button>
        <Button className="action-btn" onClick={()=>dispatch(completarTareas())}>Completed</Button>
      </div>
      <div>
        <Button className="action-btn" onClick={()=>dispatch(clearTareas())}>Clear Completed</Button>
      </div>
    </div>
  );
};

export default TodoAction;
