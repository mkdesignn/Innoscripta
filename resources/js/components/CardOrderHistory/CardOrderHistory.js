import React from "react";
import classes from "./CardOrderHistory.module.css";

const CardOrderHistory = (props) => {
    return (
        <div data-testid="cardOrderHistory" className={classes.container}>
            <div className={classes.title}>
                <p>{props.item.product_name}</p>
                <p style={{color: "rgba(94, 91, 91, 0.24)"}}>
                    $ {props.item.price} ({"€" + props.item.price * 0.88})
                </p>
            </div>
            <div className={classes.count}>
                {props.item.quantity}
            </div>
            <div className={classes.totalPrice}>
                $ {props.item.quantity * props.item.price} (
                {"€" + props.item.quantity * props.item.price * 0.88})
            </div>
        </div>
    );
};

export default CardOrderHistory;
