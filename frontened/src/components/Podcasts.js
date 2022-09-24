import { Button, Card, CardContent, CardMedia, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app_config from "../config";
import "../css/Allistpodcast.css";
const Podcasts = () => {

  const url = app_config.api_url;
  const [podcastList, setPodcastList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");

  const fetchUsersData = () => {
    fetch(url + "/podcast/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPodcastList(data);
        setLoading(false);
      });
  };

  const searchPodcast = () => {
    fetch(url + "/podcast/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (filter) {
          setPodcastList(data.filter(podcast => (podcast.title.toLowerCase().includes(filter.toLowerCase()))))
        } else {
          setPodcastList(data);
        }
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchUsersData();
  }, []);

  const displayPodcast = () => {
    if (!loading) {
      return podcastList.map((podcast) => (
        <Card className="mt-5 p-5 bg-dark">
          <div className="row " bg-light>
            <div className="col-md-4">
              <CardMedia
                component="img"
                image={url + "/" + podcast.thumbnail}
                height={200}
              />
            </div>
            <div className="col-md-8">
              <h1 style={{ fontSize: "2.5rem", fontWeight: "bolder", color: "white" }}>{podcast.title}</h1>
              <p style={{ color: "white", marginTop: "2rem" }}>{podcast.description.substring(0, 200)} ...</p>
              {/* <p>by {podcast.author.username}</p> */}
              <Button variant="contained"  style={{backgroundColor:"#9c27b0", color:"white"}} className="p-2.5 mx-auto"
                onClick={(e) => navigate("/listenPodcast/" + podcast._id)}
              ><i className="fas fa-podcast"></i>&nbsp;&nbsp; ListenPodcast
              </Button>
            </div>
          </div>
        </Card>
      ));
    }
  };

  return (
    <>

      <div class="container">
        <div class="row height d-flex justify-content-center align-items-center">
          <div class="col-md-8">
            <div class="search">
              <i class="fa fa-search"></i>
              <input type="text" class="form-control" placeholder="Search podcast" onChange={e => setFilter(e.target.value)} />
              <button onClick={searchPodcast} type="button"  style={{backgroundColor:"#9c27b0", color:"white", border:"none", borderRadius:"5px"}}>Search</button>
            </div>
          </div>
        </div>
      </div>

      <Container style={{ minHeight: "100vh" }}>
        {/* <h1 className="display-4">Browse Podcasts</h1> */}
        <hr />
        {displayPodcast()}
      </Container>




    </>
  );
};

export default Podcasts;
