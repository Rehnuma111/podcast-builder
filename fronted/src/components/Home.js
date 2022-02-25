import '../css/home.css';
import img from './images/podcast.jpg'
const Home = () => {
    return (
      <>
      
      <div className="row home-row ">
      {/* <div className="col-md-4">
      <img className="images" src={img} />
      </div> */}
      <div className="col-md-8">
      <h4 style={{textAlign :"center",marginTop:"20%"}} >PodcastMaker</h4>
      <h5 style={{marginTop:"10%"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
       Accusamus cumque fugit laudantium magni culpa quas voluptatum in,
      sequi voluptates harum at nisi deserunt totam, facilis ipsum molestias,
       hic expedita veniam quasi necessitatibus sed laboriosam aliquid? Dolorem culpa minus distinctio aut minima. 
       Eum aliquid perferendis hic natus illo odio rem exercitationem?</h5>
      </div>
      </div>
     




      <div className="row row-1-podcast mt-5">
        <div className="col-md-6">
        DGHGRFTH

        </div>
        <div className="col-md-6">
        RFHTREHTHJ

        </div>
      </div>

      <div className="row-2-bottom">
        <div className="col-md-6">
        DGHGRFTH

        </div>
        <div className="col-md-6">
        RFHTREHTHJ

        </div>
      </div>
      </>
    );
 
  };
  
  export default Home;