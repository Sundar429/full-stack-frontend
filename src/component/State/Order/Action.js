import {  api } from "../../Config/api";
import { CLEAR_CART } from "../Cart/ActionType";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USERS_ORDERS_FAILURE, GET_USERS_ORDERS_REQUEST, GET_USERS_ORDERS_SUCCESS } from "./ActionType";

export const createOrder = (reqData) => {
    return async (dispatch) => {
        // Dispatch the request action
        dispatch({ type: CREATE_ORDER_REQUEST });

        try {
            // Make the API request
            const response = await api.post("/api/order", reqData.order, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });

            const data = response.data;

            // Check the response data
            if (data && data.successUrl) {
                // Redirect to the success URL
                window.location.href = data.successUrl;
            }

            // Dispatch the success action
            dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });

            // Return the data to the caller
            return data;
        } catch (error) {
            // Dispatch the failure action
            dispatch({ type: CREATE_ORDER_FAILURE, payload: error });

            // Re-throw the error to the caller
            throw error;
        }
    };
};






export const getUsersOrder=(jwt)=>{

    return async(dispatch)=>{
        dispatch({type:GET_USERS_ORDERS_REQUEST});
        try {
            const{data}=await api.get("/api/order/user",{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });

        
            // console.log("users order",data);
            dispatch({type:GET_USERS_ORDERS_SUCCESS,payload:data})
           
            
        } catch (error) {
            // console.log("catch error",error);
            dispatch({type:GET_USERS_ORDERS_FAILURE,payload:error})
            
        }
    }
    
}
export const clearCart = () => ({
    type: CLEAR_CART,
});