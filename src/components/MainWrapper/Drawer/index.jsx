import React from "react";
import Drawer from '@material-ui/core/Drawer';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import style from "./style.module.sass"
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

function DrawerComponent({toggleDrawer, open}){

  const list = () => (
    <div
      role="presentation"
      onKeyDown={toggleDrawer(false)}
      className={style.mainCont}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
      {list()}
    </Drawer>
  )
}

export default DrawerComponent;