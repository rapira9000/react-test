import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {
    class redirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return (<Redirect to={'/login'}/>);
            return (<Component {...this.props} />);
        }
    }

    let initMapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        };
    };

    return  connect(initMapStateToProps)(redirectComponent);
};