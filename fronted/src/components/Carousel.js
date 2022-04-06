import { Button } from '@mui/material';
import React from 'react'
import { Carousel } from 'react-bootstrap';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import { SiApplepodcasts } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const carousel = () => {
  return (
    <div >
      <Carousel variant="light">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.millattackmusic.com/wp-content/uploads/2020/02/MillattackMusic_Recording_Podcast.jpg " style={{ height: "90vh" }}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className='head ' style={{ marginTop: "-25rem" }}>Your  podcast's publishing platfrom </h1>
            <p className='para-head'>Record your audio and upload it to podcastmaker.We'll help you distribute your podacst to Apple podcasts,Spotify, and Google Podcasts
            </p>
            <div style={{ textAlign: "center" , marginBottom:"4rem"}}>
              <Button variant="contained" color="success" className="2 " > <PodcastsIcon /> Listen to podcast HERE</Button>
            </div>
            <h5>Follow Us:</h5>
            <FaFacebook className='m-1' style={{ width: "4rem", height: "4vh" }} />
            <SiApplepodcasts className='m-1' style={{ width: "4rem", height: "4vh" }} />
            <FaYoutube className='m-1' style={{ width: "4rem", height: "4vh" }} />
            <FaTwitter className='m-1' style={{ width: "4rem", height: "4vh" }} />
            <FaInstagram className='m-1' style={{ width: "4rem", height: "4vh" }} />
             
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.millattackmusic.com/wp-content/uploads/2020/02/MillattackMusic_Recording_Podcast.jpg" style={{ height: "90vh" }}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 className='head ' style={{ marginTop: "-25rem" }}>Your  podcast's publishing platfrom </h1>
            <p className='para-head'>Record your audio and upload it to podcastmaker.We'll help you distribute your podacst to Apple podcasts,Spotify, and Google Podcasts
            </p>
            <div style={{ textAlign: "center" , marginBottom:"4rem"}}>
              <Button variant="contained" color="success" className="2 " > <PodcastsIcon /> Listen to podcast HERE</Button>
            </div>
            <h5>Follow Us:</h5>
            <FaFacebook className='m-1' style={{ width: "4rem", height: "4vh" }} />
            <SiApplepodcasts className='m-1' style={{ width: "4rem", height: "4vh" }} />
            <FaYoutube className='m-1' style={{ width: "4rem", height: "4vh" }} />
            <FaTwitter className='m-1' style={{ width: "4rem", height: "4vh" }} />
            <FaInstagram className='m-1' style={{ width: "4rem", height: "4vh" }} />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.millattackmusic.com/wp-content/uploads/2020/02/MillattackMusic_Recording_Podcast.jpg" style={{ height: "90vh" }}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 className='head ' style={{ marginTop: "-25rem" }}>Your  podcast's publishing platfrom </h1>
            <p className='para-head'>Record your audio and upload it to podcastmaker.We'll help you distribute your podacst to Apple podcasts,Spotify, and Google Podcasts
            </p>
            <div style={{ textAlign: "center" , marginBottom:"4rem"}}>
              <Button variant="contained" color="success" className="2 " > <PodcastsIcon /> Listen to podcast HERE</Button>
            </div>
            <h5>Follow Us:</h5>
            <FaFacebook className='m-1' style={{ width: "4rem", height: "4vh" }} />
            <SiApplepodcasts className='m-1' style={{ width: "4rem", height: "4vh" }} />
            <FaYoutube className='m-1' style={{ width: "4rem", height: "4vh" }} />
            <FaTwitter className='m-1' style={{ width: "4rem", height: "4vh" }} />
            <FaInstagram className='m-1' style={{ width: "4rem", height: "4vh" }} />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default carousel;