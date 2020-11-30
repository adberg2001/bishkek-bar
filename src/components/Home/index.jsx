import React from "react";
import style from "./style.module.sass"
import MainWrapper from "../MainWrapper/index";
import Title from "./Title";

function HomeComponent() {

    return (
        <MainWrapper>
            <div className={style.mainCont}>
              <Title/>
            </div>
        </MainWrapper>
    )
}

export default HomeComponent;