import React from "react";
import style from "./style.module.sass"
import MainWrapper from "../../MainWrapper";

function DepartmentsCreateComponent(){
  return (
    <MainWrapper>
      <div className={style.mainCont}>
        <h2>Добавление заведения</h2>
      </div>
    </MainWrapper>
  )
}

export default DepartmentsCreateComponent;