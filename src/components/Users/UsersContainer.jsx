import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {
    loadUsers,
    setPage, userFollowHandler, userUnFollowHandler
} from "../../redux/usersReducer";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount = () => {
        this.props.loadUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (currentPage) => {
        this.props.setPage(currentPage);
        this.props.loadUsers(currentPage, this.props.pageSize);
    };

    render = () => {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : undefined}
                <Users
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    followingInProgressUsersIds={this.props.followingInProgressUsersIds}
                    userUnFollowHandler={this.props.userUnFollowHandler}
                    userFollowHandler={this.props.userFollowHandler}
                />
            </>);
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgressUsersIds: state.usersPage.followingInProgressUsersIds
    };
};

export default compose(
    connect(mapStateToProps, {
        setPage,
        loadUsers,
        userFollowHandler,
        userUnFollowHandler
    })
)(UsersContainer);