import { Button, Card, CardContent, CardMedia, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app_config from "../config";
import "../css/alllistpodcast.css";
import img from "./images/podcast.jpg";

const AllListpodcast = () => {
  const url = app_config.api_url;
  const [podcastList, setPodcastList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchUsersData = () => {
    fetch(url + "/podcast/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPodcastList(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  const displayPodcast = () => {
    if (!loading) {
      return podcastList.map((podcast) => (
        <Card className="mt-5 ">
          <div className="row " bg-light>
            <div className="col-md-4">
              <CardMedia
                component="img"
                image={url + "/" + podcast.thumbnail}
                height={200}
              />
            </div>
            <div className="col-md-8">
              <CardContent>
                <h1 >{podcast.title}</h1>
                <p>{podcast.description}</p>
                {/* <p>by {podcast.author.username}</p> */}
                <Button variant="contained"
                  onClick={(e) => navigate("/listenPodcast/" + podcast._id)}
                >
                  Listen Podcast
                </Button>
              </CardContent>
            </div>
          </div>
        </Card>
      ));
    }
  };

  return (
    <>
      <Container>
        <h1 className="display-4">Browse Podcasts</h1>
        <hr />
        {displayPodcast()}
      </Container>
    </>
  );
};

export default AllListpodcast;
