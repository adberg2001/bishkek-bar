import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Departments from "./Departments";

function Views() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/departments" component={Departments} exact={true} />
            </Switch>
        </BrowserRouter>
    )
}

export default Views;