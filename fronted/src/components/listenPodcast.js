import { CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import app_config from "../config";

const ListenPodcast = () => {
  const url = app_config.api_url;
  const [podcast, setPodcast] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const fetchPodcastId = () => {
    fetch(url + "/podcast/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPodcast(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPodcastId();
  }, []);

  return (
    <div style={{ minHeight: "100vh" }} >
      <div className="container p-5 mt-5" style={{ height:"70vh", backgroundColor: "#0f0b4d" }}>
        <div className="card mt-5">
          <div className="row ">
            <div className="col-md-2 col-xs-12 ">
              <CardMedia className="m-3 " style={{ borderRadius: "5px" }}
                component="img"
                image={url + "/" + podcast.thumbnail}
                height={250}
              />

            </div>
            <div className="col-md-10 col-xs-12 ">
              <div className="m-4">
                <div style={{ fontWeight: "9rem", fontSize: "1rem" }}>
                  <div className="title" style={{ fontSize: "3rem", fontWeight: "bolder" }}>
                    {podcast.title}
                  </div>

                </div>

                <p className="mt-4">{podcast.description}</p>
                <audio src={url + "/" + podcast.file} controls style={{ width: "100%" }}></audio>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListenPodcast;
