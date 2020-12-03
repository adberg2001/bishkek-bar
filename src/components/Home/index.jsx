import React from "react";
import style from "./style.module.sass"
import MainWrapper from "../MainWrapper/index";
import Title from "./Title";
import Slick from "./Slick";
import HomeAction from "./Home-action";
import Map from "./Map";

function HomeComponent() {

    return (
        <MainWrapper>
            <div className={style.mainCont}>
              <Title/>
              <HomeAction/>
              <Slick/>
              <Map/>
            </div>
        </MainWrapper>
    )
}

export default HomeComponent;