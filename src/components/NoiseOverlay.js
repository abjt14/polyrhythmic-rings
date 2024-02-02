import clsx from "clsx";

function NoiseOverlay({ toggleHeavyAnimations }) {
  return (
    <div
      id="noise-overlay"
      className={clsx(
        "fixed top-0 left-0 h-full w-full pointer-events-none"
        // toggleHeavyAnimations && "animated"
      )}
    />
  );
}

export default NoiseOverlay;
