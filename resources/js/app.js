import React, {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import axios from "axios";

class App extends Component {
    state = {
        deliveryPrice: null,
    };
    componentDidMount = () => {
        axios({
            method: "get",
            url: `https://innoscriptaa.herokuapp.com/api/pre-order`,
        })
            .then((response) => {
                this.setState({deliveryPrice: response.data.data.delivery_price});
                console.log(response);
            })
            .catch((error) => console.log(error));
    };

    render() {
        return (
            <BrowserRouter>
                <Layout deliveryPrice={this.state.deliveryPrice}/>
            </BrowserRouter>
        );
    }
}

export default App;
