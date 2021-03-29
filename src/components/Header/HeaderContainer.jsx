import React from "react";
import Header from "./Header";
import {
    logOutUser
} from "../../redux/authReducer";
import {connect} from "react-redux";
import Preloader from "../Preloader/Preloader";

class HeaderContainer extends React.Component {
    render() {
        return (
            <>
                {
                    this.props.isFetching ? <Preloader/> : null
                }
                <Header userName={this.props.userName} logOutUser={this.props.logOutUser}/>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.auth.userName || undefined,
    }
};

export default connect(mapStateToProps, {
    logOutUser,
})(HeaderContainer);