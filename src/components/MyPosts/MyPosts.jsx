import React from "react";
import Post from "./Post/Post";
import Preloader from "../Preloader/Preloader";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post key={p._id} message={p.content} likesCount={p.likes}/>);
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