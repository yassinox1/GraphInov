import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from '@material-ui/icons/Menu';
import { Link, NavLink } from "react-router-dom";
import { FaGgCircle,FaHouzz,FaReadme,FaSalesforce,FaShopware,FaStrava,FaTencentWeibo,FaUsps } from "react-icons/fa";

const Icon = (i)=>
  <>
  {i === 0 ? <FaGgCircle style={Istyle} /> : i === 1 ?<FaHouzz style={Istyle}/> : i === 2 ?<FaReadme style={Istyle}/> :i === 3 ?<FaSalesforce style={Istyle}/>:i === 4 ? <FaStrava style={Istyle}/>:i === 5 ? <FaTencentWeibo style={Istyle}/>:i === 6 ? <FaUsps style={Istyle}/> :  <FaShopware style={Istyle}/>}
  </>
  
const Istyle = {width:'25px',height:'25px',color:'rgb(221 102 127)'}

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[{name:'New Activity',link:'/'},
        {name:'Client Areas',link:'/client'},
        {name:'Contract Areas',link:'/contract'},
          { name: "Domaine apporteur", link: "appeurteur" },
          { name: "Domaine comptable", link: "appeurteur" },
          { name: "Domaine comptable", link: "appeurteur" },
          { name: "Domaine production", link: "appeurteur" },
          { name: "Domaine santé", link: "appeurteur" },
          { name: "Domaine sinistres", link: "appeurteur" },
          { name: "Domaine épargne", link: "appeurteur" },
          { name: "Mouvements financiers", link: "appeurteur" },
          
        ].map((text, index) => (
          <NavLink to={text.link}>
            <ListItem
              button
              key={text.name}
              onClick={toggleDrawer(false)}
            >
              <ListItemIcon>
               { Icon( index)}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
      <List>
        {[   { name: "Paramétrage métier", link: "appeurteur" },   { name: "Paramétrage technique", link: "appeurteur" },   { name: "Not classified", link: "appeurteur" } ].map((text, index) => (
          <NavLink to={text.link}>
          <ListItem button key={text.name}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon style={Istyle}/> : <MailIcon style={Istyle} />}
            </ListItemIcon>
            <ListItemText primary={text.name} />
          </ListItem></NavLink>
        ))}
      </List>
    </div>
  );

  return (
    <div>
         
          <MenuIcon color="secondary" className="mr-3" style={{cursor:'pointer',width:'40px',height:'40px'}} onClick={toggleDrawer(  true)}/>
          <Drawer
            anchor="left"
            open={state}
            onClose={toggleDrawer(  false)}
          >
            {list()}
          </Drawer>
      
    </div>
  );
}
