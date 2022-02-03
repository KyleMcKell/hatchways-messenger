import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
    gap: "10px",
    padding: 10,

    maxWidth: 350 // 3 attachments max
  },
  attachment: {
    width: 100,
    height: 100,
    objectFit: "cover"
  },
  attachmentSender: {
    borderRadius: "10px 10px 0 10px"
  },
  attachmentOther: {
    borderRadius: "0 10px 10px 10px"
  }
}));

const Attachments = ({ attachments, isSender }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      {attachments.map((attachment, index) => (
        <img
          key={index}
          src={attachment}
          alt="preview"
          className={`${classes.attachment} ${
            isSender ? classes.attachmentSender : classes.attachmentOther
          }`}
        />
      ))}
    </Grid>
  );
};

export default Attachments;
