import React from "react";
import style from "./style.module.sass"

function Map(){
  return (
    <section className={style.mainCont}>
      <div className={style.desc}>
        <h2>Выбери заведение и построй маршрут</h2>
        <p>Нажми на нужный маркер</p>
      </div>
      <iframe src="https://www.google.com/maps/d/embed?mid=15lVjHa32r5nafCBn2i5LZjc_veDOkMnX&hl=ru"/>
    </section>
  )
}

export default Map;