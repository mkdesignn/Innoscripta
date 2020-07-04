//
// /**
//  * First we will load all of this project's JavaScript dependencies which
//  * includes React and other helpers. It's a great starting point while
//  * building robust, powerful web applications using React + Laravel.
//  */
//
// // require('./bootstrap');
//
// /**
//  * Next, we will create a fresh React component instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */
//
// require('./components/Example');


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
