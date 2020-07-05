import React, { Component } from "react";
import classes from "./Menu.module.css";
import MenuItems from "../../components/MenuItems/MenuItems";
import OrderList from "../../components/OrderList/OrderList";

class Menu extends Component {
  state = {
    activeId: 1,
  };
  onCatClickHandler = (id) => {
    this.setState({ activeId: id });
  };
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.left}>
          <MenuItems
            onCatClick={this.onCatClickHandler}
            activeId={this.state.activeId}
          />
        </div>
        <div className={classes.right}>
          <OrderList />
        </div>
      </div>
    );
  }
}

export default Menu;
