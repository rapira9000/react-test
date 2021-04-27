import React from "react";
import UnreadMess from "./UnreadMess";
import {connect} from "react-redux";
import {getUnreadMessCount, isUnreadMessByUserId} from "../../selectors/mess";

const UnreadMessContainer = (props) => {
    return <UnreadMess {...props} />
};

const mapStateToProps = (state, props) => {
    return {
        unreadMesses: getUnreadMessCount(state),
        isUnreadMess: isUnreadMessByUserId(state, props.userId)
    }
};

export default connect(mapStateToProps, {})(UnreadMessContainer);