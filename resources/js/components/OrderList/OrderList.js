import React from "react";
import classes from "./OrderList.module.css";
import CardOrder from "../CardOrder/CardOrder";
import Button from "../Button/Button";
import Edit from "../../Assets/edit.png";

const OrderList = (props) => {
  const orders =
    props.orders &&
    props.orders.map((item) => (
      <CardOrder
        onCardOrderClick={props.onCardOrderClick}
        key={item.name}
        item={item}
        editable={props.editable}
      />
    ));
  let totalPrice = 0;
  const ordersData = props.orders && props.orders;
  for (let i = 0; i < ordersData.length; i++) {
    totalPrice += ordersData[i].price * ordersData[i].quantity;
  }
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>
          <span style={{ fontWeight: "700" }}>Orders</span> List
        </p>
        <img onClick={props.onEditClick} src={Edit} alt={"edit"} />
      </div>

      <div className={classes.cardsContainer}>{orders}</div>
      <div className={classes.factorPrice}>
        <p style={{ color: "rgba(94, 91, 91, 0.24)" }}>SUB TOTAL :</p>
        <p>$ {totalPrice}</p>
      </div>
      <div className={classes.buttonContainer}>
        <Button
          onClick={props.onOrderListNextClick}
          width={"70%"}
          title={"NEXT"}
        />
      </div>
    </div>
  );
};

export default OrderList;
