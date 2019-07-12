import React, { useState } from "react";

import ActiveContext from "./ActiveContext";
import VolumeContext from "./VolumeContext";
import DrumMachineHeader from "./DrumMachineHeader";
import DrumKit from "./drumKit/DrumKit";
import DrumTuner from "./drumTuner/DrumTuner";

function DrumMachine() {
  const [volume, setVolume] = useState(100);
  const [active, setActive] = useState("volume");

  const drumMachineStyle = {
    height: "auto",
    width: "800px",
    padding: "10px",
    border: "solid",
    borderWidth: "5px",
    backgroundColor: "silver"
  };

  return (
    <div className="container" style={drumMachineStyle}>
      <VolumeContext.Provider value={{ volume, setVolume }}>
        <ActiveContext.Provider value={{ active, setActive }}>
          <DrumMachineHeader />
          <div className="row">
            <DrumKit />
            <DrumTuner />
          </div>
        </ActiveContext.Provider>
      </VolumeContext.Provider>
    </div>
  );
}

export default DrumMachine;
