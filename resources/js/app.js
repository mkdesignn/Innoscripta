import React, { Component } from "react";
import { connect } from "react-redux";
import {
    BrowserRouter,
    Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";

import History from "./Utilities/createBrowserHistory";
import * as actions from "./store/actions/index";
import Menu from "./contianers/Menu/Menu";
import Payment from "./contianers/Payment/Payment";

class App extends Component {
    componentDidMount = () => {};
    render() {
        const routes = (
            <Switch>
                <Route path="/" exact component={Menu} />
                <Route path="/payment" component={Payment} />
            </Switch>
        );

        return (
            <BrowserRouter>
                <Router history={History}>
                    <div>{routes}</div>
                </Router>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
