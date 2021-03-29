import React from "react";
import Classes from "./Users.module.css";
import userAvatar from "../../img/avatar.jpg";
import {NavLink} from "react-router-dom";
import {generateFullImageUrl} from "../../utils/helpers";


const Users = (props) => {
    let usersElements = props.users.map((user) => {
        const userAvatarSrc = user.userAvatar ? generateFullImageUrl(user.userAvatar) : userAvatar;
        return (
            <div key={user._id} className={Classes.container}>
                <div className={Classes.imageAvatar}>
                    <NavLink to={`/profile/${user._id}`}>
                        <img alt="#" src={userAvatarSrc}/>
                    </NavLink>
                </div>
                <div className={Classes.userName}>{user.userName}</div>
                {
                    user.isFollow
                        ? <button
                            disabled={props.followingInProgressUsersIds.includes(user._id)}
                            onClick={ () => props.userUnFollowHandler(user._id) }>unFollow</button>
                        : <button
                            disabled={props.followingInProgressUsersIds.includes(user._id)}
                            onClick={ () => props.userFollowHandler(user._id) }>follow</button>
                }
                <div className={Classes.description}>
                    {user.userDescription}
                </div>
            </div>
        );
    });

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={Classes.wrapperContainer}>
                {usersElements}
            </div>
            <div className={Classes.pagination}>
                {
                    pages.map((p, i) => {
                        const key = i + '_pgnm';
                        return (<span onClick={() => {
                            props.onPageChanged(p)
                        }} key={key} className={props.currentPage === p ? Classes.currentPage : undefined}>{p}</span>);
                    })
                }
            </div>
        </div>
    );
};

export default Users;