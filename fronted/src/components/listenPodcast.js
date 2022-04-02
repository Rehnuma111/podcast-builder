import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import app_config from "../config";

const ListenPodcast = () => {
  const url = app_config.api_url;
  const [podcast, setPodcast] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const fetchPodcastId = () => {
    fetch(url + "/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPodcast(data);
        setLoading(false);
      });
  };

  useEffect(()=>{
    fetchPodcastId();
  },[]);

  return (
    <>
       <audio src={url + "/" + podcast.file}></audio>
      
    </>
  );
};
export default ListenPodcast;
