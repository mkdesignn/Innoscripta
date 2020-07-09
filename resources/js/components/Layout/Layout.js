import React from "react";
import {Route, Switch} from "react-router-dom";
import classes from "./Layout.module.css";
import Menu from "../../contianers/Menu/Menu";
import OrderHistory from "../../contianers/OrderHistory/OrderHistory";
import Sidebar from "../Sidebar/Sidebar";

const Layout = (props) => {
    const routes = (
        <Switch>
            <Route
                path="/"
                exact
                render={(prop) => (
                    <Menu {...prop} deliveryPrice={props.deliveryPrice}/>
                )}
            />
            <Route
                path="/OrderHistory"
                render={(prop) => (
                    <OrderHistory {...prop} deliveryPrice={props.deliveryPrice}/>
                )}
            />
        </Switch>
    );

    return (
        <div className={classes.container}>
            <div className={classes.side}>
                <Sidebar/>
            </div>
            <div className={classes.mainArea}>{routes}</div>
        </div>
    );
};

export default Layout;
