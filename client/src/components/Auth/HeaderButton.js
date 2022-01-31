import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "1rem",
    color: theme.palette.primary.main,
    padding: "1rem 2.5rem",
    boxShadow: "0px 2px 12px hsla(215, 34%, 44%, 0.2)",
    borderRadius: "5px",
    minWidth: "140px",
    whiteSpace: "nowrap"
  }
}));

const HeaderButton = ({ onClick, children }) => {
  const classes = useStyles();

  return (
    <Button onClick={onClick} className={classes.root}>
      {children}
    </Button>
  );
};

export default HeaderButton;
