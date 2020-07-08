import React from "react";
import classes from "./CardOrderHistory.module.css";

const CardOrderHistory = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <p>{props.item.product_name}</p>
        <p style={{ color: "rgba(94, 91, 91, 0.24)" }}>$ {props.item.price}</p>
      </div>
      <div className={classes.count}>
        <p style={{ fontSize: "16px", fontWeight: 100 }}>&#x2716;</p>{" "}
        {props.item.quantity}
      </div>
      <div className={classes.totalPrice}>
        $ {props.item.quantity * props.item.price}
      </div>
    </div>
  );
};

export default CardOrderHistory;
