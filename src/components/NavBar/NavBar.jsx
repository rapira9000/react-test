import React from "react";
import Classes from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
import UnreadMessContainer from "../UnreadMess/UnreadMessContainer";

const NavBar = (props) => {
    return (
        <nav className={Classes.NavBar}>
            <div><NavLink to="/profile" activeClassName={Classes.active}>Profile</NavLink></div>
            {props.isAuth ? <div><NavLink to="/users" activeClassName={Classes.active}>Users</NavLink></div> : ''}
            {props.isAuth ? <div><NavLink to="/dialog" activeClassName={Classes.active}>
                <UnreadMessContainer/>
                Dialogs
            </NavLink></div> : ''}
            {props.isAuth ? <div><NavLink to="/news" activeClassName={Classes.active}>News</NavLink></div> : ''}
            {props.isAuth ? <div><NavLink to="/music" activeClassName={Classes.active}>Music</NavLink></div> : ''}
            {props.isAuth ? <div><NavLink to="/settings" activeClassName={Classes.active}>Settings</NavLink></div> : ''}
            {!props.isAuth ? <div><NavLink to="/registration" activeClassName={Classes.active}>Registration</NavLink></div> : ''}
        </nav>
    );
};
export default NavBar;