import { Card, Container } from "@mui/material";
import { useState } from "react";
import '../css/alllistpodcast.css';
import img from './images/podcast.jpg';


const AllListpodcast = () => {
  // const [podcastList, setPodcastList] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const fetchUsersData = () => {
  //   fetch(url + "/user/getall")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setPodcastList(data);
  //       setLoading(false);
  //     });
  // };

  // const displayPodcast = () =>{
  //   if(!loading){
  //     return podcastList.map((podcast)
  //       <Grid>

  //       </Grid 
  //   }

  return (
    <>
      <Container >
        <Card className="Card-1  ">
          <div className="row ">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-4">
                <img className="thumbnail " src={img} />
                </div>
                <div className="col-md-8">
                  right content
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis ratione iure rerum aperiam et facere vel, praesentium tempora dignissimos dolores
                    expedita qui dolorum dolor alias provident sit dolorem molestias dicta?</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <br></br>
        <Card className="Card-2  w-800 ">
          <div className="row ">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-4">
                <img className="thumbnail" src={img} />
                </div>
                <div className="col-md-8">
                  right content
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis ratione iure rerum aperiam et facere vel, praesentium tempora dignissimos dolores
                    expedita qui dolorum dolor alias provident sit dolorem molestias dicta?</p>
                </div>
              </div>

            </div>

          </div>
        </Card>
        <br></br>
        <Card className="Card-3  w-800 ">
          <div className="row ">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-4">
                <img className="thumbnail" src={img} />
                </div>
                <div className="col-md-8">
                  right content
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis ratione iure rerum aperiam et facere vel, praesentium tempora dignissimos dolores
                    expedita qui dolorum dolor alias provident sit dolorem molestias dicta?</p>
                </div>
              </div>

            </div>

          </div>
        </Card>
      </Container>
    </>
  );
};

export default AllListpodcast;