import { Formik } from "formik";
import { Button} from "@mui/material";
import '../css/signup.css';
import { Link } from "react-router-dom";

const Signup = () => {
    
    const signupForm = {
        email: "",
        username: "",
        password: "",
    };

 
    const SignupSubmit = (formdata) => {
        console.log(formdata);
    };


    return (

        <div className="bg-1">
         <h1 style={{textAlign : "center"}}>PODCASTlogo</h1>
            <div className="col-md-4 mx-auto ">
               <div className = "container mycard">
                 
                        <Formik initialValues={signupForm} onSubmit={SignupSubmit}>
                            {({ values, handleSubmit, handleChange }) => (
                                <form onSubmit={handleSubmit} >
                                    <h1 className="text-center">Signup Here</h1>
                                    
                                    <input
                                        placeholder="username"
                                        className="form-control mb-2"
                                        id="username"
                                        value={values.username}
                                        onChange={handleChange}
                                    />
                                  
                                    
                                    <input
                                        placeholder="email"
                                        className="form-control mb-2"
                                        id="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        type="email"
                                        required
                                    />
                                   
                                    
                                    <input
                                        type="password"
                                        placeholder="password"
                                        className="form-control mb-2"
                                        id="password"
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                   
                                   
                                    <p><input type="checkbox"></input>I agree with <Link to='/'>Terms</Link> and<Link to='/'>Policy</Link> </p>
                                    
                                    <Button variant="contained" className="mt-2 ml-3 w-100" type="submit">Register to continue</Button>
                                    <hr></hr>
                                    <p>Already have an account?<Link to='/login'>Login</Link></p>
                                </form>
                            )}
                        </Formik>
                        </div> 
            </div>
        </div>

    );
};

export default Signup;