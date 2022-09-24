import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Publish from "./components/Publish";
import Podcasts from "./components/Podcasts";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ListenPodcast from "./components/listenPodcast";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Header />
     
      <Routes>
        <Route element={<Home />} path="/home" />
        <Route element={<Login />} path="/login" />
        <Route element={<Signup />} path="/signup" />       
        <Route element={<ListenPodcast />} path="/listenPodcast/:id" />
        <Route element={<Podcasts />} path="/podcasts" />
        <Route element={<Publish />} path="/publish" />
        <Route path="/" element={<Navigate replace to="/home" />} />       
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
