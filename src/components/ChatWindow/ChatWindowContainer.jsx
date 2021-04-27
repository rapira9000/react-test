import React from "react";
import ChatWindow from "./ChatWindow";
import {connect} from "react-redux";
import {authInstanceWebSocketEmitSelector} from "../../selectors/auth";

const ChatWindowContainer = (props) => {
    return <ChatWindow
        {...props}
    />;
};

const mapStateToProps = (state) => ({
    webSocketEmit: authInstanceWebSocketEmitSelector(state),
});

export default connect(mapStateToProps, {
})(ChatWindowContainer);