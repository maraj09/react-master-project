import { AppBar, Button, Container, IconButton, Switch, Toolbar, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import LeftDrawer from "./LeftDrawer";

import React from "react";
import { useMasterContext } from "../../MasterContext";


const Nav = () => {

  const {below_md, darkMode, toggleDarkMode, toggleDrawer} = useMasterContext();
  

  return (
    <div>
      <AppBar position="static" color="transparent">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant={below_md ? `h6` : `h5`} color={orange[700]} sx={{ letterSpacing: below_md ? `2px` : `5px` }}>
              React Master Projects
            </Typography>
            {!below_md && (
              <Box sx={{ ml: `auto` }}>
                <Button href="" color="warning">
                  Store
                </Button>
                <Button href="" color="warning">
                  Gallery
                </Button>
                <Button href="" color="warning">
                  MarkDown
                </Button>
                <IconButton disabled={true} sx={{ ml: 5 }}>
                  <LightModeIcon color="warning" />
                </IconButton>
                <Switch color="warning" checked={darkMode} onChange={() => toggleDarkMode()} />
              </Box>
            )}
            {below_md && (
              <IconButton sx={{ ml: `auto` }} onClick={() => toggleDrawer(true)}>
                <MenuIcon fontSize="large" color="warning" />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <LeftDrawer />
    </div>
  );
};

export default Nav;
