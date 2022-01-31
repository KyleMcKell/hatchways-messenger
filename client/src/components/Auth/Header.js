import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    padding: "30px 42px",
    gap: "30px"
  },
  question: {
    fontSize: "1rem",
    color: theme.palette.secondary.main
  },
  button: {
    fontSize: "1rem",
    color: theme.palette.primary.main,
    padding: "16px 52px",
    boxShadow: "0px 2px 12px hsla(215, 34%, 44%, 0.2)",
    borderRadius: "5px"
  }
}));

const Header = ({ question, children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h3" className={classes.question}>
        {question}
      </Typography>
      {children}
    </Box>
  );
};

export default Header;
