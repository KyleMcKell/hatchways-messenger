import React from "react";
import { FormLabel as MUIFormLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: "1rem"
  }
}));

const FormLabel = ({ children, ...delegated }) => {
  const classes = useStyles();

  return (
    <MUIFormLabel required={false} className={classes.root} {...delegated}>
      {children}
    </MUIFormLabel>
  );
};

export default FormLabel;
