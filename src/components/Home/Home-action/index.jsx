import React from "react";
import style from "./style.module.sass"

function HomeAction(){

  const departments = [
    {title: "Nosorog"},
    {title: "Navigator"},
    {title: "Ugolөk"},
    {title: "Дым Культуры GHETTO Navigator 501"},
    {title: "Kim pub"},
    {title: "501"},
    {title: "Somewhere Bistro"},
    {title: "Space King"},
    {title: "Labyrinth"},
    {title: "PARK"},
    {title: "Улица Мясная 52"},
    {title: "Baan Baan"},
    {title: "Divan"},
    {title: "Oculus"},
    {title: "ГОРЬКИЙ"},
  ]

  return (
    <section className={style.mainCont}>
      <div className={style.actionPart}>
        <h2>Найди свое любимое заведение</h2>
        <input type="text" placeholder="Напиши название заведении"/>
      </div>
      <div className={style.departmentsCont}>
        {departments.map(d => <p key={d.title}>{d.title}</p>)}
      </div>
    </section>
  )
}

export default HomeAction