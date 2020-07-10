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
                key={item.id}
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
        <div data-testid="orderList" className={classes.container}>
            <div className={classes.header}>
                <p>
                    <span style={{fontWeight: "700"}}>Orders</span> List
                </p>
                <img onClick={props.onEditClick} src={Edit} alt={"edit"}/>
            </div>

            <div className={classes.cardsContainer}>{orders}</div>
            <div className={classes.factorPrice}>
                <div style={{marginBottom: "15px"}}>
                    <span>Sub Total :</span>
                    <span>$ {totalPrice} ({"€" + totalPrice * 0.88})</span>
                </div>
                <div style={{marginBottom: "15px"}}>
                    <span>Delivery Price :</span>
                    <span>$ {props.deliveryPrice}</span>
                </div>
                <div>
                    <span>Total Price :</span>
                    <span>
                        {totalPrice > 0 ? " $" + (+totalPrice + +props.deliveryPrice) : "$0"}
                    </span>
                </div>
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
