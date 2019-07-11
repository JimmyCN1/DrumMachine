import React, { useState, useContext } from "react";
import VolumeContext from "../VolumeContext";
import Knob from "./Knob";

function DrumTuner() {
  const { volume, setVolume } = useContext(VolumeContext);

  const drumTunerStyle =
    window.innerWidth > 768
      ? {
          padding: "30px 30px 0px 0px"
        }
      : {
          padding: "30px 0px"
        };

  const displayStyle = {
    width: "200px",
    height: "50px",
    border: "none",
    textAlign: "center",
    backgroundColor: "black",
    color: "red"
  };

  const knobExtraStyling = {
    position: "relative",
    top: "20px",
    right: "15px"
  };

  return (
    <div className="col-md-4" style={drumTunerStyle}>
      <div className="container">
        <div className="row justify-content-center">
          <div style={displayStyle}>{volume}</div>
        </div>
        <div className="row justify-content-center">
          <div style={knobExtraStyling}>
            <Knob
              size={100}
              numTicks={25}
              degrees={260}
              min={1}
              max={100}
              value={volume}
              color={true}
              onChange={newVolume => setVolume(newVolume)}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div>dial</div>
        </div>
      </div>
    </div>
  );
}

export default DrumTuner;
