import React from 'react'
import Typography from '@mui/material/Typography'
import { TextField, Button } from '@mui/material'
import { Form, Formik, Field } from 'formik'
import { useNavigate } from "react-router-dom";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { registerUser } from '../State/Authentication/Action';
import {useDispatch} from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    fullName: Yup.string()
        .required('Full name is required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    role: Yup.string()
        .required('Role is required'),
});
const initialValues = {
    fullName: "",
    email: "",
    password: "",
    role: "ROLE_CUSTOMER"
}
const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch()
    const handleSubmit = async(values) => {
        try {
            const result = await dispatch(registerUser({ userData: values, navigate }));
    
            // Check if the registration was successful
            if (result.success) {
                // Show success toast notification
                toast.success('Registration successful!');
    
                // // Navigate to another route if needed
                // navigate('/dashboard');
            } else {
                // Show error toast if registration fails
                toast.error(result.error || 'Registration failed.');
            }
        } catch (error) {
            // Handle unexpected errors
            toast.error('An error occurred. Please try again.');
        }
    }
    return (
        <div>
  <ToastContainer position="top-center" autoClose={3000} closeOnClick pauseOnHover draggable />
            <Typography variant="h5" className='text-center'>


                Register
            </Typography>

            <Formik onSubmit={handleSubmit} initialValues={initialValues}
             validationSchema={validationSchema}>
               {({ errors, touched }) => ( <Form>
                    <Field as={TextField}
                        name="fullName"
                        label="full name"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        error={Boolean(touched.fullName && errors.fullName)}
                        helperText={touched.fullName && errors.fullName}

                    />
                    <Field as={TextField}
                        name="email"
                        label="email"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}

                    />
                    <Field as={TextField}
                        name="password"
                        label="password"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type="password"
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}

                    />
                    <FormControl margin="normal" fullWidth>
                        <InputLabel id="role-simple-select-label">Role</InputLabel>
                        <Field
                            as={Select}

                            labelId="role-simple-select-label"
                            id="demo-simple-select"
                            name="role"
                            // value={age}
                            label="Role"
                        // onChange={handleChange}
                        error={Boolean(touched.role && errors.role)}
                        helperText={touched.role && errors.role}
                        >
                            <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                            <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>

                        </Field>
                    </FormControl>
                    <Button sx={{ mt: 2, padding: "1rem" }} fullWidth type='submit' variant="contained" >register</Button>
                </Form>
  )}

            </Formik>
            <Typography variant='body2' align='center' sx={{ mt: 3 }}>
                if have an account already?
                <Button size='small' onClick={() => navigate("/account/login")}>
                    login
                </Button>
            </Typography>


        </div>
    )
}

export default RegisterForm