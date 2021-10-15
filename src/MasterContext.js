import { useMediaQuery, useTheme } from "@mui/material";
import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //For check Responsiveness
  const theme = useTheme();
  const below_md = useMediaQuery(theme.breakpoints.down("md"));

  const [darkMode, setdarkMode] = useState(true);
  const [ drawerToggle, setDrawerToggle] = useState(false);

  const toggleDrawer = (state) => {
    setDrawerToggle(state);
  };

  const toggleDarkMode = () => {
    setdarkMode(!darkMode);
  };
  return <AppContext.Provider value={{ below_md, darkMode, toggleDarkMode, drawerToggle, toggleDrawer }}>{children}</AppContext.Provider>;
};
export const useMasterContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
