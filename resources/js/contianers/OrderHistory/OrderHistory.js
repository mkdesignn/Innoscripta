import React, {Component} from "react";
import classes from "./OrderHistory.module.css";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import HistoryItem from "../../components/HistoryItem/HistoryItem";
import HistoryItemHeader from "../../components/HistoryItem/HistoryItemHeader/HistoryItemHeader";
import OrderHistoryDetailsModal from "../../components/OrderHistoryDetailsModal/OrderHistoryDetailsModal";

class OrderHistory extends Component {
    state = {
        loading: false,
        orderHistory: null,
        showOrderHistoryDetailsModal: false,
        acitveItem: null,
        totalPrice: 0,
    };
    componentDidMount = () => {
        this.setState({loading: true});
        axios({
            method: "get",
            url: `https://innoscriptaa.herokuapp.com/api/orders?size=100&page=0`,
        })
            .then((respnse) => {
                this.setState({orderHistory: respnse.data.data, loading: false});
            })
            .catch((error) => console.log(error));
    };
    onHistoryClickHandler = (item) => {
        this.setState(
            {acitveItem: item, showOrderHistoryDetailsModal: true},
            () => {
                const data = this.state.acitveItem.articles;
                let totalPrice = 0;
                for (let i = 0; i < data.length; i++) {
                    totalPrice += data[i].price * data[i].quantity;
                }
                this.setState({totalPrice: totalPrice});
            }
        );
    };
    onCloseOrderHistoryDetailsModalHandler = () => {
        this.setState({showOrderHistoryDetailsModal: false});
    };

    render() {
        const data = this.state.orderHistory && [...this.state.orderHistory];
        const orders =
            data &&
            data.map((item) => (
                <HistoryItem
                    key={item.id}
                    onHistoryClick={this.onHistoryClickHandler}
                    item={item}
                />
            ));
        return (
            <div className={classes.container}>
                {!this.state.loading ? (
                    <div>
                        <p style={{fontSize: "30px", padding: '20px 28px'}}>
                            <span style={{fontWeight: "700"}}>Order</span> History
                        </p>
                        <HistoryItemHeader/>
                        <div className={classes.orderContainer}>{orders}</div>
                    </div>
                ) : (
                    <div className={classes.loading}>
                        <ClipLoader
                            sizeUnit={"px"}
                            size={50}
                            color={"rgb(228, 132, 13)"}
                            loading={this.state.loading}
                        />
                    </div>
                )}
                <OrderHistoryDetailsModal
                    totalPrice={this.state.totalPrice}
                    orders={this.state.acitveItem && this.state.acitveItem}
                    show={this.state.showOrderHistoryDetailsModal}
                    close={this.onCloseOrderHistoryDetailsModalHandler}
                    deliveryPrice={this.props.deliveryPrice}
                />
            </div>
        );
    }
}

export default OrderHistory;
