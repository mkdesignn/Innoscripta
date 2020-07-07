import React, { Component } from "react";
import classes from "./Menu.module.css";
import MenuItems from "../../components/MenuItems/MenuItems";
import OrderList from "../../components/OrderList/OrderList";
import OrderDetailsModal from "../../components/OrderDetailsModal/OrderDetailsModal";
import axios from "axios";
import ProfileDataModal from "../../components/ProfileDataModal/ProfileDataModal";
import ClipLoader from "react-spinners/ClipLoader";

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
    showProfileDataModal: false,
    name: "",
    address: "",
    surname: "",
    loading: true,
    orderLoading: false,
    profileModalLoading: false,
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
              this.setState({ orderData: respnse.data.data, loading: false });
              console.log(respnse.data);
              console.log(respnse);
            })
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => console.log(error));
  };

  onCatClickHandler = (id) => {
    this.setState({ activeId: id, orderLoading: true }, () => {
      axios({
        method: "get",
        url: `http://innoscripta-app.herokuapp.com/api/products?category=${id}&size=10&page=0`,
      })
        .then((respnse) => {
          this.setState({ orderData: respnse.data.data, orderLoading: false });
          console.log(respnse.data);
          console.log(respnse);
        })
        .catch((error) => console.log(error));
    });
  };
  onOrderClickHandler = (item) => {
    this.setState({
      showOrderDetailsModal: true,
      activeOrderItem: this.state.orders.find((order) => order.id === item.id)
        ? this.state.orders.find((order) => order.id === item.id)
        : item,
      editMode: this.state.orders.find((order) => order.id === item.id)
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
        (order) => order.id === this.state.activeOrderItem.id
      )
        ? this.state.orders.map((item) =>
            item.id !== this.state.activeOrderItem.id
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
        (order) => order.id === this.state.activeOrderItem.id
      )
        ? this.state.orders.map((item) =>
            item.id !== this.state.activeOrderItem.id
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
        (order) => order.id === this.state.activeOrderItem.id
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
        editMode: this.state.orders.find((order) => order.id === item.id)
          ? true
          : false,
      });
  };
  onEditClickHandler = () => {
    this.setState({ editable: this.state.orders.length > 0 ? true : false });
  };
  onOrderListNextClickHandler = () => {
    this.setState({ showProfileDataModal: true });
  };
  onCloseProfileDataModalHandler = () => {
    this.setState({ showProfileDataModal: false });
  };
  onChangeHandler = (event, name) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onProfileDataOrderClickHandler = () => {
    this.setState({ profileModalLoading: true });
    axios({
      method: "post",
      url: `https://innoscripta-app.herokuapp.com/api/orders`,
      data: {
        customer_address: this.state.address,
        customer_name: this.state.name,
        customer_surname: this.state.surname,
        products: this.state.orders,
      },
    })
      .then((respnse) => {
        this.setState({ profileModalLoading: false });
        console.log(respnse.data);
        console.log(respnse);
      })
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.left}>
          {!this.state.loading ? (
            <MenuItems
              catData={this.state.catData}
              orderData={this.state.orderData}
              onOrderClick={this.onOrderClickHandler}
              onCatClick={this.onCatClickHandler}
              activeId={this.state.activeId}
              orderLoading={this.state.orderLoading}
            />
          ) : (
            <div className={classes.loading}>
              <ClipLoader
                // css={override}
                sizeUnit={"px"}
                size={50}
                color={"rgb(228, 132, 13)"}
                loading={this.state.loading}
              />
            </div>
          )}{" "}
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
        <ProfileDataModal
          loading={this.state.profileModalLoading}
          onProfileDataOrderClick={this.onProfileDataOrderClickHandler}
          onChangeHandler={this.onChangeHandler}
          show={this.state.showProfileDataModal}
          close={this.onCloseProfileDataModalHandler}
        />
      </div>
    );
  }
}

export default Menu;
