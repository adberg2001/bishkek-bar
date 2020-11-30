import React, {useEffect, useState} from "react";
import style from "./style.module.sass"
import {NavLink} from "react-router-dom";
import logo from "./assets/vigbarlogo.png"
import {Sling as Hamburger} from 'hamburger-react'

function Header({toggleDrawer, open}) {
  const [yOffSet, setYOffSet] = useState(window.pageYOffset)
  useEffect(() => {
    document.addEventListener("scroll", handleScroll, false)
    return document.addEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = () => setYOffSet(window.pageYOffset);
  console.log(yOffSet)
  return (
    <header className={`${style.header} ${yOffSet < 150 ? style.black : style.transparent}`}>
      <NavLink to="/">
        <img src={logo} className={style.logo} alt=""/>
      </NavLink>
      <span>
        <Hamburger toggled={open} size={25} toggle={toggleDrawer(!open)}/>
      </span>
    </header>
  )
}

export default Header;