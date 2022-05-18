import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { tareasReducer } from "./reducers/tareaReducer";

const reducers = combineReducers({
    tareas: tareasReducer
});

const store = configureStore({
  reducer: reducers,
});
export default store;
