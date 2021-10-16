import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import { CssBaseline } from "@mui/material";

import Store from "./components/store/Store";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMasterContext } from "./MasterContext";
import MarkDown from "./components/markdowm/MarkDown";

function App() {
  const { darkMode } = useMasterContext();
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
    <>
      <ThemeProvider theme={darkMode ? themeDark : themeLight}>
        <CssBaseline />
        <Router>
          <Nav />

          <Route exact path="/">
            <Store />
          </Route>

          <Route path="/markdown">
            <MarkDown />
          </Route>
        </Router>
      </ThemeProvider>
    </>
  );
}
export default App;
