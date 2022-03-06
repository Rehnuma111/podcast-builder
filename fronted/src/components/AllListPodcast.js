import { Card, CardContent, CardMedia, Container } from "@mui/material";
import { useEffect, useState } from "react";
import app_config from "../config";
import "../css/alllistpodcast.css";
import img from "./images/podcast.jpg";

const AllListpodcast = () => {
  const url = app_config.api_url;
  const [podcastList, setPodcastList] = useState([]);
  const [loading, setLoading] = useState(true);

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
        <Card className="mt-5">
          <div className="row bg-warning">
            <div className="col-md-4">
              <CardMedia
                component="img"
                image={url + "/" + podcast.thumbnail}
                height={200}
              />
            </div>
            <div className="col-md-8">
              <CardContent>
                <h1>{podcast.title}</h1>
                <p> </p>
                
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
