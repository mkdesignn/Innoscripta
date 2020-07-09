import React from "react";
import classes from "./HistoryItem.module.css";

const HistoryItem = (props) => {
    const data = props.item.articles;
    let totalPrice = 0;
    for (let i = 0; i < data.length; i++) {
        totalPrice += data[i].price * data[i].quantity;
    }
    return (
        <div
            onClick={() => props.onHistoryClick(props.item)}
            className={classes.container}
        >
            <div className={classes.number}>{props.item.code}</div>
            <div className={classes.totalPrice}>
                $ {totalPrice} ({"€" + totalPrice * 0.88})
            </div>
            <div className={classes.date}>{props.item.created_at}</div>
        </div>
    );
};

export default HistoryItem;
