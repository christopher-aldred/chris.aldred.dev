"use client";

import { Transition } from "@headlessui/react";
import BookingModal from "../components/bookingModal";
import { BgAnimated, FadeAndSlide, FadeIn } from "../utils/animations";
import MainComponent from "../components/mainComponent";
import AboutMe from "../components/aboutMe";
import Clock from "../components/clock";
import Experience from "../components/experience";
import Contact from "../components/contact";
import BlogButton from "../components/blogButton";
import Collaboration from "../components/collaboration";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Portfolio({ searchParams }: SearchParamProps) {
  const booking = searchParams?.booking;

  return (
    <>
      <Transition as="div" show={true} appear={true}>
        <BgAnimated />
      </Transition>

      <div className="z-10 area flex">
        <main className="flex-col justify-between overflow-auto">
          <Transition show={true} appear={true}>
            <FadeAndSlide delay="delay-[0ms]">
              <h1 className="p-2 mt-2 lg:mt-4 lg:gap-4 lg:p-4 xl:px-36 font-[100] text-2xl lg:text-4xl drop-shadow-[5px_5px_7px_rgba(0,0,0,0.99)] lg:drop-shadow-[5px_5px_10px_rgba(0,0,0,0.99)] text-transparent bg-clip-text bg-white">
                <div className="font-[250]">Chris Aldred</div>
                Development & Freelancing
              </h1>
            </FadeAndSlide>
            <div
              className={`max-h-full grid grid-cols-4 lg:grid-rows-7 gap-2 p-2 lg:gap-4 lg:p-4 xl:px-36`}
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
