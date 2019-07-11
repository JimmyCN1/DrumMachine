import React, { useState, useEffect } from "react";

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  let [playing, play] = useState(false);

  play = () => {
    console.log(url);
    audio.play();
  };

  return [playing, play];
};

export default useAudio;
