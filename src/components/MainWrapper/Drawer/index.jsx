import React from "react";
import Drawer from '@material-ui/core/Drawer';
import style from "./style.module.sass"
import Divider from "@material-ui/core/Divider";
import {NavLink} from "react-router-dom";
import {Sling as Hamburger} from "hamburger-react";

function DrawerComponent({toggleDrawer, open}){

  const list = () => (
    <div
      role="presentation"
      onKeyDown={toggleDrawer(false)}
      className={style.mainCont}
    >
      <ul>
        <li>
          <NavLink to="/">
            Таб-бар
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            Офис-бар
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            Диско-бар
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            Лаунж-бар
          </NavLink>
        </li>
      </ul>
      <Divider />
      <ul>
        <li>
          <NavLink to="/">
            Реклама на сайте
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            Добавить заведение
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            Обратная свзяь
          </NavLink>
        </li>
      </ul>
      <span className={style.hamburger}>
        <Hamburger toggled={open} size={25} toggle={toggleDrawer(!open)}/>
      </span>
    </div>
  );
  return (
    <Drawer transitionDuration={300} style={{zIndex: 0}} anchor={"right"} open={open} onClose={toggleDrawer(false)}>
      {list()}
    </Drawer>
  )
}

export default DrawerComponent;