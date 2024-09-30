import React, { useState } from "react";
import "./App.css";
import gitar from "./assets/gitar.jpg";
import flute from "./assets/flute.jpg";
import drum from "./assets/drum.jpg";
import tal from "./assets/tal.jpg";
import piano from "./assets/piano.jpg";

import gitarMusic from "./assets/gitar music.mp3";
import fluteMusic from "./assets/flute.mp3";
import drumMusic from "./assets/drums music.mp3";
import talMusic from "./assets/ambin music.mp3";
import pianoMusic from "./assets/piano music.mp3";

function App() {
  const [currentAudio, setCurrentAudio] = useState(null);

  const playSound = (music) => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    let audio = new Audio(music);
    audio.play();

    setCurrentAudio(audio);
  };

  return (
    <>
      <div
        style={{
          boxShadow: "0px 0px 50px #fbda99",
          outline: "1px solid #fbda99",
          outlineOffset: "20px",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            fontSize: "6rem",
            fontStyle: "italic",
            color: "#fbda99",
            textAlign: "center",
            textShadow: "4px 4px 5px black",
          }}
        >
          Music kit
        </h1>
      </div>
{/* Music Buttons */}
      <div className="app">
        <div className="button-container">
          <button className="btn" onClick={() => playSound(gitarMusic)}>
            <img src={gitar} alt="Drum 1" />
          </button>
          <button className="btn" onClick={() => playSound(fluteMusic)}>
            <img src={flute} alt="Drum 2" />
          </button>
          <button className="btn" onClick={() => playSound(drumMusic)}>
            <img src={drum} alt="Drum 3" />
          </button>
          <button className="btn" onClick={() => playSound(talMusic)}>
            <img src={tal} alt="Drum 4" />
          </button>
          <button className="btn" onClick={() => playSound(pianoMusic)}>
            <img src={piano} alt="Drum 5" />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
