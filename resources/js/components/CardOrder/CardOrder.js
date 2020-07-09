import React from "react";
import classes from "./CardOrder.module.css";

const CardOrder = (props) => {
    return (
        <div
            onClick={() => props.onCardOrderClick(props.item)}
            className={classes.container}
            style={{
                cursor: props.editable ? "pointer" : "not-allowed",
                border: props.editable ? "1px solid #ffda6c" : "none",
            }}
        >
            <div className={classes.image}>
                <img src={props.item.avatar} alt={props.item.name}/>
            </div>
            <div className={classes.title}>
                <p>{props.item.name}</p>
                <p style={{color: "rgba(94, 91, 91, 0.24)"}}>
                    $ {props.item.price} ( {"€" + props.item.price * 0.88} )
                </p>
            </div>
            <div className={classes.count}>
                <p style={{fontSize: "16px", fontWeight: 100}}>&#x2716;</p>{" "}
                {props.item.quantity}
            </div>
            <div className={classes.totalPrice}>
                $ {props.item.quantity * props.item.price} (
                {"€" + props.item.quantity * props.item.price * 0.88} )
            </div>
        </div>
    );
};

export default CardOrder;
