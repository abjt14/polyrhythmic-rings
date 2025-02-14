import React from "react";
import Ring from "./Render/Ring";
import Circle from "./Render/Circle";
import Music from "./Render/Music";
import LineHTML from "./Render/LineHTML";
import LineSVG from "./Render/LineSVG";
import ColorWheel from "./Render/ColorWheel";
import useIncrementingValue from "@/hooks/useIncrementingValue";

function Render({
  play,
  ringsCount,
  ringLineWidth,
  circleRadius,
  instrument,
  speed,
  stagger,
  toggleRings,
  toggleCircles,
  toggleChords,
  toggleHeavyAnimations,
}) {
  const rotationValue = useIncrementingValue(play, speed);
  const staggerredValue = rotationValue * (stagger / (100 * (ringsCount + 1)));

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 100"
        className="w-full h-auto overflow-hidden max-h-[calc(100svh-2rem)]"
      >
        <defs>
          <pattern
            id="colorwheel-bg"
            patternUnits="userSpaceOnUse"
            width="100"
            height="100"
          >
            <ColorWheel/>
          </pattern>
        </defs>
        {[...Array(ringsCount)].map((_, index) => {
          const staggerredRotationValue =
            rotationValue - staggerredValue * index;

          return (
            index >= 0 && (
              <Instance
                key={index + "-instance"}
                index={index}
                ringsCount={ringsCount}
                ringLineWidth={ringLineWidth}
                circleRadius={circleRadius}
                instrument={instrument}
                staggerredRotationValue={staggerredRotationValue}
                toggleHeavyAnimations={toggleHeavyAnimations}
              />
            )
          );
        })}
      </svg>
      {[...Array(ringsCount)].map((_, index) => {
        const staggerredRotationValue = rotationValue - staggerredValue * index;
        const trigger = !(staggerredRotationValue % 180 > 135);

        return (
          <LineSVG
            key={index + "-line"}
            index={index}
            trigger={trigger}
            toggleHeavyAnimations={toggleHeavyAnimations}
          />
        );
      })}
    </>
  );
}

function Instance({
  index,
  ringsCount,
  ringLineWidth,
  circleRadius,
  staggerredRotationValue,
  instrument,
  toggleHeavyAnimations,
}) {
  const trigger = !(staggerredRotationValue % 180 > 135);

  return (
    <>
      <Ring
        index={index}
        ringsCount={ringsCount}
        ringLineWidth={ringLineWidth}
        trigger={trigger}
        toggleHeavyAnimations={toggleHeavyAnimations}
      />
      <Circle
        index={index}
        circleRadius={circleRadius}
        ringsCount={ringsCount}
        staggerredRotationValue={staggerredRotationValue}
        trigger={trigger}
      />
      <Music index={index} instrument={instrument} trigger={trigger} />
    </>
  );
}

export default Render;
