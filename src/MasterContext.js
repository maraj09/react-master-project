import { useMediaQuery, useTheme } from "@mui/material";
import React, { useContext, useState, useReducer, useEffect } from "react";
import { reducer } from "./reducer";

const AppContext = React.createContext();

const initialState = {
  productList: [],
  totalPrice: 0,
};

const AppProvider = ({ children }) => {
  //For check Responsiveness
  const theme = useTheme();
  const below_md = useMediaQuery(theme.breakpoints.down("md"));

  const [darkMode, setdarkMode] = useState(true);
  const [drawerToggle, setDrawerToggle] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "TOTAL_PRICE" });
  }, [state.productList]);

  const toggleDrawer = (state) => {
    setDrawerToggle(state);
  };

  const toggleDarkMode = () => {
    setdarkMode(!darkMode);
  };
  return <AppContext.Provider value={{ below_md, darkMode, toggleDarkMode, drawerToggle, toggleDrawer, ...state, dispatch }}>{children}</AppContext.Provider>;
};
export const useMasterContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
