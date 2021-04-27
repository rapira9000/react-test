import React from "react";
import {loadNewPostText, newPostTextChange} from "../../redux/profileReducer";
import CreateNewPost from "./CreateNewPost";
import {connect} from "react-redux";
import {compose} from "redux";
import {newPostTextSelector} from "../../selectors/profile";

let mapStateToProps = (state) => ({
    newPostText: newPostTextSelector(state)
});

export default compose(
    connect(mapStateToProps, {
        newPostTextChange,
        loadNewPostText
    })
)(CreateNewPost);