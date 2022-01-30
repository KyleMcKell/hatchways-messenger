import React from "react";
import bgImg from "../../assets/bg-img.png";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import bubble from "../../assets/bubble.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100%",
    isolation: "isolate"
  },
  contentContainer: {
    position: "absolute",
    bottom: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    padding: "0px 80px",
    gap: "2.5rem"
  },
  content: {
    color: "white",
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: "1.625rem",
    lineHeight: "154%"
  },
  backgroundContainer: {
    isolation: "isolate",
    position: "relative",
    height: "100%",
    zIndex: -1
  },
  background: {
    background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.secondary} 100%)`,
    height: "100%",
    width: "100%",
    opacity: 0.85,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 200
  },
  backgroundImg: {
    height: "100%",
    zIndex: 100
  }
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box position={"absolute"} className={classes.contentContainer}>
        <Box classes={classes.iconContainer}>
          <img src={bubble} className="icon" alt="icon" />
        </Box>
        <Typography variant="h2" className={classes.content}>
          Converse with anyone with any language
        </Typography>
      </Box>
      <Box className={classes.backgroundContainer}>
        <Box className={classes.background} />
        <img src={bgImg} alt="" className={classes.backgroundImg} />
      </Box>
    </Box>
  );
};

export default Sidebar;
