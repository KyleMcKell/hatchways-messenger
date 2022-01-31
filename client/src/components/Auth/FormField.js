import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    fontWeight: 600,
    "&:last-of-type": {
      marginBottom: "1.5rem"
    }
  }
}));

const FormField = ({ name, children, ...delegated }) => {
  const classes = useStyles();

  return (
    <FormControl required className={classes.root}>
      {children}
    </FormControl>
  );
};

export default FormField;
