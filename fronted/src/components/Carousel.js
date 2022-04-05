import { Button } from '@mui/material';
import React from 'react'
import { Carousel } from 'react-bootstrap';
import PodcastsIcon from '@mui/icons-material/Podcasts';

const carousel = () => {
    return (
        <div >
            <Carousel variant="light">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.millattackmusic.com/wp-content/uploads/2020/02/MillattackMusic_Recording_Podcast.jpg " style={{height:"90vh"}}
      alt="First slide"
    />
    <Carousel.Caption>
    <h1 className='head ' style={{marginTop:"-25rem"}}>Your  podcast's publishing platfrom </h1>
      <p className='para-head'>Record your audio and upload it to podcastmaker.We'll help you distribute your podacst to Apple podcasts,Spotify, and Google Podcasts  
      </p> 
      <div style={{textAlign:"center"}}>
       <Button variant="contained" color="success" className="2  w-25 " > Register</Button>
      <Button variant="contained" color="success" className="2 " > <PodcastsIcon/> Listen to podcast HERE</Button>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.millattackmusic.com/wp-content/uploads/2020/02/MillattackMusic_Recording_Podcast.jpg"  style={{height:"90vh"}}
      alt="Second slide"
    />
    <Carousel.Caption>
    <h1 className='head ' style={{marginTop:"-25rem"}}>Your  podcast's publishing platfrom </h1>
      <p className='para-head'>Record your audio and upload it to podcastmaker.We'll help you distribute your podacst to Apple podcasts,Spotify, and Google Podcasts  
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.millattackmusic.com/wp-content/uploads/2020/02/MillattackMusic_Recording_Podcast.jpg"  style={{height:"90vh"}}
      alt="Third slide"
    />
    <Carousel.Caption>
    <h1 className='head ' style={{marginTop:"-25rem"}}>Your  podcast's publishing platfrom </h1>
      <p className='para-head'>Record your audio and upload it to podcastmaker.We'll help you distribute your podacst to Apple podcasts,Spotify, and Google Podcasts  
      </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default carousel;