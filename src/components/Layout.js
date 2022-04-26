import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadCountries } from "../actions/countries";
import Auxilliary from "../hoc/Auxilliary";
import Detail from "./Detail";
import Home from "./Home";
import Header from "./Header";

const Layout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCountries());
    }, [dispatch])

    return (
        <Auxilliary>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/details/:code" component={Detail} />
                <Redirect from="/" to="/" />
            </Switch>
        </Auxilliary>
    )
}

export default Layout;
