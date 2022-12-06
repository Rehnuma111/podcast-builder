import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Typist from "react-typist";
import Trending from "./Trending";

const Home = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        // document.title = `You clicked ${count} times`;
        console.log("Count: " + count);
        setCount(1);
    }, [count]);
    return (
        <>
            <div id="preview" className="preview">
                <div style={{ display: "none" }} />
                <div>
                    <div data-draggable="true" style={{ position: "relative" }}>
                        <section
                            draggable="false"
                            className="overflow-hidden pt-0"
                            data-v-271253ee=""
                        >
                            <section className="mb-10">
                                {/* Background image */}
                                <div
                                    className="p-5 text-center bg-image"
                                    style={{
                                        backgroundImage:
                                            'url("https://images.unsplash.com/photo-1478737270239-2f02b77fc618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5NjI0M3wwfDF8c2VhcmNofDF8fHBvZGNhc3R8ZW58MHx8fHwxNjYwOTc2Mzg0&ixlib=rb-1.2.1&q=80&w=1080")',
                                        height: 500,
                                        backgroundSize: "cover",
                                        backgroundPosition: "50% 50%"
                                    }}
                                    aria-controls="#picker-editor"
                                />{" "}
                                {/* Background image */}
                                <div className="container">
                                    <div
                                        className="card mx-4 mx-md-5 text-center shadow-5-strong"
                                        style={{
                                            marginTop: "-170px",
                                            background: "hsla(0, 0%, 100%, 0.7)",
                                            backdropFilter: "blur(30px)"
                                        }}
                                    >
                                        <div className="card-body px-4 py-5 px-md-5">
                                            <h1 className="display-3 fw-bold ls-tight mb-4">
                                                {" "}
                                                <Typist avgTypingDelay={20} onTypingDone={() => setCount(0)}>
                                                    <span>Your podcast publishing&nbsp;</span> <span style={{ color: "#9c27b0" }}>platfrom .</span>{" "}{" "}
                                                    {/* <Typist.Backspace count={50} delay={200} /> */}
                                                </Typist>
                                            </h1>{" "}
                                            <NavLink to="/signup">
                                                <a
                                                    className="btn  btn-lg py-3 px-5 mb-2 mb-md-0 me-md-2"
                                                    href="#"
                                                    role="button"
                                                    aria-controls="#picker-editor"
                                                    style={{ backgroundColor: "#9c27b0", color: "white" }}
                                                >
                                                    Register Now
                                                </a>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <Trending />


                        </section>
                        {/* Grid container */}
                        <div className="container p-4 pb-0">
                            <form action="">
                                {/*Grid row*/}
                                <div className="row">
                                    {/*Grid column*/}
                                    <div className="col-auto mb-4 mb-md-0">
                                        <p className="pt-2">
                                            <h4>Sign up for our newsletter</h4>
                                        </p>
                                    </div>
                                    {/*Grid column*/}
                                    {/*Grid column*/}
                                    <div className="col-md-5 col-12 mb-4 mb-md-0">
                                        {/* Email input */}
                                        <div className="form-outline mb-4">
                                            <TextField style={{ width: "100%", marginBottom: "2rem" }} label="Email" variant="outlined"
                                                type="email"
                                                placeholder="Email"
                                                id="email"
                                            />
                                        </div>
                                    </div>
                                    {/*Grid column*/}
                                    {/*Grid column*/}
                                    <div className="col-auto mb-4 mb-md-0">
                                        {/* Submit button */}
                                        <button type="submit" className="btn  p-3 ml-5 w-100 " style={{ backgroundColor: "#9c27b0", color: "white" }}>
                                            Subscribe
                                        </button>
                                    </div>
                                    {/*Grid column*/}
                                </div>
                                {/*Grid row*/}
                            </form>
                        </div>
                        {/* Grid container */}
                        {/* Copyright */}
                    </div>
                </div>
            </div>


        </>
    );

};

export default Home;

