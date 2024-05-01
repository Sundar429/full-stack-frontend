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


const initialValues = {
    fullName: "",
    email: "",
    password: "",
    role: "ROLE_CUSTOMER"
}
const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch()
    const handleSubmit = (values) => {
        // console.log("Form values", values);
        dispatch(registerUser({userData:values,navigate}))
    }
    return (
        <div>

            <Typography variant="h5" className='text-center'>


                Register
            </Typography>

            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form>
                    <Field as={TextField}
                        name="fullName"
                        label="full name"
                        fullWidth
                        variant="outlined"
                        margin="normal"

                    />
                    <Field as={TextField}
                        name="email"
                        label="email"
                        fullWidth
                        variant="outlined"
                        margin="normal"

                    />
                    <Field as={TextField}
                        name="password"
                        label="password"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type="password"

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
                        >
                            <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                            <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>

                        </Field>
                    </FormControl>
                    <Button sx={{ mt: 2, padding: "1rem" }} fullWidth type='submit' variant="contained" >register</Button>
                </Form>


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