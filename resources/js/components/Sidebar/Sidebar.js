import React from "react";
import ListContainer from "../ListContainer/ListContainer";
import SideListItems from "../SideListItems/SideListItems";
import classes from "./Sidebar.module.css";
import Logo from "../../Assets/logo.png";
import Home from "../../Assets/home.png";
import History from "../../Assets/history.png";

const Sidebar = () => {
  return (
    <div>
      <div className={classes.logo}>
        <img src={Logo} alt={"logo"} />
      </div>
      <ListContainer>
        <SideListItems Link="/" exact={true} title={"Home"} imgName={Home} />
        <SideListItems
          Link="/OrderHistory"
          title={"Order History"}
          imgName={History}
        />
      </ListContainer>
    </div>
  );
};

export default Sidebar;
