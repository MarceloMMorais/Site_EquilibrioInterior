import React from "react";
import Routers from "./components/Routers";
import ReactAudioPlayer from "react-audio-player";
import Music from "./music/Musica_site.mp3";

function App() {
  return (
    <div>
      <ReactAudioPlayer src={Music} autoPlay volume={0.2} />
      <Routers />
    </div>
  );
}

export default App;
