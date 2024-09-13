"use client";

import { Transition, TransitionChild } from "@headlessui/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BookingModal from "../../components/bookingModal";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

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

export default function Portfolio({ searchParams }: SearchParamProps) {
  const [time, setTime] = useState("");
  const booking = searchParams?.booking;

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
      {booking && <BookingModal />}
      {/* BG square elements */}
      <div className="z-10 area flex">
        <Transition as="div" show={true} appear={true}>
          <FadeIn delay="delay-[0ms]">
            <div className="circles">
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
                      <stop offset="0%" stopColor="rgba(255, 0, 255, 1)"></stop>
                      <stop
                        offset="100%"
                        stopColor="rgba(255, 0, 255, 0)"
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
                      <stop offset="0%" stopColor="rgba(255, 255, 0, 1)"></stop>
                      <stop
                        offset="100%"
                        stopColor="rgba(255, 255, 0, 0)"
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
                      <stop offset="0%" stopColor="rgba(0, 255, 255, 1)"></stop>
                      <stop
                        offset="100%"
                        stopColor="rgba(0, 255, 255, 0)"
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
                      <stop offset="0%" stopColor="rgba(0, 255, 0, 1)"></stop>
                      <stop offset="100%" stopColor="rgba(0, 255, 0, 0)"></stop>
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
                      <stop offset="0%" stopColor="rgba(0,0,255, 1)"></stop>
                      <stop offset="100%" stopColor="rgba(0,0,255, 0)"></stop>
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
                      <stop offset="0%" stopColor="rgba(255,0,0, 1)"></stop>
                      <stop offset="100%" stopColor="rgba(255,0,0, 0)"></stop>
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
              className={`min-h-full grid grid-cols-4 lg:grid-rows-7 gap-4 p-4 xl:px-36`}
            >
              <FadeAndSlide delay="delay-[0ms]">
                <div
                  className={`text-[16px] font-[150] col-span-4 lg:col-span-3 row-span-3 p-6 ${BOX_STYLE}`}
                >
                  <div className="h-full w-full grid grid-cols-3 lg:grid-rows-2 gap-0">
                    <div className="col-span-3 lg:col-span-2 row-start-1 min-h-28">
                      <div className="font-[200] text-sm text-slate-500">
                        Welcome
                      </div>
                      I'm <b>Chris Aldred</b>, a software developer with a
                      strong focus on user experience, animations and micro
                      interactions. Feel free to reach out to me if you have any
                      projects in mind, or just to say hello.
                    </div>
                    <div className="col-span-2 col-start-1 row-start-2 flex items-end flex-wrap h-auto">
                      <Link className="relative mr-4" href="?booking=true">
                        <span className="h-10 w-28 lg:h-12 lg:w-32 absolute top-0 left-0 mt-1 ml-1  rounded-lg bg-black"></span>
                        <span className="h-10 w-28 lg:h-12 lg:w-32 text-md lg:text-lg flex flex-col justify-center items-center fold-bold relative  rounded-lg border-2 border-black bg-white px-3 py-1 font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                          Book a call
                        </span>
                      </Link>
                      <a
                        className="relative mr-4"
                        href="mailto: chris@aldred.dev"
                      >
                        <span className="h-10 w-12 lg:h-12 lg:w-14 absolute top-0 left-0 mt-1 ml-1  rounded-lg bg-black"></span>
                        <span className="h-10 w-12 lg:h-12 lg:w-14 text-md lg:text-lg flex flex-col justify-center items-center fold-bold relative  rounded-lg border-2 border-black bg-white px-3 py-1 font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                          <svg
                            className="h-4 w-4 lg:h-6 lg:w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 512 512"
                          >
                            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                          </svg>
                        </span>
                      </a>
                      <a
                        className="relative mr-4"
                        href="https://github.com/christopher-aldred"
                      >
                        <span className="h-10 w-12 lg:h-12 lg:w-14 absolute top-0 left-0 mt-1 ml-1  rounded-lg bg-black"></span>
                        <span className="h-10 w-12 lg:h-12 lg:w-14 text-md lg:text-lg flex flex-col justify-center items-center fold-bold relative  rounded-lg border-2 border-black bg-white px-3 py-1 font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                          <svg
                            className="h-4 w-4 lg:h-6 lg:w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 496 512"
                          >
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                          </svg>
                        </span>
                      </a>
                      <a
                        className="relative mr-4"
                        href="https://www.linkedin.com/in/christopher-aldred-584609163/"
                      >
                        <span className="h-10 w-12 lg:h-12 lg:w-14 absolute top-0 left-0 mt-1 ml-1  rounded-lg bg-black"></span>
                        <span className="h-10 w-12 lg:h-12 lg:w-14 text-md lg:text-lg flex flex-col justify-center items-center fold-bold relative  rounded-lg border-2 border-black bg-white px-3 py-1 font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                          <svg
                            className="h-4 w-4 lg:h-6 lg:w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 448 512"
                          >
                            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                          </svg>
                        </span>
                      </a>
                      <a
                        className="relative"
                        href="https://wa.me/+447504924583"
                      >
                        <span className="h-10 w-12 lg:h-12 lg:w-14 absolute top-0 left-0 mt-1 ml-1  rounded-lg bg-black"></span>
                        <span className="h-10 w-12 lg:h-12 lg:w-14 text-md lg:text-lg flex flex-col justify-center items-center fold-bold relative  rounded-lg border-2 border-black bg-white px-3 py-1 font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                          <svg
                            className="h-4 w-4 lg:h-6 lg:w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 448 512"
                          >
                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                          </svg>
                        </span>
                      </a>
                    </div>
                    <div className="relative row-span-1 lg:row-span-2 col-start-3 row-start-2 lg:row-start-1 h-28 lg:h-auto">
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
                        width={130}
                        height={130}
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
                  className={`col-span-4 lg:col-span-1 lg:row-span-3 lg:col-start-3 lg:row-start-5 py-4 px-8 lg:px-2 xl:px-4 ${BOX_STYLE}`}
                >
                  <div className="grid h-full grid-cols-2 grid-rows-2 divide-dashed divide-y-2 divide-x-2 divide-slate-400/25 [clip-path:inset(theme(divideWidth.2)_0_0_theme(divideWidth.2))]">
                    <div className="group p-6 flex flex-col justify-between text-center">
                      <div className="text-5xl group-hover:text-yellow-400">
                        7+
                      </div>
                      <div className="text-xs font-[200] text-slate-400 group-hover:text-yellow-400">
                        Years
                      </div>
                      <div className="text-xs font-[200] text-slate-400 group-hover:text-yellow-400">
                        experience
                      </div>
                    </div>
                    <div className="group p-6 flex flex-col justify-between text-center">
                      <div className="text-5xl group-hover:text-yellow-400">
                        5
                      </div>
                      <div className="text-xs font-[200] text-slate-400 group-hover:text-yellow-400">
                        Programming
                      </div>
                      <div className="text-xs font-[200] text-slate-400 group-hover:text-yellow-400">
                        languages
                      </div>
                    </div>
                    <div className="p-6 flex flex-col justify-between text-center group">
                      <div className="text-5xl group-hover:text-yellow-400">
                        2
                      </div>
                      <div className="text-xs font-[200] text-slate-400 group-hover:text-yellow-400">
                        Certifications
                      </div>
                    </div>
                    <div className="p-6 flex flex-col justify-between text-center group">
                      <div className="text-5xl group-hover:text-yellow-400">
                        1
                      </div>
                      <div className="text-xs font-[200] text-slate-400 group-hover:text-yellow-400">
                        Bachelors
                      </div>
                      <div className="text-xs font-[200] text-slate-400 group-hover:text-yellow-400">
                        degree
                      </div>
                    </div>
                  </div>
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
            </div>
          </Transition>
        </main>
      </div>
    </>
  );
}
