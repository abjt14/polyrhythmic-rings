import useEffectSkipMount from "@/hooks/useEffectSkipMount";
import React from "react";

function Music({ index, instrument, trigger }) {
  const audio = React.useRef();

  React.useEffect(() => {
    if (typeof Audio !== "undefined") {
      audio.current = new Audio(`/${instrument}/${(index % 8) + 1}.mp3`);
    }
  }, [instrument, index]);

  useEffectSkipMount(() => {
    if (trigger && audio.current) {
      audio.current.currentTime = 0;
      audio.current.volume = 0.1;
      audio.current.play();
    }
  }, [trigger, instrument, index]);

  return;
}

export default Music;
