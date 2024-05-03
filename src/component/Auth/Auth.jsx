import React from 'react'
import {Modal,Box } from '@mui/material';
import {useLocation, useNavigate } from "react-router-dom";
import { style } from '../Cart/Cart';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Auth = () => {

    const location=useLocation();
    const navigate=useNavigate();
    const handleOnClose=()=>{
        navigate("/")
    }
    return (
        <>
 {/* Place ToastContainer at a high level */}
 <ToastContainer position="top-center" autoClose={3000} />

            <Modal   onClose={handleOnClose} open={
                  
                location.pathname==="/account/register"
                || location.pathname==="/account/login"
            
                
            }>
                <Box sx={style}>
                    {  location.pathname==="/account/register"?<RegisterForm/>:<LoginForm/>}
                </Box>

            </Modal>

        </>
    )
}

export default Auth