import React from "react";
import Classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={Classes.postWrapper}>
            <div className={Classes.post}>{props.message}</div>
            <div className={Classes.likes}>{props.likesCount}</div>
        </div>
    );
};

export default Post;