import { Button, Grid, TextField } from "@mui/material";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

export const UserLoginform:React.FC=()=>{
let navigate=useNavigate()
    return <>
    <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                interface Iermail {
                    email?: string
                }
                const errors: Iermail = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    navigate('/notes/home')
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ handleChange, handleSubmit, values, }) => (

                <form onSubmit={handleSubmit}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <h2> Please Login </h2>
                        
                        <TextField
                            label="enter user email"
                            id="outlined-size-small"
                            defaultValue="small"
                            type="email"
                            name="email"
                            value={values.email}
                            margin="normal"
                            onChange={handleChange}

                        />
                        <TextField
                            label="enter user password"
                            id="outlined-size-small"
                            defaultValue="small"
                            type="password"
                            name="password"
                            value={values.password}
                            margin="normal"
                            onChange={handleChange}

                        />
                        
                        <Button type="submit" variant="contained" color="success">
                            Login
                        </Button>


                    </Grid>
                </form>
            )}
        </Formik>
    </>
}