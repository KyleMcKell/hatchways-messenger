import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 4
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    width: "clamp(300px, 40vw + 10rem, 450px)",
    gap: "3rem"
  }
}));

const Form = ({ onSubmit, children }) => {
  const classes = useStyles();

  return (
    <form onSubmit={onSubmit} className={classes.root}>
      <Box className={classes.formContainer}>{children}</Box>
    </form>
  );
};

export default Form;
