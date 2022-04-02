import { Button } from '@mui/material';
import '../css/home.css';
const Home = () => {
    return (
      <> 
      <div className="home-img1-bg ">
      {/* <img src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" /> */}
      <section className='hero-section'>
      <h1 className='head'>Start Your Podcast Today!</h1>
      <p className='para-head'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Ullam quisquam,Lorem ipsum dolor sit
      </p> 
      <div style={{textAlign:"center"}}>
      <Button variant="contained" color="success" className="2 " >Listen to podcast HERE</Button>
      </div>
      
      </section>
      </div>
            
     </>
    );
 
  };
  
  export default Home;

  