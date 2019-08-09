import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import HomePage from './pages/Homepage';
import CartPage from './pages/CartPage';
import Page404 from './pages/Page404';

const Router = () =>(
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/cart" component={CartPage} />
            <Route component={Page404} />
        </Switch>
);


export default Router;