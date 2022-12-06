import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField, } from "@mui/material";
import { Formik } from "formik";
import ParticlesBg from "particles-bg";
import Swal from "sweetalert2";
import app_config from "../config";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import sample from "./images/Signup.png";
import { GoogleLogin } from "react-google-login";

const responseGoogle = response => {
    console.log(response);

};
const Signup = () => {

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const [showPassword, setShowPassword] = React.useState(false);

    const url = app_config.api_url;
    const signupForm = {
        username: "",
        email: "",
        password: "",
    };
    const SignupSubmit = (formdata) => {
        fetch(url + "/user/add", {
            method: "POST",
            body: JSON.stringify(formdata),
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => {
                console.log(res.status);
                if (res.status === 200) {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Registered Successfully",
                    });
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
            });
    };

    return (
        <div style={{ minHeight: "100vh" }}>
            <ParticlesBg type="cobweb" bg={true} />
            <section className="vh-100 " >
                <ParticlesBg type="cobweb" bg={true} />
                <div className="container h-100 ">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: 25 }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 bg-light p-4">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                Sign up
                                            </p>
                                            <Formik initialValues={signupForm} onSubmit={SignupSubmit}>
                                                {({ values, handleSubmit, handleChange }) => (
                                                    <form onSubmit={handleSubmit}>

                                                        <TextField style={{ width: "100%", marginBottom: "2rem" }} label="Username" variant="outlined"
                                                            type="text"
                                                            placeholder="Username"
                                                            value={values.username}
                                                            onChange={handleChange}
                                                            id="username" 
                                                            required
                                                            />

                                                        <TextField style={{ width: "100%", marginBottom: "2rem" }} label="Email" variant="outlined"
                                                            type="email"
                                                            placeholder="Email"
                                                            id="email"
                                                            value={values.email}
                                                            onChange={handleChange}
                                                            required
                                                             />

                                                        <FormControl style={{ width: "100%", marginBottom: "2rem" }} variant="outlined"  >
                                                            <InputLabel htmlFor="outlined-adornment-password" >
                                                                Password
                                                            </InputLabel>
                                                            <OutlinedInput
                                                                id="password"
                                                                placeholder="Password"
                                                                required
                                                                type={showPassword ? "text" : "password"}
                                                                value={values.password}
                                                                onChange={handleChange}
                                                                endAdornment={
                                                                    <InputAdornment position="end">
                                                                        <IconButton
                                                                            aria-label="toggle password visibility"
                                                                            onClick={e => setShowPassword(!showPassword)}
                                                                            edge="end"
                                                                        >
                                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                                        </IconButton>
                                                                    </InputAdornment>
                                                                }
                                                                label="Password"
                                                            />
                                                        </FormControl>

                                                        <p>
                                                            <input type="checkbox"></input>I agree with{" "}
                                                            <Link className="center " to="/">
                                                                Terms
                                                            </Link>{" "}
                                                            and<Link to="/">Policy</Link>{" "}
                                                        </p>
                                                        {/* <button
                                                            style={{ width: "92vh" }}
                                                            variant="contained"
                                                            className=" submit-btn "
                                                            type="submit"
                                                        >
                                                          
                                                        </button> */}

                                                        <button class="btn mt-2 ml-3 w-100 p-2" type="submit" style={{ backgroundColor: "#9c27b0", color: "white" }}>   Create an account</button>
                                                        <hr />
                                                        {/* <button
                                                            style={{ width: "92vh" }}
                                                            variant="contained"
                                                            className="login-google-btn mt-2 ml-3 w-100"
                                                        >
                                                            {" "}
                                                           
                                                        </button> */}
                                                        <GoogleLogin className="w-100 mx-auto center"
                                                            clientId="635127723306-isvukg1u5al1bgbrjr7crkbloc5g67p6.apps.googleusercontent.com"
                                                            onSuccess={responseGoogle}
                                                            onFailure={responseGoogle} />
                                                    </form>
                                                )}
                                            </Formik>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img
                                                src={sample}
                                                className="img-fluid"
                                                alt="Sample image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Signup;
