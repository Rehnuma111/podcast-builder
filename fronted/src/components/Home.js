
import '../css/home.css';
import Carousel from "./Carousel";
import AllListPodcast  from "./AllListPodcast";

const Home = () => {
  return (
    <>
      {/* <div className="home-img1-bg ">
      
      <section className='hero-section'>
      
    
       
      </section>     
      </div> */}
      <Carousel />

     {/* LATEST EPISODES */}

      <div className="row">
     <h1>Latest Episodes</h1>
      <AllListPodcast/>


        
      </div>

    </>
  );

};

export default Home;

