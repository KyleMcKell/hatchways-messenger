import React, { useState } from "react";
import { FormControl, FilledInput, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20
  },
  previewGrid: {
    // width: "100%"
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
    gap: "10px",
    background: "#F4F6FA",
    padding: 10,
    borderRadius: 8
  },
  previewImg: {
    borderRadius: 8,
    width: 100,
    height: 100,
    objectFit: "cover"
  }
}));

const Input = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const { postMessage, otherUser, conversationId, user } = props;
  const [imageSrcs, setImageSrcs] = useState([]);
  // const [attachments, setAttachments] = useState([]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleFileChange = (fileChangeEvent) => {
    const files = fileChangeEvent.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = function (e) {
        setImageSrcs((previousSrcs) => [...previousSrcs, e.target.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: event.target.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user
      // attachments
    };
    await postMessage(reqBody);
    setText("");
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      {imageSrcs.length > 0 && (
        <Grid className={classes.previewGrid}>
          {imageSrcs.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="preview"
              className={classes.previewImg}
            />
          ))}
        </Grid>
      )}

      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleTextChange}
        />
      </FormControl>
      <FormControl>
        <input
          accept="image/*"
          type="file"
          name="file"
          id="file"
          onChange={handleFileChange}
          multiple
        />
      </FormControl>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => {
      dispatch(postMessage(message));
    }
  };
};

export default connect(null, mapDispatchToProps)(Input);
