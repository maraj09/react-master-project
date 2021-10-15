import React from "react";
import Nav from "./components/nav/Nav";
import { Container, CssBaseline } from "@mui/material";

import Store from "./components/store/Store";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMasterContext } from "./MasterContext";

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
        <Nav />
        <Container maxWidth="lg">
          <Store />
        </Container>
      </ThemeProvider>
    </>
  );
}
export default App;
