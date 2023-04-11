import { Button, Grid, TextField } from "@mui/material";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom"; 
export const SimpleRegisterform: React.FC = () => {

    return <>

        <RegisterWrapper />
    </>
}

const RegisterWrapper: React.FC = () => {
let navigate=useNavigate()

    return <>
        <Formik
            initialValues={{ email: '', password: '', name: '', iseller: '' }}
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
                    navigate('/notes/login')
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
                        <h2> Please Register yourself</h2>
                        <TextField
                            label="enter user name"
                            id="outlined-size-small"
                            defaultValue="small"
                            type="text"
                            name="name"
                            value={values.name}
                            margin="normal"
                            onChange={handleChange}


                        />
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
                        <TextField
                            label="are you a seller"
                            id="outlined-size-small"
                            defaultValue="small"
                             type="text"
                            name="iseller"
                            value={values.iseller}
                            margin="normal"
                            onChange={handleChange}

                        />
                        <Button type="submit" variant="contained" color="success">
                            Register
                        </Button>


                    </Grid>
                </form>
            )}
        </Formik>
    </>
}