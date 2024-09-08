"use client";

import { Transition, TransitionChild } from "@headlessui/react";
import { useEffect, useState } from "react";
import Image from "next/image";

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
      <div className="z-10 area flex">
        <ul className="circles ">
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
                  <stop offset="0%" stop-color="rgba(255, 0, 255, 1)"></stop>
                  <stop offset="100%" stop-color="rgba(255, 0, 255, 0)"></stop>
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
                  <stop offset="0%" stop-color="rgba(255, 255, 0, 1)"></stop>
                  <stop offset="100%" stop-color="rgba(255, 255, 0, 0)"></stop>
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
                  <stop offset="0%" stop-color="rgba(0, 255, 255, 1)"></stop>
                  <stop offset="100%" stop-color="rgba(0, 255, 255, 0)"></stop>
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
                  <stop offset="100%" stop-color="rgba(0, 255, 0, 0)"></stop>
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
        </ul>

        <main className="flex-col justify-between overflow-scroll">
          <Transition show={true} appear={true}>
            <div
              className={`min-h-full grid grid-cols-4 lg:grid-rows-8 gap-4 py-5 px-5 xl:px-44`}
            >
              <FadeIn delay="delay-[0ms]">
                <div
                  className={`text-[16px] font-[150] col-span-4 lg:col-span-3 row-span-4 p-6 ${BOX_STYLE}`}
                >
                  <div className="h-full grid grid-cols-3 grid-rows-1 gap-4">
                    <div className="col-span-3 md:col-span-2">
                      <div className="font-[200] text-sm text-slate-500">
                        Welcome
                      </div>
                      I'm <b>Chris Aldred</b>, a software developer with a
                      strong focus on user experience, animations and micro
                      interactions. Feel free to reach out to me if you have any
                      projects in mind, or just to say hello.
                    </div>
                    <div className="flex justify-end items-end col-span-3 col-start-3">
                      <Image
                        className="hidden lg:block rounded-lg"
                        src="/avatar.png"
                        width={300}
                        height={600}
                        alt="Picture of the author"
                      />
                      <Image
                        className="inline lg:hidden rounded-lg"
                        src="/avatar.png"
                        width={150}
                        height={150}
                        alt="Picture of the author"
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay="delay-[100ms]">
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
              </FadeIn>

              <FadeIn delay="delay-[300ms]">
                <div
                  className={`font-[100] text-2xl col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-5 flex items-center justify-center ${BOX_STYLE}`}
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
              </FadeIn>

              <FadeIn delay="delay-[400ms]">
                <div
                  className={`lg:col-start-3 lg:row-start-5 col-span-2 lg:col-span-1 p-6 ${BOX_STYLE}`}
                >
                  4
                </div>
              </FadeIn>

              <FadeIn delay="delay-[200ms]">
                <div
                  className={`font-[200] col-span-2 lg:col-span-1 lg:row-span-4 lg:col-start-1 lg:row-start-5 p-6 ${BOX_STYLE}`}
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
              </FadeIn>

              <FadeIn delay="delay-[500ms]">
                <div
                  className={`col-span-2 lg:col-span-1 lg:row-span-2 lg:col-start-2 lg:row-start-6 p-6 ${BOX_STYLE}`}
                >
                  6
                </div>
              </FadeIn>
              <FadeIn delay="delay-[600ms]">
                <div
                  className={`col-span-4 lg:col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-6 p-6 ${BOX_STYLE}`}
                >
                  7
                </div>
              </FadeIn>

              <FadeIn delay="delay-[1000ms]">
                <div
                  className={`col-span-4 lg:col-span-1 lg:col-start-4 lg:row-start-8 p-6 ${BOX_STYLE}`}
                >
                  8
                </div>
              </FadeIn>

              <FadeIn delay="delay-[700ms]">
                <div
                  className={`col-span-4 lg:col-span-1 lg:col-start-4 lg:row-start-7 p-6 ${BOX_STYLE}`}
                >
                  9
                </div>
              </FadeIn>

              <FadeIn delay="delay-[800ms]">
                <div
                  className={`col-span-4 lg:col-span-1 lg:col-start-2 lg:row-start-8 p-6 ${BOX_STYLE}`}
                >
                  10
                </div>
              </FadeIn>

              <FadeIn delay="delay-[900ms]">
                <div
                  className={`col-span-4 lg:col-span-1 lg:col-start-3 lg:row-start-8 p-6 ${BOX_STYLE}`}
                >
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
