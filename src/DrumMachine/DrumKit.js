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
            <DrumPad padName="pad1" />
          </div>
          <div className="col-4" style={newColStyle}>
            <DrumPad padName="pad2" />
          </div>
          <div className="col-4" style={newColStyle}>
            <DrumPad padName="pad3" />
          </div>
        </div>
        <div className="row">
          <div className="col-4" style={newColStyle}>
            <DrumPad padName="pad4" />
          </div>
          <div className="col-4" style={newColStyle}>
            <DrumPad padName="pad5" />
          </div>
          <div className="col-4" style={newColStyle}>
            <DrumPad padName="pad6" />
          </div>
        </div>
        <div className="row">
          <div className="col-4" style={newColStyle}>
            <DrumPad padName="pad7" />
          </div>
          <div className="col-4" style={newColStyle}>
            <DrumPad padName="pad8" />
          </div>
          <div className="col-4" style={newColStyle}>
            <DrumPad padName="pad9" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrumKit;
