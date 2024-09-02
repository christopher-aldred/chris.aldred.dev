"use client";

import { Transition, TransitionChild } from "@headlessui/react";
import { useEffect, useState } from "react";

const FadeIn = ({ delay, children }) => (
  <TransitionChild
    enter={`transition-all ease-in-out duration-700 ${delay}`}
    enterFrom="opacity-0 translate-y-48"
    enterTo="opacity-100 translate-y-0"
    leave="transition-all ease-in-out duration-300"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    {children}
  </TransitionChild>
);

const BOX_STYLE =
  "z-20 transition-color text-gray-100 ease-in-out border border-neutral-700 hover:border-sky-600 bg-zinc-900/80 duration-200 rounded-lg";

export default function Test() {
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
    <>
      {/* BG square elements */}
      <div className="area flex overflow-scroll">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <main className="flex-col justify-between">
          <Transition show={true} appear={true}>
            <div
              className={`min-h-screen grid grid-cols-4 grid-rows-8 gap-4 py-5 px-8 xl:px-44`}
            >
              <FadeIn delay="delay-[0ms]">
                <div
                  className={`text-[16px] font-[150] col-span-3 row-span-4 p-6 ${BOX_STYLE}`}
                >
                  <div className="font-[150] text-sm text-slate-500">
                    Welcome
                  </div>
                  I'm <b>Chris Aldred</b>, a software developer with a strong
                  focus on user experience, animations and micro interactions.
                  Feel free to reach out to me if you have any projects in mind,
                  or just to say hello.
                </div>
              </FadeIn>

              <FadeIn delay="delay-[100ms]">
                <div
                  className={`text-sm font-[150] row-span-6 col-start-4 p-6 ${BOX_STYLE}`}
                >
                  <h1 className="text-lg font-medium">About me</h1>
                  Hi, I'm Chris, a full-stack software developer from the UK.
                  <br />
                  <br />
                  My tools of choice are:
                  <ul>
                    <li>&#8226; TypeScript</li>
                    <li>&#8226; React</li>
                    <li>&#8226; NextJS</li>
                    <li>&#8226; Tailwind</li>
                    <li>&#8226; Tina CMS</li>
                  </ul>
                  <br />
                  Beyond coding, I'm passionate about rock climbing, music and
                  traveling. While I have some preferred tools, I always choose
                  the best one for the job, even if it's not on my usual list.
                  My goal is to find the right solution for each project.
                </div>
              </FadeIn>

              <FadeIn delay="delay-[300ms]">
                <div
                  className={`font-[100] text-2xl col-start-2 row-start-5 flex items-center justify-center ${BOX_STYLE}`}
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
                      <div className="font-[150] text-base text-slate-400">
                        Time in United Kingdom
                      </div>
                    </center>
                  </Transition>
                </div>
              </FadeIn>

              <FadeIn delay="delay-[400ms]">
                <div className={`col-start-3 row-start-5 p-6 ${BOX_STYLE}`}>
                  4
                </div>
              </FadeIn>

              <FadeIn delay="delay-[200ms]">
                <div
                  className={`row-span-4 col-start-1 row-start-5 p-6 ${BOX_STYLE}`}
                >
                  5
                </div>
              </FadeIn>

              <FadeIn delay="delay-[500ms]">
                <div
                  className={`row-span-2 col-start-2 row-start-6 p-6 ${BOX_STYLE}`}
                >
                  6
                </div>
              </FadeIn>

              <FadeIn delay="delay-[600ms]">
                <div
                  className={`row-span-2 col-start-3 row-start-6 p-6 ${BOX_STYLE}`}
                >
                  7
                </div>
              </FadeIn>

              <FadeIn delay="delay-[1000ms]">
                <div className={`col-start-4 row-start-8 p-6 ${BOX_STYLE}`}>
                  8
                </div>
              </FadeIn>

              <FadeIn delay="delay-[700ms]">
                <div className={`col-start-4 row-start-7 p-6 ${BOX_STYLE}`}>
                  9
                </div>
              </FadeIn>

              <FadeIn delay="delay-[800ms]">
                <div className={`col-start-2 row-start-8 p-6 ${BOX_STYLE}`}>
                  10
                </div>
              </FadeIn>

              <FadeIn delay="delay-[900ms]">
                <div className={`col-start-3 row-start-8 p-6 ${BOX_STYLE}`}>
                  11
                </div>
              </FadeIn>
            </div>
          </Transition>
        </main>
      </div>
    </>
  );
}
