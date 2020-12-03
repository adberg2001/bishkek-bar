import React from "react";
import style from "./style.module.sass";
import nos_img from "./assets/nosorog_kg.jpg";
import pyatsot_odin_img from "./assets/501_kg.jpg";
import adberg from "./assets/adberg.jpg";
import {NavLink} from "react-router-dom";

function Departments(){

  const departmments = [
    {id: "nosorog_kg", img: nos_img, title: "Nosorog", address: "ул. Токомбаева, 21А/4, уг. ул. Куттубаева", check: "1000–1200", phone:["+996(552)11-14-44", "+996(552)11-14-44"]},
    {id: "501_kg", img: pyatsot_odin_img, title: "501", address: "ул. Тимирязева, 78, уг. ул. Киевская", check: "800–1000", phone:["+996(501)50-15-01"]},
    {id: "adberg", img: adberg, title: "adberg", address: "ул. Советская, 178, уг. ул. Боконбаева", check: "1100–1300", phone:["+996(775)60-70-75"]},
  ]

  return (
    <div className={style.mainCont}>
      {
        departmments.map(d => {

          return (
            <div className={style.department} key={d.id}>
              <NavLink className={style.imageLink} to={`/departments/${d.id}`} exact><img src={d.img} alt={`${d.title} image`}/></NavLink>
              <div className={style.desc}>
                <NavLink to={`/departments/${d.id}`} exact><h2>{d.title}</h2></NavLink>
                <span>{d.phone.map(p => <a href={`tel:${p}`} className={style.phone}>{p}</a>)}</span>
                <a target="_blank" href={`http://www.google.com/search?q=${d.address}`} className={style.address}>{d.address}</a>
                <p className={style.check}>{`${d.check} сом на человека`}</p>
                <NavLink to={`/departments/${d.id}`} exact className={style.link}>Перейти</NavLink>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Departments;