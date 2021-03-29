import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {authLoadUserToken} from "../../redux/authReducer";
import {compose} from "redux";
import {afterRegisterUserRedirect} from "../../hoc/afterRegisterUserRedirect";

class LoginContainer extends React.Component {
    componentDidMount() {

    };

    render() {
        return (
            <Login {...this.props} />
        );
    };
}

const mapStateToProps = () => ({});

export default compose(
    connect(mapStateToProps,
        {
            authLoadUserToken
        }),
    afterRegisterUserRedirect
)(LoginContainer);