import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
    gap: 7,

    maxWidth: 350 // 3 attachments max
  },
  attachmentSingular: {
    width: 150,
    height: 150,
    objectFit: "cover"
  },
  attachmentMultiple: {
    width: 100,
    height: 75,
    objectFit: "cover"
  },
  attachmentSender: {
    borderRadius: "10px 10px 0 10px"
  },
  attachmentOther: {
    borderRadius: "0 10px 10px 10px"
  },
  hasText: {
    paddingTop: 10,
    paddingBottom: 10
  }
}));

const Attachments = ({ attachments, isSender, hasText }) => {
  const classes = useStyles();

  if (attachments.length > 1) {
    return (
      <Grid className={`${classes.root} ${hasText ? classes.hasText : ""}`}>
        {attachments.map((attachment, index) => (
          <img
            key={index}
            src={attachment}
            alt="preview"
            className={`${classes.attachmentMultiple} ${
              isSender ? classes.attachmentSender : classes.attachmentOther
            }`}
          />
        ))}
      </Grid>
    );
  }
  return (
    <Grid className={`${classes.root}`}>
      {attachments.map((attachment, index) => (
        <img
          key={index}
          src={attachment}
          alt="preview"
          className={`${classes.attachmentSingular} ${
            isSender ? classes.attachmentSender : classes.attachmentOther
          }`}
        />
      ))}
    </Grid>
  );
};

export default Attachments;
