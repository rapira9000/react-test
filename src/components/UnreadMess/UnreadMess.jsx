import React from "react";
import "./UnreadMess.css";

const UnreadMess = (props) => {
    if (!props.unreadMesses) {
        return "";
    }

    if  (props?.type && props.type === 'inUser' && props.isUnreadMess) {
        return "new mess";
    } else if (props?.type && props.type === 'inUser' && !props.isUnreadMes) {
        return "";
    }

    return (
        <div className={"unread-mess"}>
            <span className={"unread-mess__count"}>{props.unreadMesses}</span>
        </div>
    );
};

export default UnreadMess;