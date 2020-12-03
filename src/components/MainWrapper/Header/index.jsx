import React, {useEffect, useState} from "react";
import style from "./style.module.sass"
import {NavLink} from "react-router-dom";
import logo from "./assets/TBB 1.svg"
import {Sling as Hamburger} from 'hamburger-react'

function Header({toggleDrawer, open}) {
  const [yOffSet, setYOffSet] = useState(window.pageYOffset)
  useEffect(() => {
    document.addEventListener("scroll", handleScroll, false)
    return document.addEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = () => setYOffSet(window.pageYOffset);
  const w = window.innerHeight
  return (
    <header className={`${style.header} ${yOffSet < 150 ? style.black : style.transparent}`}>
      <NavLink to="/" exact>
        <img src={logo} className={style.logo} alt=""/>
      </NavLink>
      <div style={{transform: `scale(${(w * (w < 1000 ? 1 : .9)) / 1080})`}} className={style.burger}>
        <Hamburger distance="sm" toggled={open} size={30} toggle={toggleDrawer(!open)}/>
      </div>
    </header>
  )
}

export default Header;