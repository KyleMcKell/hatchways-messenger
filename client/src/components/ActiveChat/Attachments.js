import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
    gap: "10px",
    background: "#F4F6FA",
    padding: 10,
    borderRadius: 8,
    maxWidth: 350 // 3 attachments max
  },
  attachment: {
    borderRadius: 8,
    width: 100,
    height: 100,
    objectFit: "cover"
  }
}));

const Attachments = ({ attachments }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      {attachments.map((attachment, index) => (
        <img
          key={index}
          src={attachment}
          alt="preview"
          className={classes.attachment}
        />
      ))}
    </Grid>
  );
};

export default Attachments;
