import ItemsContainer from "../ItemsContainer/ItemsContainer";
import {UsersAPI} from "../../api/api";
import React, {useEffect} from "react";
import {postsSelector} from "../../selectors/posts";
import connect from "react-redux/es/connect/connect";
import {followingInProgress, userFollowHandler, usersResetPage, userUnFollowHandler} from "../../redux/usersReducer";
import Users from "./Users";
import {chatsAddNewChat} from "../../redux/chatsReducer";

const keyStoreData = "usersPage";

const UsersContainer = (props) => {
    useEffect(() => {
        props.usersResetPage();
    },[]);

    const items = props.items.map(item => {
        return <Users
            {...item}
            key={item._id}
            followingInProgressUsersIds={props.followingInProgressUsersIds}
            userUnFollowHandler={props.userUnFollowHandler}
            userFollowHandler={props.userFollowHandler}
            chatHandler={props.chatsAddNewChat}
        />
    });

    return <ItemsContainer
        items={items}
        apiFn={UsersAPI.getUsers}
        getByKeyStore={keyStoreData}
        containerClass={"users__wrapper"}

    />;
};

const mapStateToProps = state => ({
    items: postsSelector(state, keyStoreData),
    followingInProgressUsersIds: state.usersPage.followingInProgressUsersIds,
});

export default connect(mapStateToProps, {
    userFollowHandler,
    userUnFollowHandler,
    followingInProgress,
    usersResetPage,
    chatsAddNewChat
})(React.memo(UsersContainer));