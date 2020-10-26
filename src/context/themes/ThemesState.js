import React,{useReducer} from "react";
import ThemesContext from "./ThemesContext";
import ThemesReducer from "./ThemesReducer";

import { TOGGLE_THEMES, themes } from "../types";

const ThemesState = (props) => {
  const initialState = {
    theme: themes.light,
  };
  const [state, dispatch] = useReducer(ThemesReducer, initialState);

  const toggle_theames = () =>
    dispatch({
      type: TOGGLE_THEMES,
      payload: state.theme == themes.light ? themes.dark : themes.light,
    });
  return (
    <ThemesContext.Provider
      value={{
        theme: state.theme,
        toggle_theames,
      }}
    >
      {props.children}
    </ThemesContext.Provider>
  );
};

export default ThemesState;