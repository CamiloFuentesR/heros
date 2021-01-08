import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PrivateRouter = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    const{location:{pathname,search}} = rest;
    //el search es el queryparam cuando se hacen busquedas
    localStorage.setItem('lastPath',pathname+search);
    return (
        <Route {...rest}
            component={(props) => (
                //pregunta si esta autenticado
                (isAuthenticated)
                    //si esta atenticado carga este componente
                    ? (<Component {...props} />)
                    //si no esta autenticado solo carga el componente del login
                    : (<Redirect to="/login" />)
            )}
        />
    )
}

PrivateRouter.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
