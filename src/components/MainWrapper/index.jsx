import React, {useState} from "react";
import style from "./style.module.sass"
import DrawerComponent from "./Drawer";
import Header from "./Header";


function MainWrapper({children}) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  return (
    <div className={style.mainWrapper}>
      <Header toggleDrawer={toggleDrawer} open={open}/>
      {children}
      <DrawerComponent toggleDrawer={toggleDrawer} open={open}/>
    </div>
  )
}

export default MainWrapper;