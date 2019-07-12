import React, { useState } from "react";
import VolumeContext from "../VolumeContext";

import DrumPad from "./DrumPad";

function DrumKit() {
  const drumKitStyle = {
    height: "inherit",
    width: "inherit"
  };

  const newColStyle = {
    padding: "0px",
    display: "flex",
    justifyContent: "space-around"
  };

  return (
    <div className="col-md-8">
      <div className="container" style={drumKitStyle}>
        <div className="row">
          <div className="col-4" style={newColStyle}>
            <DrumPad name="crash1" padName="Crash 1" />
          </div>
          <div className="col-4" style={newColStyle}>
            <DrumPad name="ride" padName="Ride" />
          </div>
          <div className="col-4" style={newColStyle}>
            <DrumPad name="crash2" padName="Crash 2" />
          </div>
        </div>
        <div className="row">
          <div className="col-4" style={newColStyle}>
            <DrumPad name="hiHat" padName="Hi-Hat" />
          </div>
          <div className="col-4" style={newColStyle}>
            <DrumPad name="tom1" padName="Tom 1" />
          </div>
          <div className="col-4" style={newColStyle}>
            <DrumPad name="floorTom" padName="Floor Tom" />
          </div>
        </div>
        <div className="row">
          <div className="col-4" style={newColStyle}>
            <DrumPad name="snare" padName="Snare" />
          </div>
          <div className="col-4" style={newColStyle}>
            <DrumPad name="kick" padName="Kick" />
          </div>
          <div className="col-4" style={newColStyle}>
            <DrumPad name="clap" padName="Clap" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrumKit;
