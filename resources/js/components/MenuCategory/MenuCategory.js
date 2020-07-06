import React from "react";
import CategoryItems from "../CategoryItems/CategoryItems";
import classes from "./MenuCategory.module.css";

const MenuCategory = (props) => {
  const categories =
    props.catData &&
    props.catData.map((item) => (
      <CategoryItems
        activeId={props.activeId}
        onCatClick={props.onCatClick}
        item={item}
      />
    ));
  return (
    <div className={classes.container}>
      <p>
        <span style={{ fontWeight: "700" }}>Menu</span> Category
      </p>
      <div className={classes.catItemsContainer}>{categories}</div>
    </div>
  );
};

export default MenuCategory;
