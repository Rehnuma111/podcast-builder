import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

const Trending = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "#f6e5ff", paddingBottom: "4rem", marginTop: "5rem" }}>
      <div>
        <h3 style={{ padding: "1rem 4rem 0 4rem", fontSize: "4rem" }}>
          Trending Podcasts
        </h3>
        <p style={{ padding: "0 4rem 0 4rem" }}>
          We have compiled a
          list of all our top podcasts to listen to. Have a look at our most
          popular podcast shows across diverse subjects including lifestyle,
          technology, education, sports, film, and many more. Listen to podcasts
          charting at the top!
        </p>
        <Slider
          {...settings}
          style={{ padding: "2rem", margin: "0 4rem 0 4rem" }}
        >
          <div>
            <img
              style={{ borderRadius: "10px" }}
              width="210px"
              src={
                "https://i.pinimg.com/564x/b9/6d/01/b96d01c81571b9049166b956308b9e1d.jpg"
              }
            />
          </div>
          <div>
            <img
              style={{ borderRadius: "10px" }}
              width="210px"
              src={
                "https://i.pinimg.com/564x/92/b6/d6/92b6d6550d3e7824fd82d67669346283.jpg"
              }
            />
          </div>
          <div>
            <img
              style={{ borderRadius: "10px" }}
              width="210px"
              src={
                "https://i.pinimg.com/564x/52/51/63/52516312dba374da422f9e856d471e37.jpg"
              }
            />
          </div>
          <div>
            <img
              style={{ borderRadius: "10px" }}
              width="210px"
              src={
                "https://i.pinimg.com/564x/0c/15/36/0c1536baee3520cd49f364f990a91aab.jpg"
              }
            />
          </div>
          <div>
            <img
              style={{ borderRadius: "10px" }}
              width="210px"
              src={
                "https://i.pinimg.com/564x/2d/74/6b/2d746bddb6e8cd4003637a66b070514a.jpg"
              }
            />
          </div>
          <div>
            <img
              style={{ borderRadius: "10px" }}
              width="210px"
              src={
                "https://i.pinimg.com/564x/8e/b0/ff/8eb0ff2341dbab123ae46a0268fc29d8.jpg"
              }
            />
          </div>
          <div>
            <img
              style={{ borderRadius: "10px" }}
              width="210px"
              src={
                "https://i.pinimg.com/564x/fd/5a/c1/fd5ac14ce9d05e138b99bd96c395d052.jpg"
              }
            />
          </div>
          <div>
            <img
              style={{ borderRadius: "10px" }}
              width="210px"
              src={
                "https://i.pinimg.com/564x/4c/b7/04/4cb7045a197e7786c0b2cf891a38fc27.jpg"
              }
            />
          </div>
        </Slider>
        <div className="d-flex justify-content-center mt-5">

          <NavLink to="/podcasts">
            <a
              className="btn  btn-lg py-3 px-5 mb-2 mb-md-0 me-md-2"
              href="#"
              role="button"
              aria-controls="#picker-editor"
              style={{ backgroundColor: "#9c27b0", color: "white" }}
            >
              Explore More
            </a>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Trending;
