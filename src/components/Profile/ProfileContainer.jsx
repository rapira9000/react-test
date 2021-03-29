import React, {Suspense, useEffect} from "react";
import Profile from "./Profile";
import {loadProfileUserPosts, profileUserLoadData} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getProfileDataForFormSelector} from "../../selectors/profileSelectors";

const ProfileContainer = (props) => {
    useEffect(() => {
        if (!props.userProfile) {
            props.profileUserLoadData(props.match.params.userId || null);
            props.loadProfileUserPosts();
        }
    }, [props.isAuth]);

    return (
        <Suspense>
            <Profile {...props} />
        </Suspense>);

};

let mapStateToProps = (state) => (
    {
        userProfile: getProfileDataForFormSelector(state),
        isAuth: state.auth.isAuth
    }
);

export default compose(
    connect(mapStateToProps,
        {
            profileUserLoadData,
            loadProfileUserPosts
        }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
