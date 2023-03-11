import { CHANGE_PAGE } from "./actions";
import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === CHANGE_PAGE) {
    return { ...state, page: action.payload.page };
  }
};

export default reducer;
