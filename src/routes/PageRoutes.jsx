import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../App.css';
import HomePage from "../ui_components/Home"
import CartPage from "../ui_components/Cart"
import AboutUsPage from "../ui_components/AboutUs"
import OffersPage from "../ui_components/Offers"


class PageRoutes extends Component {
    render() {
        return (
            <div className="App-body">
                <Switch>
                    <Route exact path="/" name="Home Page" component={HomePage} />
                    <Route exact path="/cart" name="Cart Page" component={CartPage} />
                    <Route exact path="/aboutUs" name="About Us Page" component={AboutUsPage} />
                    <Route exact path="/offers" name="Offers Page" component={OffersPage} />
                </Switch>
            </div>
        )
    }
}

export default PageRoutes;