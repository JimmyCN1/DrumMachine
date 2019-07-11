import React, { useState } from "react";

import DrumMachineHeader from "./DrumMachineHeader";
import DrumKit from "./DrumKit";
import DrumTuner from "./DrumTuner";

function DrumMachine() {
  const drumMachineStyle = {
    height: "auto",
    width: "800px",
    border: "solid",
    borderWidth: "5px"
  };

  return (
    <div className="container" style={drumMachineStyle}>
      <DrumMachineHeader />
      <div className="row">
        <DrumKit />
        <DrumTuner />
      </div>
    </div>
  );
}

export default DrumMachine;
