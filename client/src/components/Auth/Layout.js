import { Grid, Box, Typography } from "@material-ui/core";
import React from "react";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <Box
      container
      display={"flex"}
      flexDirection={"row-reverse"}
      sx={{ height: "100%" }}
    >
      <Box flex={"auto"}>
        <div className="main-header">
          <div className="main-header-text"></div>
          <div className="routing-button"></div>
        </div>
        <div className="main-content">
          <Typography variant="h1">Heading</Typography>
          <div className="main-content-form">
            <div className="form-field">
              <div className="label"></div>
              <div className="input"></div>
            </div>
            <div className="form-button"></div>
          </div>
        </div>
      </Box>

      <Sidebar />
    </Box>
  );
};

export default Layout;
