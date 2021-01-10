import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const [{ username,password }, handleInputChange] = useForm({
        username: '',
        password: ''
    });

    //este es un hook de react-router-dom, y me provee el history ya que el navbar no esta dentro de las rutas, por ende no hereda el history como los otros componentes, esta es la solucion sencila
    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        // history.push('/');
        // history.replace('/'); //al estar autenticado no puedes volver al login a menos que presioes logout
        //se puede hacer destructuring en el use cotnext => ej: en el componente navBar hay un ejemplo ;)
        const lastPath = localStorage.getItem('lastPath') || '/';
        
        const user = {
            name: username,
            password
        }
        
        const usuario = localStorage.getItem('user');
        const userBack = JSON.parse(usuario);
        //si el nuevo usuario es el mismo que el ultimo te devuelve a la pagina que estabas, de lo contrario te manda a marvel
        let action={
            type:types.logout,
            payload: ''
        };

        //validar que username no este vacio
        if(username.trim()!== "" && password !== ""){
             action = {
                type: types.login,
                payload: user
            }
        dispatch(action);

            
        (userBack.name === username)
        ?
        history.replace(lastPath)
        :
        history.push("/")
        }else{
            const div = document.createElement('div');
            div.textContent= "agua";

            // div.className = 'alert alert-danger';
             div.dataset.id ='alert alert-danger'
            // div.textContent = 'debe llenar los campos';
            const fondo = document.querySelector('.fondo');
            const select = document.querySelector('.container');
            console.log(select)
            // div.innerHTML ='<div className="alert alert-danger>Debe llenar los campos </div>';

            fondo.insertBefore(div,select );
            console.log(div)

        }
        dispatch(action);

    }
    return (
        <div className="fondo">
            
        <div className="container">
            
            <div className="d-flex justify-content-center h-100">
                <div className="card card1">
                    <div className="card-header">
                        <h3>Sign In</h3>
                        <div className="d-flex justify-content-end social_icon">
                            <span><i className="fab fa-facebook-square"></i></span>
                            <span><i className="fab fa-google-plus-square"></i></span>
                            <span><i className="fab fa-twitter-square"></i></span>
                        </div>
                    </div>
                    
                        <div className="card-body">
                            
                            <form>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="username"
                                        name='username'
                                        autoComplete="off"
                                        value={username}
                                        onChange={handleInputChange}
                                        />
                            
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="password"
                                        name="password"
                                        autoComplete="off"
                                        value={password}
                                        onChange={handleInputChange}
                                        />
                        </div>
                                    <div className="row align-items-center remember">
                                        <input type="checkbox"/>Remember Me
                        </div>
                                        <div className="form-group">
                                            
                                            <input 
                                                type="submit" 
                                                value="Login" 
                                                className="btn float-right login_btn"
                                                onClick={handleLogin}
                                                />
                                                
                        </div>
                        </form>
                                    </div>
                                    <div className="card-footer">
                                        <div className="d-flex justify-content-center links">
                                            Don't have an account?<Link to="#">Sign Up</Link>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <Link to="#">Forgot your password?</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            { 
                            (username.trim()=== "" || password === "")
                            &&
                            <div className="alert alert-danger" role="alert">debe llenar los campos</div>}
    </div>
    </div>
    )
}
