import { Box } from "@material-ui/core";
import React from "react";
import { Sidebar } from "./index";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "row-reverse"
  },
  content: {
    flex: "auto"
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <Box container className={classes.root}>
      <Box className={classes.content}>{children}</Box>
      <Sidebar />
    </Box>
  );
};

export default Layout;
