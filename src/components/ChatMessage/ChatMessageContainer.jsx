import React from "react";
import ChatMessage from "./ChatMessage";

const ChatMessageContainer = (props) => {
    return <ChatMessage
        userId
        {...props}
    />
};

return ChatMessageContainer;