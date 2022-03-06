import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import AddPodcast from "./components/AddPodcast";
import AllListPodcast from "./components/AllListPodcast";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ListenPodcast from "./components/listenPodcast";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/home" />
        <Route element={<Login />} path="/login" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Blogs />} path="/Blogs" />
        <Route element={<ListenPodcast />} path="/listenPodcast" />
        <Route element={<AllListPodcast />} path="/allListpodcast" />
        <Route element={<AddPodcast />} path="/addpodcast" />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
   
    
