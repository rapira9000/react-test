import React from "react";
import Post from "./Post/Post";
import Preloader from "../Preloader/Preloader";
import moment from "moment";

const MyPosts = (props) => {
    const postsElements = props.posts.map(item =>
        <Post
            key={item._id}
            postId={item._id}
            message={item.content}
            likesCount={item.likes}
            dateCreated={moment(item.dateCreated).format("MM.DD.YYYY h:mm A")}
            userName={item.user.userName}
            userNickName={item.user.userNickName}
            isDisableLike={item.isDisableLike}
            isLikeFetching={item.isLikeFetching}
            likePost={props.likePost}
            toggleLikeFetching={props.toggleLikeFetching}
        />);
    const btnLoadMore = (props.btnPostsLoading)
        ? <Preloader/>
        : <button onClick={props.loadProfileUserPosts}>Load more</button>;
    return (
        <>
            <div className={"e"}>
                {
                    !props.userPostsLoading
                        ? <Preloader/>
                        : postsElements
                }
            </div>
            {props.currentPage < props.maxPages ? btnLoadMore : ''}
        </>
    );
};

export default MyPosts;