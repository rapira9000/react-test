import React from "react";
import '../../App.css';
import Footer from "../Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import HeaderContainer from "../Header/HeaderContainer";
import NavBarContainer from "../NavBar/NavBarContainer";
import Routes from "../Routes/Routes";
import Preloader from "../Preloader/Preloader";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBarContainer/>
                {!props.isUserDataFetching
                    ? <Preloader/>
                    : <Routes/>
                }
                <Footer/>
            </div>
        </BrowserRouter>
    )
};
export default App;
