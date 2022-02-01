import React from "react";
import bgImg from "../../assets/bg-img.png";
import { Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import bubble from "../../assets/bubble.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100%",
    flex: 1,
    maxWidth: "700px",
    minWidth: "425px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },

  contentContainer: {
    position: "absolute",
    textAlign: "center",
    padding: "0px clamp(40px, 3vw + 40px, 80px)",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "40px"
  },
  content: {
    color: "white",
    fontSize: "clamp(1.5rem, 2vw + 1rem, 1.875rem)",
    lineHeight: "154%"
  },
  icon: {
    width: "clamp(70px, 1vw + 70px, 25%)"
  },
  spacer: {
    height: "100px"
  },

  backgroundContainer: {
    isolation: "isolate",
    position: "relative",
    height: "100%"
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
    width: "100%",
    zIndex: 100,
    objectFit: "cover",
    objectPosition: "center top"
  }
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} component={"aside"}>
      <Grid item className={classes.backgroundContainer} xs={12}>
        <Box className={classes.background} />
        <img src={bgImg} alt="" className={classes.backgroundImg} />
      </Grid>
      <Grid
        item
        position={"absolute"}
        className={classes.contentContainer}
        component={"section"}
        xs={12}
      >
        <img src={bubble} className={classes.icon} alt="icon" />
        <Typography variant="h2" className={classes.content}>
          Converse with anyone with any language
        </Typography>
        <Box className={classes.spacer} />
      </Grid>
    </Grid>
  );
};

export default Sidebar;
