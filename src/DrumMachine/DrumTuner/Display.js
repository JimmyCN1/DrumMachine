import React, { useState, useContext } from "react";
import ActiveContext from "../ActiveContext";
import VolumeContext from "../VolumeContext";

function Display() {
  const { volume } = useContext(VolumeContext);
  const { active } = useContext(ActiveContext);

  const toDisplay = {
    volume: `Volume: ${volume}`,
    crash1: `Crash 1`,
    ride: "Ride",
    crash2: "Crash 2",
    hiHat: "Hi-Hat",
    tom1: "Tom 1",
    floorTom: "Floor Tom",
    snare: "Snare",
    kick: "Kick",
    clap: "Clap"
  };

  const displayStyle = {
    width: "200px",
    height: "50px",
    border: "none",
    textAlign: "center",
    backgroundColor: "black",
    color: "red",
    fontSize: "190%",
    fontWeight: "bold"
  };

  return (
    <div className="Display">
      <div style={displayStyle}>{toDisplay[active]}</div>
    </div>
  );
}

export default Display;
