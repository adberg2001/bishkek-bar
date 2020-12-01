import React from "react";
import style from "./style.module.sass"
import telegram from "./assets/telega.svg.webp"

function Footer() {

  return (
    <footer className={style.mainCont}>
      <p>Тимон <a target="_blank" rel="noopener noreferrer" href="tel:+996775607075">+(996)775-607-075</a></p>
      <p>Пумба <a target="_blank" rel="noopener noreferrer" href="tel:+996220422541">+(996)220-422-541</a></p>
      <div>
        <img src={telegram} alt=""/>
        <span>
          <a target="_blank" rel="noopener noreferrer" href="https://t.me/PythonNurs">@PythonNurs/</a>
          <a target="_blank" rel="noopener noreferrer" href="https://t.me/ad6erg">@&lt;adberg/&gt;</a>
        </span>
      </div>
    </footer>
  )
}

export default Footer