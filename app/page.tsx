"use client";

import { Transition } from "@headlessui/react";
import { BgAnimated, FadeAndSlide, FadeIn } from "../utils/animations";
import MainComponent from "../components/mainComponent";
import AboutMe from "../components/aboutMe";
import Clock from "../components/clock";
import Experience from "../components/experience";
import Contact from "../components/contact";
import BlogButton from "../components/blogButton";
import Collaboration from "../components/collaboration";
export default function Portfolio() {
  return (
    <>
      <Transition as="div" show={true} appear={true}>
        <BgAnimated />
      </Transition>

      <div className="z-10 area flex">
        <main className="justify-between overflow-auto mb-2 lg:mb-0">
          <Transition show={true} appear={true}>
            <FadeAndSlide delay="delay-[0ms]">
              <header className="flex-shrink-0">
                <h1 className="p-2 mt-2 lg:mt-4 lg:gap-4 lg:p-4 xl:px-36 font-[150] lg:font-[100] text-2xl lg:text-4xl drop-shadow-[5px_5px_7px_rgba(0,0,0,0.99)] lg:drop-shadow-[5px_5px_10px_rgba(0,0,0,0.99)] text-transparent bg-clip-text bg-white">
                  <div className="font-[300] lg:font-[250]">Chris Aldred</div>
                  Development & Freelancing
                </h1>
              </header>
            </FadeAndSlide>
            <div
              className={`h-[650px] grid grid-cols-4 lg:grid-rows-7 gap-2 p-2 lg:gap-4 lg:p-4 xl:px-28`}
            >
              <MainComponent />

              <AboutMe />

              <Clock />

              <BlogButton />

              <Experience />

              <FadeAndSlide delay="delay-[700ms]">
                <div
                  className={`col-span-4 lg:col-span-1 lg:col-start-2 lg:row-start-7 p-4 lg:p-6 custom-box-style flex`}
                >
                  <div className="m-auto text-slate-500 font-[150]">WIP</div>
                </div>
              </FadeAndSlide>

              <Contact />

              <Collaboration />

              <FadeAndSlide delay="delay-[900ms]">
                <div
                  className={`flex col-span-4 lg:col-span-1 lg:col-start-4 lg:row-start-7  p-4 lg:p-6 text-xs font-[200] custom-box-style`}
                >
                  <div className="m-auto">
                    © 2024 · Crafted with ♥️ by Chris.
                  </div>
                </div>
              </FadeAndSlide>
            </div>
          </Transition>
        </main>
      </div>
    </>
  );
}
