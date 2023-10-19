
import './App.css';
import { useState } from 'react';
import ReactPlayer from 'react-player'
import MovieTrailer from 'movie-trailer';



function App() {
  const [video, setVideo] = useState("inception");
  const [videoURL, setVideoURL] = useState("");

  function handleSearch() {
    MovieTrailer(video).then((resource) =>{
      setVideoURL(resource);
    });

  }
  return (
    <div className="App">
      <div className='search-box'>
      <label>
        search for any movies here: { " "}
      </label>
      <input type ="text" onChange={(e) => {setVideo(e.target.value)}} />

      <button onClick = {() => {handleSearch()}}>
        Search
      </button>
</div>
      <ReactPlayer url={videoURL} controls={true} />
    </div>
  );
}

export default App;
