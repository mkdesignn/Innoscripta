import React from "react";
import { Route, Switch } from "react-router-dom";
import classes from "./Layout.module.css";
import Menu from "../../contianers/Menu/Menu";
import OrderHistory from "../../contianers/OrderHistory/OrderHistory";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  const routes = (
    <Switch>
      <Route path="/" exact component={Menu} />
      <Route path="/OrderHistory" component={OrderHistory} />
    </Switch>
  );

  return (
    <div className={classes.container}>
      <div className={classes.side}>
        <Sidebar />
      </div>
      <div className={classes.mainArea}>{routes}</div>
    </div>
  );
};

export default Layout;
