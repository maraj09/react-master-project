import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import LightModeIcon from "@mui/icons-material/LightMode";
import { orange } from "@mui/material/colors";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import React from "react";
import { useMasterContext } from "../../MasterContext";

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
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <LocalGroceryStoreIcon color="warning" />
                </ListItemIcon>
                <ListItemText primary="Store" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <BurstModeIcon color="warning" />
                </ListItemIcon>
                <ListItemText primary="Gallery" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <BorderColorIcon color="warning" />
                </ListItemIcon>
                <ListItemText primary="MarkDown" />
              </ListItemButton>
            </ListItem>
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
