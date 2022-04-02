import { useState } from "react";
import { useParams } from "react-router-dom";

// import ReactAudioPlayer from 'react-audio-player';
const ListenPodcast = () => {
  const [podcast, setPodcast] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  return (
    <>
      {/* <ReactAudioPlayer
                src="http://localhost:5000/music.mp3"
                autoPlay
                controls
            /> */}
    </>
  );
};
export default ListenPodcast;
