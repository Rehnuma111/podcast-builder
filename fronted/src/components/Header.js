import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to ="#">PodcastMaker</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
  
      <div className="collapse navbar-collapse" id="navbarColor02"  style={{float:"right"}}>
        <ul className="navbar-nav ml-auto "
        >
          
          <li className="nav-item">
            <NavLink className="nav-link" to ="/home">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to ="/addpodcast">Addpodcast</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to ="/Blogs">Blogs</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/allListpodcast">ALLlistpodcast</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">Signup</NavLink>
          </li>
        
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-sm-2" type="text" placeholder="Search"/>
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
  );
};

export default Header;