import React, { useState } from "react";

function DrumMachineHeader() {
  const containerStyle = {
    display: "flex",
    flexDirection: "row"
  };

  const drumHeaderStyling = {
    margin: "0px 10px 10px 0px",
    verticleAlign: "middle"
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="row" style={drumHeaderStyling}>
        <i className="fas fa-drum fa-3x" />
      </div>
      <h1>Drum Machine</h1>
    </div>
  );
}

export default DrumMachineHeader;
