// Server-side Modal

import { Transition, TransitionChild } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";

const FadeIn = ({ delay, children }) => (
  <TransitionChild
    enter={`transition-all ease-in-out duration-200 ${delay}`}
    enterFrom="opacity-0 translate-y-0"
    enterTo="opacity-100 translate-y-0"
    leave="transition-all ease-in-out duration-300"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    {children}
  </TransitionChild>
);
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

export default function FullScreenModal() {
  return (
    <Transition as="div" show={true} appear={true}>
      <FadeIn delay="delay-[100ms]">
        <div className="z-50 fixed inset-0 bg-neutral-950/80 overflow-y-auto h-full w-full flex items-center justify-center">
          <FadeAndSlide delay="delay-[300ms]">
            <div className="p-4 border border-neutral-700 shadow-lg rounded-lg bg-neutral-900 flex flex-col max-h-[90vh] w-[90vw] lg:w-[40vw]">
              <div className="flex flex-col">
                <div className="text-center text-white text-xl lg:text-2xl font-[100] mb-4">
                  Portfolio
                </div>
              </div>

              <a href="https://leaderboard.aldred.dev/" className="group">
                <div className="border group-hover:border-slate-100 min-h-28 border-neutral-700 bg-neutral-900 rounded-lg p-4 text-lg  text-white text-center font-[100] mb-4 flex flex-col items-center justify-center relative">
                  <Image
                    className="opacity-10 ease-in-out group-hover:opacity-30 rounded-lg object-cover bg-gradient-to-tl from-transparent to-neutral-900"
                    src="/images/trophy.png"
                    layout="fill"
                    objectFit="cover"
                    alt="leaderboard image"
                    priority
                    style={{
                      maskImage:
                        "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
                      WebkitMaskImage:
                        "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
                    }}
                  />
                  <div className="relative z-10 group-hover:font-[200]">
                    leaderboard.aldred.dev
                    <div className="text-sm text-neutral-400">
                      Typescript + React + Antd + Firebase
                    </div>
                  </div>
                </div>
              </a>

              <a href="https://atherton-arboriculture.co.uk/" className="group">
                <div className="border group-hover:border-slate-100 min-h-28 border-neutral-700 bg-neutral-900 rounded-lg p-4 text-lg  text-white text-center font-[100] mb-4 flex flex-col items-center justify-center relative">
                  <Image
                    className="opacity-10 ease-in-out group-hover:opacity-30 rounded-lg object-cover bg-gradient-to-tl from-transparent to-neutral-900"
                    src="/images/trees.png"
                    layout="fill"
                    objectFit="cover"
                    alt="leaderboard image"
                    priority
                    style={{
                      maskImage:
                        "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
                      WebkitMaskImage:
                        "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
                    }}
                  />
                  <div className="relative z-10 group-hover:font-[200]">
                    atherton-arboriculture.co.uk
                    <div className="text-sm text-neutral-400">
                      Static mobile responsive website
                    </div>
                  </div>
                </div>
              </a>

              <div className="cursor-not-allowed border min-h-28 border-neutral-700 bg-neutral-900 rounded-lg p-4 text-lg  text-white text-center font-[100] mb-4 flex flex-col items-center justify-center relative">
                <Image
                  className="opacity-10 ease-in-out group-hover:opacity-20 rounded-lg object-cover bg-gradient-to-tl from-transparent to-neutral-900"
                  src="/images/pencils.png"
                  layout="fill"
                  objectFit="cover"
                  alt="leaderboard image"
                  priority
                  style={{
                    maskImage:
                      "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
                    WebkitMaskImage:
                      "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
                  }}
                />
                <div className="relative z-10">
                  todo.aldred.dev
                  <div className="text-sm text-neutral-400">
                    Typescript + React + Antd + Firebase
                  </div>
                </div>
              </div>

              <Link
                href="/"
                scroll={false}
                className="mt-auto w-full p-2 bg-[#39b4ff] text-center font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Close
              </Link>
            </div>
          </FadeAndSlide>
        </div>
      </FadeIn>
    </Transition>
  );
}
