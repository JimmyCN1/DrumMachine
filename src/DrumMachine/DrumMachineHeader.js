import React, { useState } from "react";

function DrumMachineHeader() {
  const drumHeaderStyling = {
    margin: "0px 0px 10px 0px"
  };
  return (
    <div className="row" style={drumHeaderStyling}>
      <i className="fas fa-drum" />
      Drum Machine
    </div>
  );
}

export default DrumMachineHeader;
