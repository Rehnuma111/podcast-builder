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

    <section className="overflow-hidden p-5">
      <article>
        <div style={{ fontWeight: "9rem", fontSize: "1rem" }}>
          <div className="title" style={{ fontSize: "3rem", fontWeight: "light" }}>
            {podcast.title}
          </div>
        </div>

        <CardMedia className="m-3  justify-content-center " style={{ borderRadius: "5px", textAlign: "center" }}
          component="img"
          image={url + "/" + podcast.thumbnail}
          height={300}
          width={100}
        />

        <div className="col-md-10 col-xs-12 mt-5">

          <audio src={url + "/" + podcast.file} controls style={{ width: "120%" }}></audio>
        </div>
        <h5 className="mt-4" style={{ lineHeight: "2", fontWeight: "light" }}>{podcast.description}</h5>
      </article>
    </section>

  );
};
export default ListenPodcast;
