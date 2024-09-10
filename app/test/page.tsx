"use client";

import { Transition, TransitionChild } from "@headlessui/react";
import { useEffect, useState } from "react";
import Image from "next/image";

const FadeAndSlide = ({ delay, children }) => (
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

const FadeIn = ({ delay, children }) => (
  <TransitionChild
    enter={`transition-all ease-in-out duration-1000 ${delay}`}
    enterFrom="opacity-0 translate-y-0"
    enterTo="opacity-100 translate-y-0"
    leave="transition-all ease-in-out duration-300"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    {children}
  </TransitionChild>
);

const BOX_STYLE =
  "z-20 transition-color text-gray-100 ease-in-out border border-neutral-700 hover:border-slate-100 bg-zinc-900/80 duration-200 rounded-lg";

export default function Test() {
  const [time, setTime] = useState("");

  // Set clock time
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
      <div className="z-10 area flex">
        <Transition as="div" show={true} appear={true}>
          <FadeIn delay="delay-[0ms]">
            <div className="circles ">
              <div id="bg-wrap">
                <svg
                  height="100vh"
                  width="100vw"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <defs>
                    <radialGradient
                      id="Gradient1"
                      cx="50%"
                      cy="50%"
                      fx="0.441602%"
                      fy="50%"
                      r=".5"
                    >
                      <animate
                        attributeName="fx"
                        dur="140s"
                        values="0%;3%;0%"
                        repeatCount="indefinite"
                      ></animate>
                      <stop
                        offset="0%"
                        stop-color="rgba(255, 0, 255, 1)"
                      ></stop>
                      <stop
                        offset="100%"
                        stop-color="rgba(255, 0, 255, 0)"
                      ></stop>
                    </radialGradient>
                    <radialGradient
                      id="Gradient2"
                      cx="50%"
                      cy="50%"
                      fx="2.68147%"
                      fy="50%"
                      r=".5"
                    >
                      <animate
                        attributeName="fx"
                        dur="100s"
                        values="0%;3%;0%"
                        repeatCount="indefinite"
                      ></animate>
                      <stop
                        offset="0%"
                        stop-color="rgba(255, 255, 0, 1)"
                      ></stop>
                      <stop
                        offset="100%"
                        stop-color="rgba(255, 255, 0, 0)"
                      ></stop>
                    </radialGradient>
                    <radialGradient
                      id="Gradient3"
                      cx="50%"
                      cy="50%"
                      fx="0.836536%"
                      fy="50%"
                      r=".5"
                    >
                      <animate
                        attributeName="fx"
                        dur="88s"
                        values="0%;3%;0%"
                        repeatCount="indefinite"
                      ></animate>
                      <stop
                        offset="0%"
                        stop-color="rgba(0, 255, 255, 1)"
                      ></stop>
                      <stop
                        offset="100%"
                        stop-color="rgba(0, 255, 255, 0)"
                      ></stop>
                    </radialGradient>
                    <radialGradient
                      id="Gradient4"
                      cx="50%"
                      cy="50%"
                      fx="4.56417%"
                      fy="50%"
                      r=".5"
                    >
                      <animate
                        attributeName="fx"
                        dur="90s"
                        values="0%;5%;0%"
                        repeatCount="indefinite"
                      ></animate>
                      <stop offset="0%" stop-color="rgba(0, 255, 0, 1)"></stop>
                      <stop
                        offset="100%"
                        stop-color="rgba(0, 255, 0, 0)"
                      ></stop>
                    </radialGradient>
                    <radialGradient
                      id="Gradient5"
                      cx="50%"
                      cy="50%"
                      fx="2.65405%"
                      fy="50%"
                      r=".5"
                    >
                      <animate
                        attributeName="fx"
                        dur="100s"
                        values="0%;5%;0%"
                        repeatCount="indefinite"
                      ></animate>
                      <stop offset="0%" stop-color="rgba(0,0,255, 1)"></stop>
                      <stop offset="100%" stop-color="rgba(0,0,255, 0)"></stop>
                    </radialGradient>
                    <radialGradient
                      id="Gradient6"
                      cx="50%"
                      cy="50%"
                      fx="0.981338%"
                      fy="50%"
                      r=".5"
                    >
                      <animate
                        attributeName="fx"
                        dur="104s"
                        values="0%;5%;0%"
                        repeatCount="indefinite"
                      ></animate>
                      <stop offset="0%" stop-color="rgba(255,0,0, 1)"></stop>
                      <stop offset="100%" stop-color="rgba(255,0,0, 0)"></stop>
                    </radialGradient>
                  </defs>

                  <rect
                    x="13.744%"
                    y="1.18473%"
                    width="100%"
                    height="100%"
                    fill="url(#Gradient1)"
                    transform="rotate(334.41 50 50)"
                  >
                    <animate
                      attributeName="x"
                      dur="80s"
                      values="25%;0%;25%"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="y"
                      dur="84s"
                      values="0%;25%;0%"
                      repeatCount="indefinite"
                    ></animate>
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 50 50"
                      to="360 50 50"
                      dur="28s"
                      repeatCount="indefinite"
                    ></animateTransform>
                  </rect>
                  <rect
                    x="-2.17916%"
                    y="35.4267%"
                    width="100%"
                    height="100%"
                    fill="url(#Gradient2)"
                    transform="rotate(255.072 50 50)"
                  >
                    <animate
                      attributeName="x"
                      dur="92s"
                      values="-25%;0%;-25%"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="y"
                      dur="100s"
                      values="0%;50%;0%"
                      repeatCount="indefinite"
                    ></animate>
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 50 50"
                      to="360 50 50"
                      dur="48s"
                      repeatCount="indefinite"
                    ></animateTransform>
                  </rect>
                  <rect
                    x="9.00483%"
                    y="14.5733%"
                    width="100%"
                    height="100%"
                    fill="url(#Gradient3)"
                    transform="rotate(139.903 50 50)"
                  >
                    <animate
                      attributeName="x"
                      dur="100s"
                      values="0%;25%;0%"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="y"
                      dur="48s"
                      values="0%;25%;0%"
                      repeatCount="indefinite"
                    ></animate>
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="360 50 50"
                      to="0 50 50"
                      dur="36s"
                      repeatCount="indefinite"
                    ></animateTransform>
                  </rect>
                </svg>
              </div>
            </div>
          </FadeIn>
        </Transition>

        <main className="flex-col justify-between overflow-auto">
          <Transition show={true} appear={true}>
            <div
              className={`min-h-full grid grid-cols-4 lg:grid-rows-8 gap-2 lg:gap-8 py-2 px-2 lg:px-36 xl:px-56 2xl:px-80`}
            >
              <FadeAndSlide delay="delay-[0ms]">
                <div
                  className={`text-[16px] font-[150] col-span-4 lg:col-span-3 row-span-3 p-6 ${BOX_STYLE}`}
                >
                  <div className="h-full w-full grid grid-cols-3 grid-rows-2 gap-4">
                    <div className="col-span-3 lg:col-span-2 row-start-1">
                      <div className="font-[200] text-sm text-slate-500">
                        Welcome
                      </div>
                      I'm <b>Chris Aldred</b>, a software developer with a
                      strong focus on user experience, animations and micro
                      interactions. Feel free to reach out to me if you have any
                      projects in mind, or just to say hello.
                    </div>
                    <div className="col-span-2 col-start-1 row-start-2 flex items-end">
                      <a className="relative" href="#">
                        <span className="h-10 w-28 lg:h-12 lg:w-36 absolute top-0 left-0 mt-1 ml-1  rounded-lg bg-black"></span>
                        <span className="h-10 w-28 lg:h-12 lg:w-36 text-md lg:text-lg flex flex-col justify-center items-center fold-bold relative  rounded-lg border-2 border-black bg-white px-3 py-1 font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                          Book a call
                        </span>
                      </a>
                      <a
                        className="relative"
                        href="https://github.com/christopher-aldred"
                      >
                        <span className="h-10 w-12 lg:h-12 lg:w-20 absolute top-0 left-0 mt-1 ml-1  rounded-lg bg-black"></span>
                        <span className="h-10 w-12 lg:h-12 lg:w-20 text-md lg:text-lg flex flex-col justify-center items-center fold-bold relative  rounded-lg border-2 border-black bg-white px-3 py-1 font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 lg:h-6 lg:w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </span>
                      </a>
                      <a
                        className="relative"
                        href="https://www.linkedin.com/in/christopher-aldred-584609163/"
                      >
                        <span className="h-10 w-12 lg:h-12 lg:w-20 absolute top-0 left-0 mt-1 ml-1  rounded-lg bg-black"></span>
                        <span className="h-10 w-12 lg:h-12 lg:w-20 text-md lg:text-lg flex flex-col justify-center items-center fold-bold relative  rounded-lg border-2 border-black bg-white px-3 py-1 font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 lg:h-6 lg:w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                          </svg>
                        </span>
                      </a>
                    </div>
                    <div className="relative row-span-1 lg:row-span-2 col-start-3 row-start-2 lg:row-start-1">
                      <Image
                        className="hidden lg:inline rounded-lg absolute bottom-0 right-0"
                        src="/avatar.png"
                        width={200}
                        height={200}
                        alt="Picture of the author"
                      />
                      <Image
                        className="inline lg:hidden rounded-lg absolute bottom-0 right-0"
                        src="/avatar.png"
                        width={120}
                        height={120}
                        alt="Picture of the author"
                      />
                    </div>
                  </div>
                </div>
              </FadeAndSlide>

              <FadeAndSlide delay="delay-[100ms]">
                <div
                  className={`text-sm font-[200] col-span-4  lg:col-span-1 lg:row-span-6 lg:col-start-4 p-6 ${BOX_STYLE}`}
                >
                  <h1 className="text-lg font-medium">About me</h1>
                  I'm a full-stack software developer from the UK. My expertise
                  spans both front-end and back-end development, allowing me to
                  create comprehensive web applications from start to finish.
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
              </FadeAndSlide>

              <FadeAndSlide delay="delay-[300ms]">
                <div
                  className={`font-[100] text-2xl col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-4 flex items-center justify-center ${BOX_STYLE}`}
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
                        UK Time
                      </div>
                    </center>
                  </Transition>
                </div>
              </FadeAndSlide>

              <FadeAndSlide delay="delay-[400ms]">
                <div
                  className={`lg:col-start-3 lg:row-start-4 col-span-2 lg:col-span-1 p-6 ${BOX_STYLE}`}
                >
                  4
                </div>
              </FadeAndSlide>

              <FadeAndSlide delay="delay-[200ms]">
                <div
                  className={`font-[200] col-span-2 lg:col-span-1 lg:row-span-4 lg:col-start-1 lg:row-start-4 p-6 ${BOX_STYLE}`}
                >
                  <div className="text-lg">Let's start working together!</div>
                  <br />
                  <div className="italic font-[200] text-sm text-slate-500">
                    Contact Details
                  </div>
                  <div className="italic text-sm">
                    <a href="mailto: chris@aldred.dev">chris@aldred.dev</a>
                  </div>
                  <br />
                  <div className="font-[200] text-sm text-slate-500">
                    Socials
                  </div>
                  <a href="https://www.linkedin.com/in/christopher-aldred-584609163/">
                    Linkedin
                  </a>
                  <br />
                  <a href="https://github.com/christopher-aldred">Github</a>
                </div>
              </FadeAndSlide>

              <FadeAndSlide delay="delay-[500ms]">
                <div
                  className={`col-span-2 lg:col-span-1 lg:row-span-2 lg:col-start-2 lg:row-start-5 p-6 ${BOX_STYLE}`}
                >
                  6
                </div>
              </FadeAndSlide>
              <FadeAndSlide delay="delay-[600ms]">
                <div
                  className={`col-span-4 lg:col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-5 p-6 ${BOX_STYLE}`}
                >
                  7
                </div>
              </FadeAndSlide>

              <FadeAndSlide delay="delay-[1000ms]">
                <div
                  className={`col-span-4 lg:col-span-1 lg:col-start-4 lg:row-start-7 p-6 ${BOX_STYLE}`}
                >
                  8
                </div>
              </FadeAndSlide>

              <FadeAndSlide delay="delay-[800ms]">
                <div
                  className={`col-span-4 lg:col-span-1 lg:col-start-2 lg:row-start-7 p-6 ${BOX_STYLE}`}
                >
                  10
                </div>
              </FadeAndSlide>

              <FadeAndSlide delay="delay-[900ms]">
                <div
                  className={`col-span-4 lg:col-span-1 lg:col-start-3 lg:row-start-7 p-6 ${BOX_STYLE}`}
                >
                  11
                </div>
              </FadeAndSlide>
            </div>
          </Transition>
        </main>
      </div>
    </>
  );
}
