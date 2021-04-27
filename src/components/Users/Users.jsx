import React from "react";
import "./Users.css";
import userAvatar from "../../img/avatar.jpg";
import {NavLink} from "react-router-dom";
import {generateFullImageUrl} from "../../utils/helpers";
import OnlineStatusContainer from "../OnlineStatus/OnlineStatusContainer";
import UnreadMessContainer from "../UnreadMess/UnreadMessContainer";


const Users = (props) => {
    const userAvatarSrc = props.userAvatar ? generateFullImageUrl(props.userAvatar) : userAvatar;
    return (
        <div
            key={props._id}
            className={"container"}>
            <div className={"imageAvatar"}>
                <NavLink to={`/profile/${props._id}`}>
                    <img alt="#" src={userAvatarSrc}/>
                </NavLink>
            </div>
            <OnlineStatusContainer onlineStatusShow={props.onlineStatusShow} isOnline={props.isOnline} />
            <div className={"userName"}>{props.userName}</div>
            <UnreadMessContainer userId={props._id} type={"inUser"}/>
            {/*follow/unFollow button*/
                props.isFollow
                    ? <button
                        disabled={props.followingInProgressUsersIds.includes(props._id)}
                        onClick={ () => props.userUnFollowHandler(props._id) }>unFollow</button>
                    : <button
                        disabled={props.followingInProgressUsersIds.includes(props._id)}
                        onClick={ () => props.userFollowHandler(props._id) }>follow</button>
            }
            {/* message button */
                props.messActive
                    ? <button
                        onClick={() => props.chatHandler(props._id, userAvatarSrc, props.userName, props.userNickName, props.isOnline)}
                        className={"messageButton"}>Message</button>
                    : ""
            }

            <div className={"description"}>
                {props.userDescription}
            </div>
        </div>
    );
};

export default Users;