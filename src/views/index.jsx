import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Departments from "./Departments";
import WIP from "./WIP";
import DepartmentsCreate from "./Departments-create";

function Views() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/departments" component={Departments} exact={true} />
                <Route path="/departments/create" component={DepartmentsCreate} exact={true} />
                <Route path="*" component={WIP} exact={true} />
            </Switch>
        </BrowserRouter>
    )
}

export default Views;