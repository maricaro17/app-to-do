import { Types } from "../type";
const initialState = [];

const tareasReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.add:
    case Types.completed:
    case Types.getList:
    case Types.pending:
    case Types.clear:
      return action.payload;
    default:
      return state;
  }
};

export { tareasReducer };
