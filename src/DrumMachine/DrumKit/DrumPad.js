import React, { useState, useContext } from "react";
import ActiveContext from "../ActiveContext";
import VolumeContext from "../VolumeContext";

const sounds = {
  src: "https://sampleswap.org/index.php",
  crash1:
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/92[kb]909-bright-crash.aif.mp3",
  ride:
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Rides/543[kb]beauty_ride2_(long).aif.mp3",
  crash2:
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/666[kb]18_inch_crash.aif.mp3",
  hiHat:
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/11[kb]chh.aif.mp3",
  tom1:
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/35[kb]hitom.aif.mp3",
  floorTom:
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/40[kb]lotom.aif.mp3",
  snare:
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/57[kb]acoustic_snare.aif.mp3",
  kick:
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/16[kb]808bd.aif.mp3",
  clap:
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/34[kb]brightclap.aif.mp3"
};

function DrumPad({ name, padName }) {
  const { volume, setVolume } = useContext(VolumeContext);
  const { active, setActive } = useContext(ActiveContext);

  let [playing, play] = useState(false);
  const sample = new Audio();
  sample.src = sounds[name];
  sample.autoplay = false;

  const handleClick = (name, sound) => {
    setActive(name);
    console.log(name);
    // console.log(sound);
    return sound;
  };

  play = () => {
    // console.log(sample.volume);
    sample.volume = volume / 100;
    sample.play();
  };

  let buttonStyle = {
    border: "none",
    textAlign: "center",
    height: "150px",
    width: "150px",
    margin: "5px",
    boxShadow: "3px 3px black"
  };

  let buttonStyleSmall = {
    margin: "3px",
    padding: "25px"
  };

  if (window.innerWidth > 300) {
    return (
      <button
        className="btn btn-primary"
        style={buttonStyle}
        onClick={() => handleClick(name, play())}
      >
        {`${padName}`}
      </button>
    );
  } else {
    return (
      <button
        className="btn btn-primary"
        style={{ ...buttonStyle, ...buttonStyleSmall }}
        onClick={(name, play) => handleClick(name, play())}
      >
        {padName}
      </button>
    );
  }
}

export default DrumPad;
