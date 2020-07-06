import React from "react";
import classes from "./OrderItems.module.css";

const OrderItems = (props) => {
  return (
    <div
      onClick={() => props.onOrderClick(props.item)}
      className={classes.container}
    >
      <div className={classes.image}>
        <img src={props.item.avatar} alt={props.item.name} />
      </div>
      <div className={classes.name}>{props.item.name}</div>
      <div className={classes.price}>{props.item.price}</div>
    </div>
  );
};

export default OrderItems;
