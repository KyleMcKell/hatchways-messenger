import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    fontWeight: 600,
    fontSize: "clamp(1.875rem, 2vw + 1rem, 2.4rem)"
  }
}));

const Form = ({ children }) => {
  const classes = useStyles();

  return (
    <Typography variant="h1" className={classes.root}>
      {children}
    </Typography>
  );
};

export default Form;
