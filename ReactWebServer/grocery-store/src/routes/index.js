import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/Home'
import Browse from '../components/Browse'
import Cart from '../components/Cart'
import Header from "../components/Header";

const routes = (
    <div>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/browse" component={Browse} />
            <Route path="/cart" component={Cart} />
            {/*<Route component={NoMatch} />*/}
        </Switch>
    </div>
)

export default routes