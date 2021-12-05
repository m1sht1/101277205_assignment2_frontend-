import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const TopBar = () => {
  return (
    <AppBar position="static" style={{backgroundColor:"blue"}}>
      <Toolbar>
        <Typography variant="h6" component="div" >
          Employee Management 
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default TopBar;
