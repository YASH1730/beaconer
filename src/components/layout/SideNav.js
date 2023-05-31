import { Box, Typography } from "@mui/material";
import React from "react";
import '../../assets/css/sideNav.css'

const SideNav = () => {
  return (
    <>
      <Box className="sidenav-wrapper">
        <Box className="sidenav-container flex">
          <Box className="sidenav-list">
            <Typography id="side-nav-text"  variant="button">File Upload</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SideNav;
