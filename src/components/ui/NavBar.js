import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const Navbar = () => {
    const {user:{name},dispatch} = useContext(AuthContext);
    const history = useHistory();


    console.log(history)

    const handleLogout = () => {
        // history.push('/');
        // history.replace('/'); //al estar autenticado no puedes volver al login a menos que presioes logout
       
        const action = {
            type: types.logout,
            payload: user
        }
        history.replace('/login');
        dispatch(action);

    }

    
    const {user} = useContext(AuthContext);
    console.log(user)
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark abc">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
        </Link>

            <div className="navbar-collapse nav1 ">
                <div className="navbar-nav nav12">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/marvel"
                    >
                        Marvel
                </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/dc"
                    >
                        DC
                </NavLink>
                <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/search"
                    >
                        Search
                </NavLink>
                </div>
            </div>

            <div className="navbar-collapse   order-3 dual-collapse2 nav2">
                <ul className="navbar-nav ml-auto nav3 ">
                    <span className="nav-item nav-link text-info name">
                        {name}
                    </span>
                    <button
                        className="nav-item nav-link btn btn-outline-dark logout"
                        onClick={handleLogout}
                    >
                        Logout
                </button>
                </ul>
            </div>
        </nav>
    )
}