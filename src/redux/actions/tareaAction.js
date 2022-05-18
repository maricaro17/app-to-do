import Tarea from "../../service/tarea";
import { Types } from "../type";

const addTarea = (todo) => {
  return (dispatch) => {
    Tarea.add(todo);
    dispatch({
      type: Types.add,
      payload: Tarea.getTodoList(),
    });
  };
};

const completedTarea = (todo) => {
  return (dispatch) => {
    Tarea.updateTarea(todo);
    dispatch({
      type: Types.completed,
      payload: Tarea.getTodoList(),
    });
  };
};

const getTodoList = () => {
  return (dispatch) => {
    dispatch({
      type: Types.getList,
      payload: Tarea.getTodoList(),
    });
  };
};

const activeTareas = () => {
  return (dispatch) => {
    dispatch({
      type: Types.pending,
      payload: Tarea.pendingTarea(),
    });
  };
};

const completarTareas = () => {
  return (dispatch) => {
    dispatch({
      type: Types.completed,
      payload: Tarea.completedTareas(),
    });
  };
};

const clearTareas = () => {
  return (dispatch) => {
    Tarea.clearTareasCompleted()
    dispatch({
      type: Types.clear,
      payload: Tarea.getTodoList(),
    });
  };
};

export {
  addTarea,
  completedTarea,
  getTodoList,
  activeTareas,
  completarTareas,
  clearTareas,
};
