import useEffectSkipMount from "@/hooks/useEffectSkipMount";

function Music({ index, instrument, trigger }) {
  useEffectSkipMount(() => {
    if (trigger) {
      const audio = new Audio(`/${instrument}/${(index % 8) + 1}.mp3`);
      audio.volume = 0.1;
      audio.play();
      // audio.play().catch(error => {
      //   // Auto-play was blocked.
      //   console.log('Auto-play Error: ', error);
      // });
    }
  }, [trigger, instrument, index]);

  return;
}

export default Music;
