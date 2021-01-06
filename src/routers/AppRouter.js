import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
    return (
        <Router>
            <>
                <Switch>
                    <Route exact
                        path="/login"
                        component={LoginScreen}
                    />
                    {/* No coloco exact, porque tengo como referencia la de marvel,  al solo tener un "/", no me va a mostrar el nav bar */}
                    <Route
                        path="/"
                        component={DashboardRoutes}
                    />
                </Switch>
            </>
        </Router>
    )
}
