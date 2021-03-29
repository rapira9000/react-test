import React from "react";
import Classes from "./Preloader.module.css";
import loadingImg from "../../img/loading.svg";

const Preloader = (props) => {
    return (
      <div className={Classes.wrapper}>
          <img alt={"loading"} title={"loading"} src={loadingImg} />
      </div>
    );
};

export default Preloader;