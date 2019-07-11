import React, { useState } from "react";

function DrumPad({ padName }) {
  const buttonStyle = {
    // textDecoration: "none !important",
    backgroundColor: "transparent",
    border: "none",
    textAlign: "center",
    margin: "5px",
    // padding: "40px",
    backgroundColor: "#3626A7",
    boxShadow: "3px 3px black"
  };

  let drumPadStyle = {
    textAlign: "center",
    margin: "3px",
    padding: "40px",
    backgroundColor: "#3626A7",
    boxShadow: "5px 5px black"
  };

  return (
    <button type="button" style={buttonStyle}>
      {padName}
    </button>
  );
}

export default DrumPad;
