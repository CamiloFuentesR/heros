import { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { AppRouter } from './routers/AppRouter'
import { authReducer } from './auth/authReducer'


//funcion para evalaur el local storege
const init = () => {
    //si existe retorn el storage y si no retorna logged false
    return JSON.parse(localStorage.getItem('user')) || {
        logged: false
    };
}



export const HeroesApp = () => {
    //                                   reducer,initialState
    const [user, dispatch] = useReducer(authReducer, {}, init);
    console.log(user)
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    
    }, [user]);
    console.log(user)
    return (
        //le estoy pasando el reducer a traves de un context a toda la aplicacion debido a que es un high order component   
        <AuthContext.Provider value={{user,dispatch}}>
            <AppRouter />
        </AuthContext.Provider>

    )
}
