import { GET_USERS_ORDERS_FAILURE, GET_USERS_ORDERS_REQUEST, GET_USERS_ORDERS_SUCCESS } from "./ActionType";


const initialState = {

   
    loading: false,
    error: null,
    orders: [],

}


export const orderReducer=(state=initialState,{type,payload}) =>{
    switch (type) {
        case GET_USERS_ORDERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_USERS_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                orders:payload
            }

        case GET_USERS_ORDERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload
            }


            
           
    
        default:
            return state;
    }
}