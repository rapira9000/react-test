import React from "react";
import {connect} from "react-redux";
import NavBar from "./NavBar";
import {isAuthSelector} from "../../selectors/auth";

const NavBarContainer = (props) => {
    return (
        <NavBar {...props}/>
    );
};

const mapStateToProps = (state) => ({
   isAuth: isAuthSelector(state)
});

export default connect(mapStateToProps)(NavBarContainer);