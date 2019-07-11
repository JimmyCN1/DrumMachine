import React, { useState } from "react";

import Knob from "./Knob";

function DrumTuner() {
  const [value, setValue] = useState(100);

  // handleChange = newValue => {
  //   this.setState({
  //     value: newValue
  //   });
  // };

  const drumTunerStyle = {
    padding: "30px 0px 30px 0px"
  };

  const displayStyle = {
    width: "200px",
    height: "50px",
    border: "noned",
    textAlign: "center",
    backgroundColor: "black",
    color: "red"
  };

  const knobExtraStyling = {
    margin: "100px 50px 50px 50px"
  };

  return (
    <div className="col-md-4">
      <div className="container" style={drumTunerStyle}>
        <div className="row justify-content-center">
          <div style={displayStyle}>{value}</div>
        </div>
        <div className="row justify-content-center">
          {/* <div>volume</div> */}
          <div style={knobExtraStyling}>
            <Knob
              size={100}
              numTicks={25}
              degrees={260}
              min={1}
              max={100}
              value={value}
              color={true}
              onChange={newValue => setValue(newValue)}
            />

            {/* <Knob
              numTicks={125}
              degrees={180}
              min={1}
              max={100}
              value={0}
              onChange={value => setValue(value)}
            /> */}
          </div>
        </div>
        <div className="row justify-content-center">
          <div>dial</div>
        </div>
      </div>
    </div>
  );
}

export default DrumTuner;
