import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";

import LightModeIcon from "@mui/icons-material/LightMode";
import { orange } from "@mui/material/colors";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import React from "react";
import { useMasterContext } from "../../MasterContext";
import { navLinks } from "../../data";
import { Link } from "react-router-dom";

const LeftDrawer = () => {
  const { darkMode, toggleDarkMode, drawerToggle, toggleDrawer } = useMasterContext();

  return (
    <div>
      <Drawer open={drawerToggle} onClose={() => toggleDrawer(false)}>
        <Box sx={{ width: "100%", minWidth: `300px`, display: `flex`, flexDirection: `column` }}>
          <IconButton sx={{ ml: `auto` }} onClick={() => toggleDrawer(false)}>
            <MenuOpenIcon color="error" fontSize="large" />
          </IconButton>
          <Typography variant="h4" color={orange[700]} sx={{ textAlign: `center`, my: 5 }}>
            Projects
          </Typography>
          <List sx={{ color: orange[700] }}>
            {navLinks.map((navLink) => {
              return (
                <ListItem key={navLink.id}>
                  <Link to={navLink.link} style={{ textDecoration: `none`, color: `inherit`, width: `100%` }}>
                    <ListItemButton>
                      <ListItemIcon>{navLink.icon}</ListItemIcon>
                      <ListItemText primary={navLink.name} />
                    </ListItemButton>
                  </Link>
                </ListItem>
              );
            })}
            <Divider />
            <ListItem sx={{ pl: 4, mt: 2 }}>
              <ListItemIcon>
                <LightModeIcon color="warning" />
              </ListItemIcon>
              <Switch color="warning" checked={darkMode} onChange={() => toggleDarkMode()} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default LeftDrawer;
