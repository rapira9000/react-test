import React from "react";
import Classes from "./Profile.module.css";
import CreateNewPostContainer from "../CreateNewPost/CreateNewPostContainer";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import ProfilePostsContainer from "../ProfilePosts/ProfilePostsContainer";

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
                <ProfilePostsContainer />
            </div>
        </div>
    );
};

export default Profile;