import React from "react";
import Redirect from "react-router-dom/es/Redirect";
import {connect} from "react-redux";

export const afterRegisterUserRedirect = (Component) => {
    class redirectComponent extends React.Component {
        render() {
            if (this.props.isAuth) return (<Redirect to={'/profile'}/>);
            return (<Component {...this.props} />);
        }
    }

    let initMapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        };
    };

    return connect(initMapStateToProps)(redirectComponent);
};