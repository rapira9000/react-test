import React from "react";
import Classes from "./MessageElements.module.css";

const MessageElements = (props) => {
    return (
      <div className={'2'}>
          {props.messageText}
      </div>
    );
};

export default MessageElements;