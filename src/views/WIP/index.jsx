import React from "react";
import style from "./style.module.sass"
import MainWrapper from "../../components/MainWrapper";
import {NavLink} from "react-router-dom";

function WIP(){
    return (
      <MainWrapper>
        <div className={style.mainCont}>
          <h2 className={style.title}><span>404</span> СТРАНИЦА НЕ НАЙДЕНА!</h2>
          <NavLink to="/" className={style.link}>Перейти на главную страницу</NavLink>
        </div>
      </MainWrapper>
    )
}

export default WIP;