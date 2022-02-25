import { Button, InputAdornment, TextField } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from "react-router-dom";
import { Formik } from "formik";
import Swal from "sweetalert2";
import '../css/login.css';
import app_config from "../config";
import img from './images/podcast.jpg'

const Login = () => {
   
    const url = app_config.api_url;
    const loginForm = {
        email: "",
        password: "",

    };

    
    const LoginSubmit = (formdata) => {
        console.log(formdata);

        const reqOpt = {
            method: "POST",
            body: JSON.stringify(formdata),
            headers: {
              "Content-Type": "application/json",
            },

    };
    fetch(url + "/user/check-login", reqOpt)
    .then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "You have loggedin successfully!",
        });
      } else if (res.status === 300) {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Email or password is incorrect!",
        });
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};
    

    return (
        <>
            <div className="row">
                <div className="col-md-5  mx-auto card form-card container-fluid" id="form">
                    <Formik  initialValues={loginForm} onSubmit={LoginSubmit} >
                        {({ values, handleSubmit, handleChange }) => (
                            <form onSubmit={handleSubmit}>
                                <h1 className="text-center ">LOGIN</h1><hr/>
                                
                                {/* <Button variant="contained" className="mt-2 ml-4w w-100 " startIcon={<InstagramIcon />} >Instagram</Button> */}
                                
                                <button className="login-insta-btn mb-2 text-2"  ><InstagramIcon style={{marginRight:"8px"}}/>Continue With Spotify</button>
                
                                <br />
                                <button className="login-google-btn mb-1 text-3 "  ><GoogleIcon style={{marginRight:"14px"}}/>Continue with google</button>
                                
                                <br />

                                <div class="form-floating mt-2">
                                    <input
                                        placeholder="email"
                                        className="form-control"
                                        id="email"
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    <label for="email">Email Address</label>
                                </div>
                                <div class="form-floating mt-2 ">
                                    <input
                                        type="password"
                                        placeholder="password"
                                        className="form-control "
                                        id="password"
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                    <label for="email inputsm">Password</label>
                                </div>
                                <Link to='/'>Forget password ?</Link>
                                <Button variant="contained" className="mt-3 ml-3 w-100" type="submit">Login</Button>
                                <p className="mt-3">Don't have an account ? <Link to='/signup'>Signup Now</Link></p>

                            </form>
                        )}
                    </Formik>

                </div>
                {/* <div className="col-md-7 img-bg">
                    <img className="img" src={img} />
                    <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi deleniti officiis ad non sed impedit reiciendis, laborum omnis. Autem at ipsam unde mollitia odio nemo harum ratione impedit eveniet voluptatibus?</h6>
                </div> */}
            </div>
        </>

    );
};

export default Login;