import React from "react";
import Classes from "./Profile.module.css";
import CreateNewPostContainer from "../CreateNewPost/CreateNewPostContainer";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={Classes.profile}>
            <div className={Classes.profileInfo}>
                <ProfileInfo userProfile={props.userProfile} />
            </div>
            <div className={Classes.profile__post_form}>
                <CreateNewPostContainer />
            </div>
            <div className={'s'}>
                <MyPostsContainer />
            </div>
        </div>
    );
};

export default Profile;