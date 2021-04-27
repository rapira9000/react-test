import React, {useState} from "react";
import Classes from "./Post.module.css";
import likeIcon from "../../../img/like-active.svg";
import Preloader from "../../Preloader/Preloader";

const Post = (props) => {
    const likeOnClickHandler = () => {
        props.likePost(props.postId);
        props.toggleLikeFetching(props.postId);
    };

    const buttonLikeClasses = Classes.post__likeIconWrapper + (props.isDisableLike ? " " + Classes.disableLike : "");

    const postUser = props.userNickName ? <div className={Classes.postHeader_user}>
        <span className={Classes.postHeader_userNickName}>{props.userNickName}</span>
        <sup className={Classes.postHeader_userName}>[{props.userName}]</sup>
    </div> : "";
    return (
        <div className={Classes.postWrapper}>
            <div className={Classes.postHeader}>
                {postUser}
                <div className={Classes.postDateCreated}>at: {props.dateCreated}</div>
            </div>
            <div className={Classes.post}>{props.message}</div>
            <div className={Classes.likes}>
                Likes
                <button onClick={likeOnClickHandler} disabled={props.isLikeFetching} className={buttonLikeClasses}>
                        <img className={Classes.post__likeIcon} alt="#" title="#" src={likeIcon}/>
                </button>
                { props.isLikeFetching
                    ? <Preloader/>
                    : <span className={Classes.likesCount}>{props.likesCount}</span>
                }
            </div>
        </div>
    );
};

export default Post;