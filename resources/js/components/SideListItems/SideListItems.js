import React from "react";
import classes from "./SideListItems.module.css";
import {NavLink} from "react-router-dom";
import "./SlideListItems.css";

const SideListItems = (props) => {
    return (
        <NavLink to={props.Link} exact={props.exact}>
            <div data-testid="navLink" className={classes.listItemContainer} style={props.style}>
                <div className={classes.imgContainer}>
                    <img src={props.imgName} alt=""/>
                </div>
                <div className={classes.spanContainer}>
                    <span className={props.classDisNone}>{props.title}</span>{" "}
                </div>
            </div>
        </NavLink>
    );
};

export default SideListItems;
