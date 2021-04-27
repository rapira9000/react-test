import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {loadProfileUserPosts, profileIsLikeFetchingToggle} from "../../redux/profileReducer";
import {
    profileUserBtnPostsLoading,
    profileUserMaxPagePostsSelector,
    profileUserPagePostsSelector,
    profileUserPostsLoadingSelector,
    profileUserPostsSelector
} from "../../selectors/profile";

const MyPostsContainer = (props) => {
  return  <MyPosts {...props} />
};

const mapStateToProps = (state) => ({
    posts: profileUserPostsSelector(state),
    userPostsLoading: profileUserPostsLoadingSelector(state),
    maxPages: profileUserMaxPagePostsSelector(state),
    currentPage: profileUserPagePostsSelector(state),
    btnPostsLoading: profileUserBtnPostsLoading(state),
});

export default connect(mapStateToProps,
    {
    loadProfileUserPosts,
    profileIsLikeFetchingToggle,
    }
)(MyPostsContainer);