import React from "react";
import Slider from "./Form/Slider";
import Switch from "./Form/Switch";

function Form({
  speed,
  setSpeed,
  stagger,
  setStagger,
  ringsCount,
  setRingsCount,
  ringLineWidth,
  setRingLineWidth,
  circleRadius,
  setCircleRadius,
  instrument,
  setInstrument,
  toggleHeavyAnimations,
  setToggleHeavyAnimations,
}) {
  return (
    <form
      className="w-full flex flex-col justify-start items-center gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <Slider
        label="Speed"
        value={speed}
        setValue={setSpeed}
        min={0}
        max={25}
        pseudoMin={0}
        pseudoMax={25}
        step={1}
        classes={["border-b", "border-neutral-800", "border-dashed"]}
      />
      <Slider
        label="Stagger"
        value={stagger}
        setValue={setStagger}
        min={0}
        max={100}
        step={1}
        classes={["border-b", "border-neutral-800", "border-dashed"]}
      />
      <Slider
        label="Rings Count"
        value={ringsCount}
        setValue={setRingsCount}
        min={1}
        max={16}
        pseudoMin={1}
        pseudoMax={16}
        step={1}
        classes={["border-b", "border-neutral-800", "border-dashed"]}
      />
      <Slider
        label="Ring Line Width"
        value={ringLineWidth}
        setValue={setRingLineWidth}
        min={0}
        max={100}
        step={1}
        classes={["border-b", "border-neutral-800", "border-dashed"]}
      />
      <Slider
        label="Circle Radius"
        value={circleRadius}
        setValue={setCircleRadius}
        min={0}
        max={100}
        step={1}
        classes={["border-b", "border-neutral-800", "border-dashed"]}
      />
      <p className="text-neutral-500 text-sm pt-2">
        Due to the experimental nature of SVG filters, you can toggle on/off
        some of the visual features in case of any performance issues.
      </p>
      <Switch
        label="Toggle Heavy Animations"
        value={toggleHeavyAnimations}
        setValue={() => setToggleHeavyAnimations((prev) => !prev)}
      />
    </form>
  );
}

export default Form;
