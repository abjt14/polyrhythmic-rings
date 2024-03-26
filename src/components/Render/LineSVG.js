// doest work with firefox

import React from "react";

function LineSVG({ index, trigger, toggleHeavyAnimations }) {
  const filterId = React.useId();
  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    if (trigger) {
      setKey((prev) => prev + 1);
    }
  }, [trigger]);

  const baseFrequencyByIndex = `${
    index % 2 === 0 ? 0.4 + index * 0.0125 : 0.4 - index * 0.0125
  } 0`;

  return (
    <svg
      key={key}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
    >
      {toggleHeavyAnimations && (
        <defs>
          <filter
            id={filterId + "chord-turbulence"}
            x="-50%"
            y="0%"
            width="200%"
            height="200%"
            filterUnits="userSpaceOnUse"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency={baseFrequencyByIndex}
              numOctaves="1"
              result="warp"
              colorInterpolationFilters="sRGB"
            />
            <feDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              scale="0"
              in="SourceGraphic"
              in2="warp"
              colorInterpolationFilters="sRGB"
            >
              <animate
                attributeName="scale"
                values={`0; 8; 4; 0;`}
                dur=".4s"
                begin=".1s"
                colorInterpolationFilters="sRGB"
              />
            </feDisplacementMap>
          </filter>
        </defs>
      )}
      <line
        x1="-100"
        y1="50"
        x2="200"
        y2="50"
        stroke="rgb(96,96,96)"
        strokeWidth=".1"
        filter={
          toggleHeavyAnimations
            ? `url(#${filterId + "chord-turbulence"})`
            : "none"
        }
        transform={`rotate(${index % 2 === 0 ? 0 : 180} 50 50)`}
      />
    </svg>
  );
}

export default LineSVG;
