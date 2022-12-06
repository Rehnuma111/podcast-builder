import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import Swal from "sweetalert2";
import app_config from "../config";
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import sample from "./images/podcast2.png";



const Login = () => {

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const [showPassword, setShowPassword] = React.useState(false);


  const handleChange2 = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };


  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const url = app_config.api_url;
  const loginForm = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

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
          }).then(() => {
            navigate("/publish");
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
        sessionStorage.setItem("user", JSON.stringify(data));
      });
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <section className="vh-100 p-5 mt-5">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-6 col-lg-6 col-xl-5">
              <img
                src={sample}
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <Formik initialValues={loginForm} onSubmit={LoginSubmit}>
                {({ values, handleSubmit, handleChange }) => (
                  <form onSubmit={handleSubmit}>
                 
                    <h1 style={{ textAlign: "center" }}>Log In</h1>
                    <hr />
                    <br />

                    <TextField style={{ width: "100%", marginBottom: "2rem" }} label="Email" variant="outlined"
                      type="email"
                      placeholder="Email"
                      id="email"
                      value={values.email}
                      onChange={handleChange} />

                    <FormControl style={{ width: "100%", marginBottom: "2rem" }} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        placeholder="Password"
                        id="password"
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
                    <Button
                      variant="contained"
                      className="mt-3 ml-3 w-100"
                      type="submit"
                      style={{backgroundColor:"#9c27b0"}}
                    >
                      Login
                    </Button>
                    <p className="mt-3">
                      Don't have an account ? <Link to="/signup">Signup Now</Link>
                    </p>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>


      </section>


    </div>
  );
};

export default Login;



