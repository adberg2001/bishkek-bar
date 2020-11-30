import React from "react";
import style from "./style.module.sass"
import {NavLink} from "react-router-dom";
import logo from "./assets/vigbarlogo.png"
import { Sling as Hamburger } from 'hamburger-react'

function Header({toggleDrawer, open}) {

  return (
    <header className={style.header}>
      <NavLink to="/">
        <img src={logo} className={style.logo} alt=""/>
      </NavLink>
      <span className={open?style.open:style.close}>
        <Hamburger toggled={open} size={25} toggle={toggleDrawer(!open)} />
      </span>
    </header>
  )
}

export default Header;