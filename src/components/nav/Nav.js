import {
  AppBar,
  Button,
  Container,
  IconButton,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import LightModeIcon from "@mui/icons-material/LightMode";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import LeftDrawer from "./LeftDrawer";

import React from "react";
import { useMasterContext } from "../../MasterContext";
import { Link } from "react-router-dom";
import { navLinks } from "../../data";

const Nav = () => {
  const { below_md, darkMode, toggleDarkMode, toggleDrawer } =
    useMasterContext();
  return (
    <div>
      <AppBar
        position="static"
        sx={{ background: darkMode ? `#2F2F2F` : `#f5f5f5` }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant={below_md ? `h6` : `h5`}
              color={orange[700]}
              sx={{ letterSpacing: below_md ? `2px` : `5px` }}
            >
              React Master Projects
            </Typography>
            {!below_md && (
              <Box sx={{ ml: `auto` }}>
                {navLinks.map((navLink) => {
                  return (
                    <Button
                      key={navLink.id}
                      to={navLink.link}
                      component={Link}
                      color="warning"
                    >
                      {navLink.name}
                    </Button>
                  );
                })}
                <IconButton disabled={true} sx={{ ml: 5 }}>
                  {darkMode ? <Brightness4Icon  color="warning" />  : <LightModeIcon color="warning" />}
                </IconButton>
                <Switch
                  color="warning"
                  checked={darkMode}
                  onChange={() => toggleDarkMode()}
                />
              </Box>
            )}
            {below_md && (
              <IconButton
                sx={{ ml: `auto` }}
                onClick={() => toggleDrawer(true)}
              >
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
