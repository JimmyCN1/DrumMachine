import React, { useState, useContext } from "react";

import VolumeContext from "./VolumeContext";
import DrumMachineHeader from "./DrumMachineHeader";
import DrumKit from "./DrumKit/DrumKit";
import DrumTuner from "./DrumTuner/DrumTuner";

function DrumMachine() {
  const [volume, setVolume] = useState(100);

  // console.log(volume);

  const drumMachineStyle = {
    height: "auto",
    width: "800px",
    padding: "10px",
    border: "solid",
    borderWidth: "5px"
  };

  return (
    <div className="container" style={drumMachineStyle}>
      <VolumeContext.Provider value={{ volume, setVolume }}>
        <DrumMachineHeader />
        <div className="row">
          <DrumKit />
          <DrumTuner />
        </div>
      </VolumeContext.Provider>
    </div>
  );
}

export default DrumMachine;
