import { Button, Grid, TextField } from "@mui/material";
import { Formik } from "formik";

export const SellerUpload:React.FC=()=>{

  return <>
   <Formik
            initialValues={{ productname: '', productprice: 0, productimage:'', description:'' }}
            validate={values => {
                interface Iermail {
                    email?: string
                }
                const errors: Iermail = {};
                
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                   
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
                            label="productname"
                            id="outlined-size-small"
                            defaultValue="small"
                            type="text"
                            name="productname"
                            value={values.productname}
                            margin="normal"
                            onChange={handleChange}

                        />
                        <TextField
                            label="productprice"
                            id="outlined-size-small"
                            defaultValue="small"
                            type="number"
                            name="productprice"
                            value={values.productprice}
                            margin="normal"
                            onChange={handleChange}

                        />
                        <TextField
                            label=""
                            id="outlined-size-small"
                            defaultValue="small"
                            type="file"
                            name="image"
                            value={values.productimage}
                            margin="normal"
                            onChange={handleChange}

                        />
                        <TextField
                            label="description"
                            id="outlined-size-small"
                            defaultValue="small"
                            type="text"
                            name="description"
                            value={values.description}
                            margin="normal"
                            onChange={handleChange}

                        />
                        
                        <Button type="submit" variant="contained" color="success">
                           upload
                        </Button>


                    </Grid>
                </form>
            )}
        </Formik>
      
  </>
}