import React from "react";
import Modal from "../Modal/Modal";
import classes from "./OrderHistoryDetailsModal.module.css";
import CardOrderHistory from "../CardOrderHistory/CardOrderHistory";
import Button from "../Button/Button";

const OrderHistoryDetailsModal = (props) => {
    const data =
        props.orders &&
        props.orders.articles.map((item) => (
            <CardOrderHistory key={item.id} item={item}/>
        ));
    return (
        <Modal width={"50%"} padding={"0"} show={props.show} close={props.close}>
            <div className={classes.all}>
                <div className={classes.top}>
                    <div className={classes.number}>
                        Order Code: {props.orders && props.orders.code}
                    </div>

                    <div className={classes.date}>
                        Created Date: {props.orders && props.orders.created_at}
                    </div>
                </div>
                <div className={classes.bottom}>
                    <div className={classes.container}>{data}</div>
                    <div className={classes.totalPrice}>
                        <p>
                            <span style={{fontWeight: "bold"}}>Sub Price :</span> ${" "}
                            {props.totalPrice} ({"€" + props.totalPrice * 0.88})
                        </p>
                        <p>
                            <span style={{fontWeight: "bold"}}>Delivery Price :</span> ${" "}
                            {props.deliveryPrice} ({"€" + props.deliveryPrice * 0.88})
                        </p>
                    </div>
                    <div className={classes.buttonContainer}>
                        <Button title={"OK"} onClick={props.close} width={"70%"}/>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default OrderHistoryDetailsModal;
