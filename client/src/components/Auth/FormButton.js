import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "1rem",
    color: "white",
    backgroundColor: theme.palette.primary.main,
    padding: "1rem 4rem",
    borderRadius: "3px",
    alignSelf: "center",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark
    }
  }
}));

const FormButton = ({ onClick, children }) => {
  const classes = useStyles();

  return (
    <Button onClick={onClick} className={classes.root}>
      {children}
    </Button>
  );
};

export default FormButton;
