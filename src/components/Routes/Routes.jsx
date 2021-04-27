import React from "react";
import {Route} from "react-router-dom";
import DialogContainer from "../Dialog/DialogContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import UsersContainer from "../Users/UsersContainer";
import LoginContainer from "../Login/LoginContainer";
import RegistrationContainer from "../Registration/RegistrationContainer";
import NewsContainer from "../News/NewsContainer";

const Routes = () => {
    return (
        <>
            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
            <Route exact path="/" render={() => <ProfileContainer/>}/>
            <Route path="/dialog" render={() => <DialogContainer/>}/>
            <Route path="/users" render={() => <UsersContainer/>}/>
            <Route path="/login" render={() => <LoginContainer/>}/>
            <Route path="/news" render={() => <NewsContainer />}/>
            <Route path="/music" render={() => <DialogContainer/>}/>
            <Route path="/settings" render={() => <DialogContainer/>}/>
            <Route path="/registration" render={() => <RegistrationContainer/>}/>
        </>
    )
};
export default Routes;