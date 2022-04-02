import { Formik } from "formik";
import { Button } from "@mui/material";
import "../css/signup.css";
import { Link } from "react-router-dom";
import app_config from "../config";
import Swal from "sweetalert2";

const Signup = () => {
  const url = app_config.api_url;

  const signupForm = {
    email: "",
    username: "",
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
    <div className="bg-1">
      <div className="row">
        <div className="col-md-8">
        <img  className="img-signup " src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
        </div>
        <div className="col-md-4">
          <div className="container-fluid mycard">
            <Formik initialValues={signupForm} onSubmit={SignupSubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <h1 className="text-center">Sign Up </h1>
                  <input
                    placeholder="username"
                    className="form-control mb-2"
                    id="username"
                    value={values.username}
                    onChange={handleChange}
                    type="text"
                   
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
                  <p>
                    <input type="checkbox"></input>I agree with{" "}
                    <Link to="/">Terms</Link> and<Link to="/">Policy</Link>{" "}
                  </p>
                  <Button
                    variant="contained"
                    className="mt-2 ml-3 w-100"
                    type="submit"
                  >
                    Register to continue
                  </Button>
                  <hr></hr>
                  <p>
                    Already have an account?<Link to="/login">Login</Link>
                  </p>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Signup;
