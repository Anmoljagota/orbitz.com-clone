import React from "react";
import Reducer from "../Reducer/Reducer";
export const Mycontext = React.createContext();
const initial = {
  IsLoading: false,
};
const Context = ({ children }) => {
  const [state, dispatch] = React.useReducer(Reducer, initial);
  return (
    <div>
      <Mycontext.Provider value={{state,dispatch}}>{children}</Mycontext.Provider>
    </div>
  );
};

export default Context;
