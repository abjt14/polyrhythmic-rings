import React from "react";
import { motion } from "framer-motion";

function Ring({
  index,
  ringsCount,
  ringLineWidth,
  trigger,
  toggleHeavyAnimations,
}) {
  const svgFilterId = React.useId();

  return (
    <motion.circle
      className="z-10"
      cx="50"
      cy="50"
      fill="transparent"
      stroke={
        toggleHeavyAnimations ? "url(#colorwheel-bg)" : "rgb(128, 128, 128)"
      }
      strokeWidth={ringLineWidth}
      filter={
        toggleHeavyAnimations ? `url(#${svgFilterId}saturationFilter)` : "none"
      }
      initial={{
        r: (50 / (ringsCount + 1)) * (index + 1) * 1.1,
        opacity: 0.25,
      }}
      animate={{
        r: (50 / (ringsCount + 1)) * (index + 1),
        opacity: trigger ? [0.25, 1, 0.25] : 0.25,
      }}
    >
      {toggleHeavyAnimations && (
        <filter id={`${svgFilterId}saturationFilter`}>
          <motion.feColorMatrix
            type="saturate"
            animate={{
              values: trigger ? [0, 1, 0.5, 0] : 0,
            }}
          />
        </filter>
      )}
    </motion.circle>
  );
}

export default Ring;
