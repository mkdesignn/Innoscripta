import React, { Component } from "react";
import classes from "./Menu.module.css";
import MenuItems from "../../components/MenuItems/MenuItems";
import OrderList from "../../components/OrderList/OrderList";
import OrderDetailsModal from "../../components/OrderDetailsModal/OrderDetailsModal";
import axios from "axios";

class Menu extends Component {
  state = {
    activeId: 1,
    activeOrderItem: null,
    showOrderDetailsModal: false,
    catData: null,
    orderData: null,
    count: 1,
  };

  componentDidMount = () => {
    axios({
      method: "get",
      url: "http://innoscripta-app.herokuapp.com/api/categories",
    })
      .then((respnse) => {
        this.setState({ catData: respnse.data.data }, () => {
          axios({
            method: "get",
            url: `http://innoscripta-app.herokuapp.com/api/products?category=${this.state.activeId}&size=10&page=0`,
          })
            .then((respnse) => {
              this.setState({ orderData: respnse.data.data });
              console.log(respnse.data);
              console.log(respnse);
            })
            .catch((error) => console.log(error));
        });
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
  onOrderClickHandler = (item) => {
    console.log(item.id);
    this.setState({ showOrderDetailsModal: true, activeOrderItem: item });
  };
  onCloseOrderDetailsModalHandler = () => {
    this.setState({ showOrderDetailsModal: false });
  };
  onMinusClickHandler = () => {
    this.setState({
      activeOrderItem: {
        ...this.state.activeOrderItem,
        quantity:
          this.state.activeOrderItem.quantity === 0
            ? 0
            : this.state.activeOrderItem.quantity - 1,
      },
    });
  };
  onPlusClickHandler = () => {
    this.setState({
      activeOrderItem: {
        ...this.state.activeOrderItem,
        quantity: this.state.activeOrderItem.quantity + 1,
      },
    });
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
          onMinusClick={this.onMinusClickHandler}
          onPlusClick={this.onPlusClickHandler}
          activeOrderItem={
            this.state.activeOrderItem && this.state.activeOrderItem
          }
          show={this.state.showOrderDetailsModal}
          close={this.onCloseOrderDetailsModalHandler}
          onAddToCartClick={this.onAddToCartClickHandler}
        />
      </div>
    );
  }
}

export default Menu;
