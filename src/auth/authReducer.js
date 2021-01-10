import { types } from "../types/types";

// const state = {
//     name: 'Camilo',
//     logged: true
// }

export const authReducer = (state = {}, action) => {

    const {name} = action.payload;
    switch (action.type) {
        case types.login:
            return{
                ...action.payload,
                logged: true
            }
        case types.logout:
            return{
                name,
                logged: false
            }
            
        default:
            return state;
    }
}