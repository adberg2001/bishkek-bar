import React from "react";
import style from "./style.module.sass"
import DrawerComponent from "./Drawer";
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {drawerAction} from "./Drawer/action";
import Footer from "./Footer";


function MainWrapper({children}) {
  const dispatch = useDispatch();
  const open = useSelector(state => state.drawer.open)

  const toggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    dispatch(drawerAction());
  };

  return (
    <div className={style.mainWrapper}>
      <Header toggleDrawer={toggleDrawer} open={open}/>
      {children}
      <DrawerComponent toggleDrawer={toggleDrawer} open={open}/>
      <Footer/>
    </div>
  )
}

export default MainWrapper;