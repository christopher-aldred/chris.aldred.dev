"use client";

import { Transition, TransitionChild } from "@headlessui/react";

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
  "z-20 transition-color text-gray-100 p-6 ease-in-out border border-neutral-700 hover:border-sky-600 bg-neutral-800/60 duration-200 rounded-lg";

export default async function Test() {
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

        <main className="flex-col items-stretch min-h-screen justify-between">
          <div className="z-10 w-full h-full items-center justify-between">
            <Transition show={true} appear={true}>
              <div
                className={`h-full border-slate-100  grid grid-cols-4 grid-rows-8 gap-4 py-5 px-40`}
              >
                <FadeIn delay="delay-[0ms]">
                  <div
                    className={`text-[16px] font-[150] col-span-3 row-span-4 ${BOX_STYLE}`}
                  >
                    Hi, I'm <b>Chris Aldred</b>, a software developer with
                    strong focus on the user experience, animations and micro
                    interactions. Feel free to reach out to me if you have any
                    projects in mind, or just to say hello.
                  </div>
                </FadeIn>

                <FadeIn delay="delay-[100ms]">
                  <div
                    className={`text-sm font-[150] row-span-6 col-start-4 ${BOX_STYLE}`}
                  >
                    <h1 className="text-lg font-medium">About me</h1>
                    Hi, I'm Chris, a full-stack software developer from the UK
                    🇬🇧
                    <br />
                    <br />
                    My tools of choice are:
                    <ul>
                      <li>&#8226; JavaScript/TypeScript</li>
                      <li>&#8226; React</li>
                      <li>&#8226; NextJS</li>
                      <li>&#8226; Tailwind</li>
                      <li>&#8226; Tina CMS</li>
                    </ul>
                    <br />
                    Beyond coding, I'm passionate about rock climbing, music and
                    traveling. While I have some preferred tools, I always
                    choose the best one for the job, even if it's not on my
                    usual list. My goal is to find the right solution for each
                    project.
                  </div>
                </FadeIn>

                <FadeIn delay="delay-[300ms]">
                  <div className={`col-start-2 row-start-5 ${BOX_STYLE}`}>
                    3
                  </div>
                </FadeIn>

                <FadeIn delay="delay-[400ms]">
                  <div className={`col-start-3 row-start-5 ${BOX_STYLE}`}>
                    4
                  </div>
                </FadeIn>

                <FadeIn delay="delay-[200ms]">
                  <div
                    className={`row-span-4 col-start-1 row-start-5 ${BOX_STYLE}`}
                  >
                    5
                  </div>
                </FadeIn>

                <FadeIn delay="delay-[500ms]">
                  <div
                    className={`row-span-2 col-start-2 row-start-6 ${BOX_STYLE}`}
                  >
                    6
                  </div>
                </FadeIn>

                <FadeIn delay="delay-[600ms]">
                  <div
                    className={`row-span-2 col-start-3 row-start-6 ${BOX_STYLE}`}
                  >
                    7
                  </div>
                </FadeIn>

                <FadeIn delay="delay-[1000ms]">
                  <div className={`col-start-4 row-start-8 ${BOX_STYLE}`}>
                    8
                  </div>
                </FadeIn>

                <FadeIn delay="delay-[700ms]">
                  <div className={`col-start-4 row-start-7 ${BOX_STYLE}`}>
                    9
                  </div>
                </FadeIn>

                <FadeIn delay="delay-[800ms]">
                  <div className={`col-start-2 row-start-8 ${BOX_STYLE}`}>
                    10
                  </div>
                </FadeIn>

                <FadeIn delay="delay-[900ms]">
                  <div className={`col-start-3 row-start-8 ${BOX_STYLE}`}>
                    11
                  </div>
                </FadeIn>
              </div>
            </Transition>
          </div>
        </main>
      </div>
    </>
  );
}
