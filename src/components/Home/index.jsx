import React from "react";
import style from "./style.module.sass"
import MainWrapper from "../MainWrapper/index";
import Title from "./Title";
import Slick from "./Slick";
import HomeAction from "./Home-action";
import Map from "./Map";
import Footer from "./Footer";

function HomeComponent() {

    return (
        <MainWrapper>
            <div className={style.mainCont}>
              <Title/>
              <HomeAction/>
              <Slick/>
              <Map/>
              <Footer/>
            </div>
        </MainWrapper>
    )
}

export default HomeComponent;