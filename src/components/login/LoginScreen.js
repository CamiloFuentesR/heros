import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {
        // history.push('/');
        // history.replace('/'); //al estar autenticado no puedes volver al login a menos que presioes logout
        const user = {
            name: 'Camilo F',
        }
        const action = {
            type: types.login,
            payload: user
        }
        dispatch(action);
        history.replace('/');

    }
    

    return (
        <div className="container">
            <h1>Login</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={handleLogin}>
                login
            </button>
        </div>
    )
}
