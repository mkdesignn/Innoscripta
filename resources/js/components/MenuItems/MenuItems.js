import React from "react";
import MenuCategory from "../MenuCategory/MenuCategory";
import ChooseOrder from "../ChooseOrder/ChooseOrder";

const MenuItems = (props) => {
  return (
    <div>
      <MenuCategory activeId={props.activeId} onCatClick={props.onCatClick} />
      <ChooseOrder />
    </div>
  );
};

export default MenuItems;
