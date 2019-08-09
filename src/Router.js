import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage';
import CartPage from './pages/CartPage';

const Router = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/cart" component={CartPage} />
        </Switch>
    </BrowserRouter>
);


export default Router;