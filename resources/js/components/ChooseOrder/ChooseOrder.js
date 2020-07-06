import React from "react";
import classes from "./ChooseOrder.module.css";
import OrderItems from "../OrderItems/OrderItems";

const ChooseOrder = (props) => {
  const orders =
    props.orderData &&
    props.orderData.map((item) => (
      <OrderItems onOrderClick={props.onOrderClick} key={item.id} item={item} />
    ));
  return (
    <div className={classes.container}>
      <p>
        <span style={{ fontWeight: "700" }}>Choose</span> Order
      </p>
      <div className={classes.orderItemsContainer}>{orders}</div>
    </div>
  );
};

export default ChooseOrder;
