import React from "react";
import style from "./style.module.sass"

function Title(){
  return (
    <section className={style.mainCont}>
      <h1>
        Добро пожаловать в The Bish's Bars
      </h1>
      <p>Ищешь бар где можно выпить и "потусить", или где можно посидеть выпивая под хорошую музыку?</p>
    </section>
  )
}

export default Title