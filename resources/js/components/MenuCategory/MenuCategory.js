import React from "react";
import CategoryItems from "../CategoryItems/CategoryItems";
import classes from "./MenuCategory.module.css";

const MenuCategory = (props) => {
  //   const categories =
  //     props.catData &&
  //     props.catData.map((item) => <CategoryItems name={item.Name} />);
  return (
    <div className={classes.container}>
      <h2>Menu Category</h2>
      {/* <div className={classes.catItemsContainer}>{categories}</div> */}
      <div className={classes.catItemsContainer}>
        <CategoryItems
          onCatClick={props.onCatClick}
          activeId={props.activeId}
          item={{ name: "pizza", Id: 1 }}
        />
        <CategoryItems
          onCatClick={props.onCatClick}
          activeId={props.activeId}
          item={{ name: "coffee", Id: 2 }}
        />
        <CategoryItems
          onCatClick={props.onCatClick}
          activeId={props.activeId}
          item={{ name: "burger", Id: 3 }}
        />
        <CategoryItems
          onCatClick={props.onCatClick}
          activeId={props.activeId}
          item={{ name: "snaks", Id: 4 }}
        />
        <CategoryItems
          onCatClick={props.onCatClick}
          activeId={props.activeId}
          item={{ name: "soup", Id: 5 }}
        />
        <CategoryItems
          onCatClick={props.onCatClick}
          activeId={props.activeId}
          item={{ name: "pasta", Id: 6 }}
        />
      </div>
    </div>
  );
};

export default MenuCategory;
