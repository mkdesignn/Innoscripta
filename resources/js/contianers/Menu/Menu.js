import React, { Component } from "react";
import classes from "./Menu.module.css";
import MenuItems from "../../components/MenuItems/MenuItems";
import OrderList from "../../components/OrderList/OrderList";
import OrderDetailsModal from "../../components/OrderDetailsModal/OrderDetailsModal";
import axios from "axios";

class Menu extends Component {
  state = {
    activeId: 1,
    showOrderDetailsModal: false,
    catData: null,
    orderData: null,
  };

  componentDidMount = () => {
    axios({
      method: "get",
      url: "http://innoscripta-app.herokuapp.com/api/categories",
    })
      .then((respnse) => {
        this.setState({ catData: respnse.data.data });
        console.log(respnse.data);
      })
      .catch((error) => console.log(error));
  };

  onCatClickHandler = (id) => {
    this.setState({ activeId: id }, () => {
      axios({
        method: "get",
        url: `http://innoscripta-app.herokuapp.com/api/products?category=${id}&size=10&page=0`,
      })
        .then((respnse) => {
          this.setState({ orderData: respnse.data.data });
          console.log(respnse.data);
          console.log(respnse);
        })
        .catch((error) => console.log(error));
    });
  };
  onOrderClickHandler = (id) => {
    console.log(id);
    this.setState({ showOrderDetailsModal: true });
  };
  onCloseOrderDetailsModalHandler = () => {
    this.setState({ showOrderDetailsModal: false });
  };
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.left}>
          <MenuItems
            catData={this.state.catData}
            orderData={this.state.orderData}
            onOrderClick={this.onOrderClickHandler}
            onCatClick={this.onCatClickHandler}
            activeId={this.state.activeId}
          />
        </div>
        <div className={classes.right}>
          <OrderList />
        </div>
        <OrderDetailsModal
          show={this.state.showOrderDetailsModal}
          close={this.onCloseOrderDetailsModalHandler}
        />
      </div>
    );
  }
}

export default Menu;
