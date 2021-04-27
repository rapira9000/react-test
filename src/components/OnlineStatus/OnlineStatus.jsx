import React from "react";
import "./OnlineStatus.css";

const OnlineStatus = (props) => {
    if (!props.onlineStatusShow) {
        return "";
    }

    return (
        <div className={`userOnlineStatus userOnlineStatus__${props.onlineStatus}`}>{props.onlineStatus}</div>
    );
};

export default OnlineStatus;