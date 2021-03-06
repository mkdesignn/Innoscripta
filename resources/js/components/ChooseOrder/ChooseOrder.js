import React from "react";
import classes from "./ChooseOrder.module.css";
import OrderItems from "../OrderItems/OrderItems";
import ClipLoader from "react-spinners/ClipLoader";

const ChooseOrder = (props) => {
    const orders =
        props.orderData &&
        props.orderData.map((item) => (
            <OrderItems onOrderClick={props.onOrderClick} key={item.id} item={item}/>
        ));
    return (
        <div data-testid="ChooseOrder" className={classes.container}>
            <p>
                <span style={{fontWeight: "700"}}>Choose</span> Order
            </p>
            {!props.orderLoading ? (
                <div data-testid="orders" className={classes.orderItemsContainer}>{orders}</div>
            ) : (
                <div data-testid="loader-wrapper" className={classes.loading}>
                    <ClipLoader
                        // css={override}
                        sizeUnit={"px"}
                        size={50}
                        color={"rgb(228, 132, 13)"}
                        loading={props.orderLoading}
                    />
                </div>
            )}
        </div>
    );
};

export default ChooseOrder;
