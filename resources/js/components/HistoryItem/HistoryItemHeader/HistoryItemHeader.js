import React from "react";
import classes from "../HistoryItem.module.css";

const HistoryItem = () => {
    return (
        <div className={classes.headerContainer}>
            <div className={classes.number}>{"Order Code"}</div>
            <div className={classes.totalPrice}>{"Total Price"}</div>
            <div className={classes.date}>{"Created Date"}</div>
        </div>
    );
};

export default HistoryItem;
