import React, { useState } from "react";
import Nav from "./components/nav/Nav";
import { Container, CssBaseline, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import Store from "./components/store/Store";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MasterContext from "./MasterContext";

function App() {
  const theme = useTheme();
  const below_md = useMediaQuery(theme.breakpoints.down("md"));
  const [darkMode, setdarkMode] = useState(true);
  
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
    <MasterContext.Provider value={{ toggleDarkMode, darkMode, below_md }}>
      <ThemeProvider theme={darkMode ? themeDark : themeLight}>
        <CssBaseline />
        <Nav />
        <Container maxWidth="lg">
          <Store />
        </Container>
      </ThemeProvider>
    </MasterContext.Provider>
  );
}
export default App;
