import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {

    const {user:{logged}} = useContext(AuthContext)

    return (
        <Router>
            <>
                <Switch>
                {/* hacer la ruta publica sirve para que al estar autetnticado no pueda volver a la pantalla de login sin hacer logout */}
                    <PublicRouter exact
                        path="/login"
                        component={LoginScreen}
                        isAuthenticated={logged}
                    />
                    {/* No coloco exact, porque tengo como referencia la de marvel,  al solo tener un "/", no me va a mostrar el nav bar */}
                    <PrivateRouter
                        path="/"
                        component={DashboardRoutes}
                        isAuthenticated={logged}
                    />
                </Switch>
            </>
        </Router>
    )
}
