import React, { useState, useContext } from "react";
import VolumeContext from "../VolumeContext";

function DrumPad({ padName }) {
  const { volume, setVolume } = useContext(VolumeContext);
  console.log(volume);

  let buttonStyle = {
    // textDecoration: "none !important",
    // backgroundColor: "transparent",
    border: "none",
    textAlign: "center",
    margin: "5px",
    padding: "40px",
    // backgroundColor: "grey",
    boxShadow: "3px 3px black"
  };

  let buttonStyleSmall = {
    margin: "3px",
    padding: "25px"
  };

  if (window.innerWidth > 300) {
    return (
      <button className="btn btn-primary" style={buttonStyle}>
        {padName}
      </button>
    );
  } else {
    return (
      <button
        className="btn btn-primary"
        style={{ ...buttonStyle, ...buttonStyleSmall }}
      >
        {padName}
      </button>
    );
  }
}

export default DrumPad;
