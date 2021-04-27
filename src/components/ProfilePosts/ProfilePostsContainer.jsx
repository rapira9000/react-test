import React from "react";
import {postsSelector} from "../../selectors/posts";
import connect from "react-redux/es/connect/connect";
import {postsLikePost, postsToggleLikeFetching} from "../../redux/postsReducer";
import PostContainer from "../MyPosts/Post/PostContainer";
import moment from "moment";
import ItemsContainer from "../ItemsContainer/ItemsContainer";
import {ProfileApi} from "../../api/api";

const ProfilePostsContainer = (props) => {
    const items = props.items.map(item => {
        return <PostContainer
            key={item._id}
            postId={item._id}
            message={item.content}
            likesCount={item.likes}
            dateCreated={moment(item.dateCreated).format("MM.DD.YYYY h:mm A")}
            userName={item.user.userName}
            userNickName={item.user.userNickName}
            isDisableLike={item.isDisableLike}
            isLikeFetching={item.isLikeFetching}
            likePost={props.postsLikePost}
            toggleLikeFetching={props.postsToggleLikeFetching}
        />
    });
    return <ItemsContainer
        items={items}
        apiFn={ProfileApi.getProfilePosts}
        containerClass={"posts__wrapper"}
    />;
};

const mapStateToProps = state => ({
    items: postsSelector(state)
});

export default connect(mapStateToProps, {
    postsToggleLikeFetching,
    postsLikePost,
})(React.memo(ProfilePostsContainer));