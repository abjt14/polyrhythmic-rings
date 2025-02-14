import React from "react";
import * as RadixSwitch from "@radix-ui/react-switch";
import * as RadixLabel from "@radix-ui/react-label";
import clsx from "clsx";

function Switch({ label, value, setValue, classes = [] }) {
  const switchId = React.useId();

  return (
    <div
      className={clsx(
        "w-full flex flex-row items-center justify-start gap-2 pb-4",
        classes
      )}
    >
      <RadixLabel.Root
        className="text-[15px] font-medium leading-[35px] text-white"
        htmlFor={switchId}
      >
        {label}
      </RadixLabel.Root>
      <RadixSwitch.Root
        id={switchId}
        name={label.split(" ").join("-").toLowerCase()}
        className="w-[42px] h-[25px] bg-transparent ring-2 ring-inset ring-neutral-700 rounded-full relative shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] 
        focus:shadow-neutral-500 data-[state=checked]:bg-neutral-700 outline-none cursor-pointer"
        checked={value}
        onCheckedChange={setValue}
      >
        <RadixSwitch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </RadixSwitch.Root>
    </div>
  );
}

export default Switch;
