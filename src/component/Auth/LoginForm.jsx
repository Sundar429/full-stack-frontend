import React from 'react'
import Typography from '@mui/material/Typography'
import { TextField, Button } from '@mui/material'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { loginUser } from '../State/Authentication/Action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';  // Import Yup

const intialValues = {
    email: "",
    password: ""
}
// Define the validation schema using Yup
const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email format')  // Validate email format
        .required('Email is required'),  // Require email
    password: Yup.string()
        .required('Password is required')  // Require password
});
const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch()
    const handleSubmit = async(values) => {
        try {
            // console.log('Submitting form with values:', values);
            const result = await dispatch(loginUser({ userData: values, navigate }));
            // console.log('Received result from registration:', result);
            if (result.success) {
                // console.log('Login successful!');
                // alert('Login successful!');
                toast.success("Login successful!");
                 // Navigate to the dashboard after showing the toast
                //  setTimeout(() => {
                //     navigate('/dashboard');
                // }, 2000);
            } else {
                toast.error(result.error || "Login failed.");
            }
        } catch (error) {
            // console.error('An error occurred during registration:', error);
            toast.error("An error occurred.Please try again.");
        } 
    }
    return (
        <div>
            
           
            <ToastContainer position="top-center" autoClose={3000} closeOnClick pauseOnHover draggable />
            <Typography variant="h5" className='text-center'>


                Login
            </Typography>

            <Formik onSubmit={handleSubmit} 
            initialValues={intialValues}
            validationSchema={validationSchema}   >
                 {({ errors, touched }) => (
                    <Form>
                        {/* Email field */}
                        <Field
                            as={TextField}
                            name="email"
                            label="Email"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
                        />
                        {/* Password field */}
                        <Field
                            as={TextField}
                            name="password"
                            label="Password"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            type="password"
                            error={Boolean(touched.password && errors.password)}
                            helperText={touched.password && errors.password}
                        />
                        {/* Login button */}
                        <Button
                            sx={{ mt: 2, padding: '1rem' }}
                            fullWidth
                            type="submit"
                            variant="contained"
                            
                        >
                            Login
                        </Button>
                    </Form>
                )}


            </Formik>
            <Typography variant='body2' align='center' sx={{ mt: 3 }}>
                Don't have an account?
                <Button size='small' onClick={() => navigate("/account/register")}>
                    register
                </Button>
            </Typography>


        </div>
    )
}

export default LoginForm