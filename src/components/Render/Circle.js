import React from "react";
import { motion } from "framer-motion";

function Circle({
  index,
  circleRadius,
  ringsCount,
  staggerredRotationValue,
  trigger,
}) {
  console.log("staggerredRotationValue", staggerredRotationValue);
  return (
    <>
      <motion.circle
        className="z-20"
        cy="50"
        fill={"rgb(255 255 255)"}
        initial={{
          opacity: 0,
          cx: 50 - (50 / (ringsCount + 1)) * (index + 1) * 1.1,
          rotate: staggerredRotationValue,
        }}
        animate={{
          opacity: 1,
          r: circleRadius,
          cx: 50 - (50 / (ringsCount + 1)) * (index + 1),
          rotate: staggerredRotationValue,
        }}
        style={{
          originX: "50%",
          originY: "50%",
          transformBox: "view-box",
        }}
      />
    </>
  );
}

export default Circle;
