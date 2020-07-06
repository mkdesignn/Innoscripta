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
    orders: [],
    editMode: false,
    editable: false,
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
    this.setState({
      showOrderDetailsModal: true,
      activeOrderItem: this.state.orders.find(
        (order) => order.name === item.name
      )
        ? this.state.orders.find((order) => order.name === item.name)
        : item,
      editMode: this.state.orders.find((order) => order.name === item.name)
        ? true
        : false,
    });
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
      orders: this.state.orders.find(
        (order) => order.name === this.state.activeOrderItem.name
      )
        ? this.state.orders.map((item) =>
            item.name !== this.state.activeOrderItem.name
              ? item
              : {
                  ...item,
                  quantity:
                    this.state.activeOrderItem.quantity === 0
                      ? 0
                      : this.state.activeOrderItem.quantity - 1,
                }
          )
        : [...this.state.orders],
    });
  };
  onPlusClickHandler = () => {
    this.setState({
      activeOrderItem: {
        ...this.state.activeOrderItem,
        quantity: this.state.activeOrderItem.quantity + 1,
      },
      orders: this.state.orders.find(
        (order) => order.name === this.state.activeOrderItem.name
      )
        ? this.state.orders.map((item) =>
            item.name !== this.state.activeOrderItem.name
              ? item
              : {
                  ...item,
                  quantity: this.state.activeOrderItem.quantity + 1,
                }
          )
        : [...this.state.orders],
    });
  };
  onAddToCartClickHandler = () => {
    this.setState({
      orders: this.state.orders.find(
        (order) => order.name === this.state.activeOrderItem.name
      )
        ? [...this.state.orders]
        : [...this.state.orders, this.state.activeOrderItem],
      showOrderDetailsModal: false,
      editMode: false,
      editable: false,
    });
  };
  onCardOrderClickHandler = (item) => {
    this.state.editable &&
      this.setState({
        activeOrderItem: item,
        showOrderDetailsModal: true,
        editMode: this.state.orders.find((order) => order.name === item.name)
          ? true
          : false,
      });
  };
  onEditClickHandler = () => {
    this.setState({ editable: this.state.orders.length > 0 ? true : false });
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
          <OrderList
            onOrderListNextClick={this.onOrderListNextClickHandler}
            onEditClick={this.onEditClickHandler}
            onCardOrderClick={this.onCardOrderClickHandler}
            orders={this.state.orders.filter((order) => order.quantity > 0)}
            editable={this.state.editable}
          />
        </div>
        <OrderDetailsModal
          editMode={this.state.editMode}
          onMinusClick={this.onMinusClickHandler}
          onPlusClick={this.onPlusClickHandler}
          activeOrderItem={this.state.activeOrderItem}
          show={this.state.showOrderDetailsModal}
          close={this.onCloseOrderDetailsModalHandler}
          onAddToCartClick={this.onAddToCartClickHandler}
        />
      </div>
    );
  }
}

export default Menu;
