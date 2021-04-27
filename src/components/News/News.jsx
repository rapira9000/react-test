import React from "react";
import Classes from "./News.module.css";
import moment from 'moment';
import PostContainer from "../MyPosts/Post/PostContainer";

const News = (props) => {
    const posts = props.posts.map(item => {
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
            likePost={props.likePost}
            toggleLikeFetching={props.toggleLikeFetching}
        />
    });

    return (
        <div className={Classes.News}>
            {props.posts}
        </div>
    );
};


export default News;