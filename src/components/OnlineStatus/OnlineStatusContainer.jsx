import React from "react";
import OnlineStatus from "./OnlineStatus";

const OnlineStatusContainer = (props) => {
    const onlineStatus = props.isOnline ? "online" : "offline";
    return <OnlineStatus
        onlineStatus={onlineStatus}
        onlineStatusShow={props.onlineStatusShow}
        />;
};

export default OnlineStatusContainer;