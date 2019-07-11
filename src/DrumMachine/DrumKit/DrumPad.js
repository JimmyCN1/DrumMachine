import React, { useState, useContext } from "react";
import VolumeContext from "../VolumeContext";
// import useAudio from "./UseAudio";

// const player = require("node-wav-player");

function DrumPad({ padName }) {
  const { volume, setVolume } = useContext(VolumeContext);
  // const [playing, play] = useAudio("./sounds/clap.wav");
  let [playing, play] = useState(false);
  const sample = new Audio();
  sample.src =
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/16[kb]808bd.aif.mp3";
  sample.autoplay = false;

  play = () => {
    console.log("played");
    console.log(sample);
    sample.play();
  };

  let buttonStyle = {
    border: "none",
    textAlign: "center",
    margin: "5px",
    padding: "40px",
    boxShadow: "3px 3px black"
  };

  let buttonStyleSmall = {
    margin: "3px",
    padding: "25px"
  };

  if (window.innerWidth > 300) {
    return (
      <button className="btn btn-primary" style={buttonStyle} onClick={play}>
        {`${padName} ${volume}`}
      </button>
    );
  } else {
    return (
      <button
        className="btn btn-primary"
        style={{ ...buttonStyle, ...buttonStyleSmall }}
        onClick={play}
      >
        {padName}
      </button>
    );
  }
}

export default DrumPad;
