import React, {Component} from "react";
import classes from "./Menu.module.css";
import MenuItems from "../../components/MenuItems/MenuItems";
import OrderList from "../../components/OrderList/OrderList";
import OrderDetailsModal from "../../components/OrderDetailsModal/OrderDetailsModal";
import axios from "axios";
import ProfileDataModal from "../../components/ProfileDataModal/ProfileDataModal";
import ClipLoader from "react-spinners/ClipLoader";
import NextErrorModal from "../../components/NextErrorModal/NextErrorModal";

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
        showNextErrorModal: false,
        succsessOrder: false,
        errors: "",
        responseOrder: ""
    };

    componentDidMount = () => {

        axios({
            method: "get",
            url: "https://innoscriptaa.herokuapp.com/api/categories",
        })
            .then((respnse) => {
                this.setState({catData: respnse.data.data}, () => {
                    axios({
                        method: "get",
                        url: `https://innoscriptaa.herokuapp.com/api/products?category=${this.state.activeId}&size=10&page=0`,
                    })
                        .then((respnse) => {
                            this.setState({orderData: respnse.data.data, loading: false});
                            console.log(respnse.data);
                            console.log(respnse);
                        })
                        .catch((error) => console.log(error));
                });
            })
            .catch((error) => console.log(error));
    };

    onCatClickHandler = (id) => {
        this.setState({activeId: id, orderLoading: true}, () => {
            axios({
                method: "get",
                url: `https://innoscriptaa.herokuapp.com/api/products?category=${id}&size=10&page=0`,
            })
                .then((respnse) => {
                    this.setState({orderData: respnse.data.data, orderLoading: false});
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
        this.setState({showOrderDetailsModal: false});
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
        this.setState({editable: this.state.orders.length > 0 ? true : false});
    };
    onOrderListNextClickHandler = () => {
        this.setState({
            showProfileDataModal:
                this.state.orders.filter((item) => item.quantity !== 0).length > 0
                    ? true
                    : false,
            showNextErrorModal:
                this.state.orders.filter((item) => item.quantity !== 0).length === 0
                    ? true
                    : false,
        });
    };
    onCloseProfileDataModalHandler = () => {
        this.setState({
            showProfileDataModal: false,
            succsessOrder: false,
            orders: [],
            name: "",
            surname: "",
            address: "",
        });
    };
    onCloseErrorProfileDataModalHandler = () => {
        this.setState({
            errors: "",
        });
    };
    onChangeHandler = (event, name) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    onProfileDataOrderClickHandler = () => {
        this.setState({profileModalLoading: true});
        axios({
            method: "post",
            url: `https://innoscriptaa.herokuapp.com/api/orders`,
            data: {
                customer_address: this.state.address,
                customer_name: this.state.name,
                customer_surname: this.state.surname,
                products: this.state.orders,
            },
        })
            .then((respnse) => {
                this.setState({profileModalLoading: false, succsessOrder: true, responseOrder: respnse.data.data});
            })
            .catch((error) => {
                this.setState({
                    errors: error.response.data.message,
                    profileModalLoading: false,
                });
            });
    };
    onCloseNextErrorModalHandler = () => {
        this.setState({showNextErrorModal: false});
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
                        deliveryPrice={this.props.deliveryPrice}
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
                    errors={this.state.errors}
                    closeError={this.onCloseErrorProfileDataModalHandler}
                    succsessOrder={this.state.succsessOrder}
                    loading={this.state.profileModalLoading}
                    data={this.state.responseOrder}
                    onProfileDataOrderClick={this.onProfileDataOrderClickHandler}
                    onChangeHandler={this.onChangeHandler}
                    show={this.state.showProfileDataModal}
                    close={this.onCloseProfileDataModalHandler}
                />
                <NextErrorModal
                    show={this.state.showNextErrorModal}
                    close={this.onCloseNextErrorModalHandler}
                />
            </div>
        );
    }
}

export default Menu;
