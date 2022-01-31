import React from "react";
import { InputAdornment, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  adornmentLink: {
    fontWeight: 600
  }
}));

const ForgotLink = () => {
  const classes = useStyles();

  return (
    <InputAdornment position="end">
      <Link className={classes.adornmentLink} href="/" fontWeight={600}>
        Forgot?
      </Link>
    </InputAdornment>
  );
};

export default ForgotLink;
