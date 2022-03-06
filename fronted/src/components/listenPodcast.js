import ReactAudioPlayer from 'react-audio-player';
const   ListenPodcast = () => {
    return (
        <>
            <ReactAudioPlayer
                src="http://localhost:5000/music.mp3"
                autoPlay
                controls
            />

        </>
    )

}
export default ListenPodcast;

