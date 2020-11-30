import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";

function Views() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
            </Switch>
        </BrowserRouter>
    )
}

export default Views;