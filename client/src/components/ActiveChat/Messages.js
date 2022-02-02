import React from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId } = props;

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");
        console.log(message);

        return message.senderId === userId ? (
          <SenderBubble
            key={message.id}
            text={message.text}
            attachments={message.attachments}
            time={time}
          />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            attachments={message.attachments}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
