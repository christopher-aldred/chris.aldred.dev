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

const TEST = "";

export default async function Test() {
  return (
    <main className="flex flex-col items-center justify-between py-8 px-32">
      <div className=" z-10 w-full h-full items-center justify-between">
        <Transition show={true} appear={true}>
          <div className="grid grid-rows-3 grid-flow-col gap-4 px-4 py-4 leading-10">
            <FadeIn delay="delay-[0ms]">
              <div className="transition-color ease-in-out border border-gray-700 hover:border-sky-600 bg-neutral-950/50 duration-200 p-4 w-full rounded-xl row-span-3">
                &nbsp;
              </div>
            </FadeIn>

            <FadeIn delay="delay-[200ms]">
              <div className="p-4 w-full transition-color ease-in-out border border-gray-700 hover:border-sky-600 bg-neutral-950/50 duration-200 rounded-xl col-span-2">
                &nbsp;
              </div>
            </FadeIn>

            <FadeIn delay="delay-[400ms]">
              <div className="p-4 w-full transition-color ease-in-out border border-gray-700 hover:border-sky-600 bg-neutral-950/50 duration-200 rounded-xl row-span-2 col-span-2">
                &nbsp;
              </div>
            </FadeIn>
          </div>
        </Transition>
      </div>
    </main>
  );
}
