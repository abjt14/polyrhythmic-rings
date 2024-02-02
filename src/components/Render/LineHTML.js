// doesnt work with safari desktop
// choppy with firefox

import React from "react";

function LineHTML({ index, trigger }) {
  const filterId = React.useId();
  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    if (!trigger) {
      setKey((prev) => prev + 1);
    }
  }, [trigger]);

  return (
    <>
      <svg
        key={key}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 100"
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        <defs>
          <filter id={filterId + "chord-turbulence"}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency={`${
                index % 2 === 0 ? 0.05 + index * 0.001 : 0.05 - index * 0.001
              } 0`}
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
                values={`0; 64; 32; 16; 8; 4; 0;`}
                dur=".6s"
                begin=".1s"
                colorInterpolationFilters="sRGB"
              />
            </feDisplacementMap>
          </filter>
        </defs>
      </svg>
      <div
        className="absolute top-1/2 left-0 w-full h-[1px]"
        style={{
          backgroundColor: `rgb(128, 128, 128)`,
          outline: "8rem solid transparent",
          filter: `url(#${filterId + "chord-turbulence"})`,
          transform: `rotate(${index % 2 === 0 ? 0 : 180}deg)`,
        }}
      />
    </>
  );
}

export default LineHTML;
