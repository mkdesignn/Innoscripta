import React from "react";
import MenuCategory from "../MenuCategory/MenuCategory";
import ChooseOrder from "../ChooseOrder/ChooseOrder";
import classes from "./MenuItems.module.css";

const MenuItems = (props) => {
  return (
    <div className={classes.container}>
      <MenuCategory
        catData={props.catData}
        activeId={props.activeId}
        onCatClick={props.onCatClick}
      />
      <ChooseOrder
        orderData={props.orderData}
        onOrderClick={props.onOrderClick}
        orderLoading={props.orderLoading}
      />
    </div>
  );
};

export default MenuItems;
