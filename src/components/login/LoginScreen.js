import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    //este es un hook de react-router-dom, y me provee el history ya que el navbar no esta dentro de las rutas, por ende no hereda el history como los otros componentes, esta es la solucion sencila
    console.log(history)

    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {
        // history.push('/');
        // history.replace('/'); //al estar autenticado no puedes volver al login a menos que presioes logout
        //se puede hacer destructuring en el use cotnext => ej: en el componente navBar hay un ejemplo ;)
        const lastPath = localStorage.getItem('lastPath') || '/';
        console.log(lastPath)

        const user = {
            name: 'Camilo Fuentes',
        }
        const action = {
            type: types.login,
            payload: user
        }
        dispatch(action);
        history.replace(lastPath);


    }
    

    return (
        <div className="container animate__animated animate__slideInDown">
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
