import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
