import React from "react";
import classes from "./CardOrder.module.css";

const CardOrder = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={props.img} alt={props.name} />
      </div>
      <div className={classes.title}>
        <p>{props.name}</p>
        <p>{props.price}</p>
      </div>
      <div className={classes.count}></div>
      <div className={classes.totlaPrice}></div>
      <div className={classes.image}></div>
    </div>
  );
};

export default CardOrder;
