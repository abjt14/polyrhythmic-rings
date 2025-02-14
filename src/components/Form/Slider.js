import React from "react";
import * as RadixSlider from "@radix-ui/react-slider";
import * as RadixLabel from "@radix-ui/react-label";
import clsx from "clsx";
import useValueMap from "@/hooks/useValueMap";

function Slider({
  label,
  min,
  max,
  pseudoMin = 0,
  pseudoMax = 100,
  step = 1,
  value,
  setValue,
  classes = [],
}) {
  return (
    <div
      className={clsx(
        "flex flex-col flex-wrap items-start justify-center gap-1 pb-4 pt-2 w-full h-15",
        classes
      )}
    >
      <RadixLabel.Root className="text-[15px] font-medium leading-[35px] text-white">
        {label}: {useValueMap(value, min, max, pseudoMin, pseudoMax)}
      </RadixLabel.Root>
      <RadixSlider.Root
        name={label.split(" ").join("-").toLowerCase()}
        className="relative flex items-center select-none touch-none w-full h-1 cursor-pointer"
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={setValue}
        minStepsBetweenThumbs={step}
      >
        <RadixSlider.Track className="bg-neutral-700 relative grow rounded-full h-[3px] w-[200px]">
          <RadixSlider.Range className="absolute bg-neutral-50 rounded-full h-full" />
        </RadixSlider.Track>
        <RadixSlider.Thumb
          className="block w-5 h-5 bg-neutral-50 shadow-[0_2px_10px] shadow-blackA4 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-neutral-500"
          aria-label={label}
        />
      </RadixSlider.Root>
    </div>
  );
}

export default Slider;

