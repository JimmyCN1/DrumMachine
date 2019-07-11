import React, { useState } from "react";

import DrumPad from "./DrumPad";

function DrumKit() {
  const drumKitStyle = {
    height: "inherit",
    width: "inherit"
  };

  const newColStyle = {
    // padding: "0px",
    display: "flex",
    justifyContent: "space-around"
  };

  return (
    <div className="col-md-8">
      <div className="container" style={drumKitStyle}>
        <div className="row">
          <div className="col-4" style={newColStyle}>
            <DrumPad padName="Crash 1" />
          </div>
          <div className="col-4" style={newColStyle}>
            <DrumPad padName="Ride" />
          </div>
          <div className="col-4" style={newColStyle}>
            <DrumPad padName="Crash 2" />
          </div>
        </div>
        <div className="row">
          <div className="col-4" style={newColStyle}>
            <DrumPad padName="Hi-Hat" />
          </div>
          <div className="col-4" style={newColStyle}>
            <DrumPad padName="Tom 1" />
          </div>
          <div className="col-4" style={newColStyle}>
            <DrumPad padName="Floor Tom" />
          </div>
        </div>
        <div className="row">
          <div className="col-4" style={newColStyle}>
            <DrumPad padName="Snare" />
          </div>
          <div className="col-4" style={newColStyle}>
            <DrumPad padName="Kick" />
          </div>
          <div className="col-4" style={newColStyle}>
            <DrumPad padName="Clap" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrumKit;
