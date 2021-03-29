import React from "react";
import Classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    let authUserHtml = props.userName ? <div>{props.userName}<br/><button onClick={props.logOutUser}>log out</button></div> : <NavLink to={"/login"}>Login</NavLink>;
    return (
        <div className={Classes.header}>
            <div className="header__logo">APP LOGO</div>
            <div className={Classes.loginBlog}>
                {authUserHtml}
            </div>
        </div>
    );
};

export default Header;