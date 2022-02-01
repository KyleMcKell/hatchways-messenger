import { Box } from "@material-ui/core";
import React from "react";
import { Sidebar } from "./index";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "row-reverse"
  },
  content: {
    flex: "auto",
    display: "flex",
    flexDirection: "column"
  },
  spacer: {
    flex: "1"
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        {children}
        <Box className={classes.spacer} />
      </Box>
      <Sidebar />
    </Box>
  );
};

export default Layout;
