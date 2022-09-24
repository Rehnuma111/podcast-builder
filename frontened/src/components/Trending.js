import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

const Trending = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div style={{ backgroundColor: "#f6e5ff", paddingBottom: "2rem" }}>
      <div>
        <h3 style={{ padding: "1rem 4rem 0 4rem", fontSize: "4rem" }}>
          Trending Podcasts
        </h3>
        <p style={{ padding: "0 4rem 0 4rem" }}>
          New to manicpod? We’ve been around for a while! We have compiled a
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
                "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/4101223/4101223-1615243685661-c75914d771398.jpg"
              }
            />
          </div>
          <div>
            <img
              style={{ borderRadius: "10px" }}
              width="210px"
              src={
                "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/4101223/4101223-1615243685661-c75914d771398.jpg"
              }
            />
          </div>
          <div>
            <img
              style={{ borderRadius: "10px" }}
              width="210px"
              src={
                "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/4101223/4101223-1615243685661-c75914d771398.jpg"
              }
            />
          </div>
          <div>
            <img
              style={{ borderRadius: "10px" }}
              width="210px"
              src={
                "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/4101223/4101223-1615243685661-c75914d771398.jpg"
              }
            />
          </div>
          <div>
            <img
              style={{ borderRadius: "10px" }}
              width="210px"
              src={
                "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/4101223/4101223-1615243685661-c75914d771398.jpg"
              }
            />
          </div>
          <div>
            <img
              style={{ borderRadius: "10px" }}
              width="210px"
              src={
                "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/4101223/4101223-1615243685661-c75914d771398.jpg"
              }
            />
          </div>
          <div>
            <img
              style={{ borderRadius: "10px" }}
              width="210px"
              src={
                "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/4101223/4101223-1615243685661-c75914d771398.jpg"
              }
            />
          </div>
          <div>
            <img
              style={{ borderRadius: "10px" }}
              width="210px"
              src={
                "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/4101223/4101223-1615243685661-c75914d771398.jpg"
              }
            />
          </div>
        </Slider>
        <div className="d-flex justify-content-center">
          <NavLink to="/podcasts">
            <a
              className="btn  btn-lg py-3 px-5 mb-2 mb-md-0 me-md-2"
              href="#"
              role="button"
              aria-controls="#picker-editor"
              style={{ backgroundColor: "#9c27b0", color: "white" }}
            >
              Get started
            </a>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Trending;
