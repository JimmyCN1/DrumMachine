import React, { useState } from "react";

function DrumMachine() {
  const drumMachineStyling = {
    height: "400px",
    width: "800px",
    border: "solid",
    borderWidth: "5px"
  };
  return (
    <div className="container" style={drumMachineStyling}>
      <div className="row">
        <i className="fas fa-drum" />
        Drum Machine
      </div>
      <div className="row">
        <div className="col-sm-8">col 1</div>
        <div className="col-sm-4">col 2</div>
      </div>
    </div>
  );
}

export default DrumMachine;
