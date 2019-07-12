import React, { useState, useContext } from "react";
import VolumeContext from "../VolumeContext";
import Display from "./Display";
import Knob from "./Knob";

function DrumTuner() {
  const { volume, setVolume } = useContext(VolumeContext);

  const drumTunerStyle =
    window.innerWidth > 768
      ? {
          padding: "30px 20px 0px 0px"
        }
      : {
          padding: "30px 0px"
        };

  const knobExtraStyling = {
    position: "relative",
    height: "150px",
    padding: "0px, 0px, 20px, 0px",
    top: "20px",
    right: "16px"
  };

  return (
    <div className="col-md-4" style={drumTunerStyle}>
      <div className="container">
        <div className="row justify-content-center">
          <Display />
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
        <div className="row justify-content-center" />
      </div>
    </div>
  );
}

export default DrumTuner;
