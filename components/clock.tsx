import { Transition } from "@headlessui/react";
import { FadeAndSlide } from "../utils/animations";
import { useEffect, useState } from "react";

export default function clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      let options = { timeZone: "Europe/London" };
      let londonTime = date.toLocaleTimeString("en-GB", options);
      setTime(londonTime);
    }, 1000);
  }, []);

  return (
    <FadeAndSlide delay="delay-[300ms]">
      <div
        className={`font-[100] text-2xl col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-4 flex items-center justify-center custom-box-style`}
      >
        <Transition
          enter={`transition-all ease-in-out duration-700`}
          enterFrom="opacity-0"
          enterTo="opacity-100 translate-y-0"
          show={time !== ""}
        >
          <center>
            {time}
            <br />
            <div className="font-[150] text-base text-slate-400">UK Time</div>
          </center>
        </Transition>
      </div>
    </FadeAndSlide>
  );
}