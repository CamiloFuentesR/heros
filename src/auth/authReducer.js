import { types } from "../types/types";

// const state = {
//     name: 'Camilo',
//     logged: true
// }

export const authReducer = (state = {}, action) => {

    const {name} = action.payload; // para guardar el nombre una vez que ha hecho logout
    switch (action.type) {
        case types.login:
            return{
                ...action.payload,
                logged: true
            }
        case types.logout:
            return{
                name,//no se usa, yo lo hice como ej:
                logged: false
            }
            
        default:
            return state;
    }
}