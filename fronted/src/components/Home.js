import { Button, Card } from '@mui/material';
import '../css/home.css';
import PodcastsIcon from '@mui/icons-material/Podcasts';
const Home = () => {
    return (
      <> 
      <div className="home-img1-bg ">
      {/* <img src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" /> */}
      <section className='hero-section'>
      <h1 className='head'>Your  podcast's publishing platfrom </h1>
      <p className='para-head'>Record your audio and upload it to podcastmaker.We'll help you distribute your podacst to Apple podcasts,Spotify, and Google Podcasts  
      </p> 
      
      <div style={{textAlign:"center"}}>
      <Button variant="contained" color="success" className="2 " > <PodcastsIcon/> Listen to podcast HERE</Button>
      </div>
      </section>
      </div>


      <div className="row">
        <div className="col-md-6 home-img1-bg ">
          
        </div>
        <div className="col-md-6">
          <h1>LATEST EPISODES</h1>
           <div className="row">
             <div className="col-md-4">
             <Card>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Minima distinctio facilis quas.</p>
             </Card>
             </div>
             <div className="col-md-4">
               
             </div>
             <div className="col-md-4">               
             </div>
           </div>
        </div>
      </div>
            
     </>
    );
 
  };
  
  export default Home;

  