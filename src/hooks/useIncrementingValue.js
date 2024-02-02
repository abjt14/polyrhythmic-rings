import React from "react";

function useIncrementingValue(play, speed) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    let rafId = null;

    function tick() {
      setValue((prev) => prev + speed);

      rafId = requestAnimationFrame(tick);
    }

    if (play) {
      tick();
    }

    return () => {
      rafId && cancelAnimationFrame(rafId);
    };
  }, [play, speed]);

  return value;
}

export default useIncrementingValue;
