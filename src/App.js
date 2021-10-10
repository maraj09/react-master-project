import React, { useState } from "react";
import Nav from "./components/nav/Nav";
import { CssBaseline } from "@mui/material";
import Store from "./components/store/Store";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MasterContext from './MasterContext';

function App() {
  const [darkMode, setdarkMode] = useState(false);
  const toggleDarkMode = () => {
    setdarkMode(!darkMode);
  };
  const themeLight = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#F5F5F5",
      },
    },
  });
  const themeDark = createTheme({
    palette: {
      mode: "dark",
    },
  });
  
  return (
    <MasterContext.Provider value={{ toggleDarkMode, darkMode  }}>
      <ThemeProvider theme={darkMode ? themeDark : themeLight}>
        <CssBaseline />
        <Nav />
        <Store />
      </ThemeProvider>
    </MasterContext.Provider>
  );
}
export default App;
