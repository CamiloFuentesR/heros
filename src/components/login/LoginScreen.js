import React from 'react'

export const LoginScreen = ({history}) => {

    const handleLogin = () => {
        history.push('/');
        // history.replace('/'); al estar autenticado no puedes volver al login a menos que presioes logout
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
