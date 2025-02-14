"use client";

import Form from "@/components/Form";
import Information from "@/components/Information";
import NoiseOverlay from "@/components/NoiseOverlay";
import PlayButton from "@/components/PlayButton";
import Render from "@/components/Render";
import React from "react";

export default function Home() {
  const [speed, setSpeed] = React.useState(10);
  const [stagger, setStagger] = React.useState(10);

  const [ringsCount, setRingsCount] = React.useState(8);
  const [ringLineWidth, setRingLineWidth] = React.useState(10);
  const [toggleRings, setToggleRings] = React.useState(true);

  const [circleRadius, setCircleRadius] = React.useState(50);
  const [toggleCircles, setToggleCircles] = React.useState(true);

  const [toggleChords, setToggleChords] = React.useState(true);

  const [toggleHeavyAnimations, setToggleHeavyAnimations] =
    React.useState(true);

  const [instrument, setInstrument] = React.useState("piano");

  const [play, setPlay] = React.useState(false);

  // Toggle play/pause functionality
  const togglePlay = () => {
    setPlay((prev) => !prev);
  };

  return (
    <main className="max-w-screen-2xl bg-neutral-950 relative h-full md:h-svh w-full flex flex-col md:flex-row overflow-auto md:overflow-hidden">
      <div
        className="relative p-4 flex justify-center items-center border-r 2xl:border-x border-neutral-900 rounded-sm"
        style={{
          flex: "2",
        }}
      >
        <Render
          play={play}
          ringsCount={parseInt(ringsCount)}
          ringLineWidth={ringLineWidth / 100}
          circleRadius={circleRadius / 100}
          instrument={instrument}
          speed={speed / 10}
          stagger={stagger}
          toggleRings={toggleRings}
          toggleCircles={toggleCircles}
          toggleChords={toggleChords}
          toggleHeavyAnimations={toggleHeavyAnimations}
        />
        {/* Pass the play state and togglePlay function */}
        <PlayButton onClick={togglePlay} play={play} />
        {/* {!play && <PlayButton onClick={() => setPlay(true)} />} */}
      </div>
      <div
        className="flex flex-col gap-8 items-start justify-start 3xl:justify-center overflow-auto p-4"
        style={{
          flex: "1",
        }}
      >
        <Information />
        <Form
          speed={speed}
          setSpeed={setSpeed}
          stagger={stagger}
          setStagger={setStagger}
          ringsCount={ringsCount}
          setRingsCount={setRingsCount}
          ringLineWidth={ringLineWidth}
          setRingLineWidth={setRingLineWidth}
          circleRadius={circleRadius}
          setCircleRadius={setCircleRadius}
          instrument={instrument}
          setInstrument={setInstrument}
          toggleHeavyAnimations={toggleHeavyAnimations}
          setToggleHeavyAnimations={setToggleHeavyAnimations}
        />
      </div>
      <NoiseOverlay toggleHeavyAnimations={toggleHeavyAnimations} />
    </main>
  );
}
