import React from "react";
import style from "./style.module.sass"
import MainWrapper from "../MainWrapper";

function DepartmentsComponent(){

  return (
    <MainWrapper>
      <div className={style.mainCont}>
        Departments
      </div>
    </MainWrapper>
  )
}

export default DepartmentsComponent;