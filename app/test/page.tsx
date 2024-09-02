"use client";

import Image from "next/image";
import { tinaField, useTina } from "tinacms/dist/react";
import { Transition, TransitionChild } from "@headlessui/react";

const FadeIn = ({ delay, children }) => (
  <TransitionChild
    enter={`transition-all ease-in-out duration-700 ${delay}`}
    enterFrom="opacity-0 translate-y-24"
    enterTo="opacity-100 translate-y-0"
    leave="transition-all ease-in-out duration-300"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    {children}
  </TransitionChild>
);

const BOX_STYLE =
  "transition-color ease-in-out border border-gray-700 hover:border-sky-600 bg-neutral-950/80 duration-200 rounded-lg";

export default async function Test() {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <main className="flex flex-col items-stretch min-h-screen justify-between">
        <div className="z-10 w-full h-screen items-center justify-between">
          <Transition show={true} appear={true}>
            <div className={`h-full border-slate-100  grid grid-cols-4 grid-rows-8 gap-4 py-5 px-40`}>
              <div className={`col-span-3 row-span-4 ${BOX_STYLE}`}>1</div>
              <div className={`row-span-6 col-start-4 ${BOX_STYLE}`}>2</div>
              <div className={`col-start-2 row-start-5 ${BOX_STYLE}`}>3</div>
              <div className={`col-start-3 row-start-5 ${BOX_STYLE}`}>4</div>
              <div className={`row-span-4 col-start-1 row-start-5 ${BOX_STYLE}`}>5</div>
              <div className={`row-span-2 col-start-2 row-start-6 ${BOX_STYLE}`}>6</div>
              <div className={`row-span-2 col-start-3 row-start-6 ${BOX_STYLE}`}>7</div>
              <div className={`col-start-4 row-start-8 ${BOX_STYLE}`}>8</div>
              <div className={`col-start-4 row-start-7 ${BOX_STYLE}`}>9</div>
              <div className={`col-start-2 row-start-8 ${BOX_STYLE}`}>10</div>
              <div className={`col-start-3 row-start-8 ${BOX_STYLE}`}>11</div>
            </div>
          </Transition>
        </div>
      </main>
    </>
  );
}
