import ItemsContainer from "../ItemsContainer/ItemsContainer";
import {DialogsAPI} from "../../api/api";
import React, {useEffect} from "react";
import {postsSelector} from "../../selectors/posts";
import connect from "react-redux/es/connect/connect";
import {followingInProgress, userFollowHandler, usersResetPage, userUnFollowHandler} from "../../redux/usersReducer";
import Users from "../Users/Users";
import {chatsAddNewChat} from "../../redux/chatsReducer";
import ChatsWrapper from "../ChatsWrapper/ChatsWrapper";
import {usersOnlineStatusSelector} from "../../selectors/users";

const keyStoreData = "usersPage";

const DialogContainer = (props) => {
    useEffect(() => {
        props.usersResetPage();
    },[]);

    const items = props.items.map(item => {
        item.isOnline = props.usersOnline.includes(item._id);
        return <Users
            {...item}
            key={item._id}
            followingInProgressUsersIds={props.followingInProgressUsersIds}
            userUnFollowHandler={props.userUnFollowHandler}
            userFollowHandler={props.userFollowHandler}
            chatHandler={props.chatsAddNewChat}
            onlineStatusShow={true}
            messActive={true}
        />
    });
    return <>
        <ItemsContainer
            items={items}
            apiFn={DialogsAPI.getFollowedUsers}
            getByKeyStore={keyStoreData}
            containerClass={"users__wrapper users__wrapper--dialogs"}
        />
        <ChatsWrapper />
    </>;
};

const mapStateToProps = state => ({
    items: postsSelector(state, keyStoreData),
    followingInProgressUsersIds: state.usersPage.followingInProgressUsersIds,
    usersOnline: usersOnlineStatusSelector(state)
});

export default connect(mapStateToProps, {
    userFollowHandler,
    userUnFollowHandler,
    followingInProgress,
    usersResetPage,
    chatsAddNewChat
})(React.memo(DialogContainer));