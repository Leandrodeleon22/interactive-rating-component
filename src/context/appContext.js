import React, { useReducer, useContext } from "react";
import reducer from "./reducers";

import { CHANGE_PAGE } from "./actions";

const initialState = {
  numOfPages: 5,
  page: 1,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changePage = (page) => {
    dispatch({ type: CHANGE_PAGE, payload: { page } });
  };

  return (
    <AppContext.Provider value={{ ...state, changePage }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
