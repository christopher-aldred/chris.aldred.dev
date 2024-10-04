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
        <div className="z-50 fixed inset-0 bg-black/70 h-full w-full flex items-center justify-center">
          <FadeAndSlide delay="delay-[300ms]">
            <div className="p-4 border border-neutral-700 shadow-lg rounded-lg bg-neutral-600/50 backdrop-blur-lg flex flex-col max-h-[90dvh] w-[90vw] lg:w-[50vw]">
              <div className="flex flex-col">
                <div className="text-center text-neutral-100 font-[200] text-2xl lg:text-4xl mb-4">
                  Portfolio
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 overflow-y-auto rounded-lg">
                <div className="group block rounded-xl bg-black/40 hover:bg-[#fede59] p-4 cursor-pointer">
                  <a
                    href="http://atherton-arboriculture.co.uk"
                    className="block text-inherit no-underline hover:no-underline"
                  >
                    <span className="inline-block rounded-lg pb-3">
                      <div className="inline-flex align-middle justify-center items-center select-none text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          className="w-[32px] h-[32px] group-hover:text-slate-950"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            strokeWidth="1.5"
                            d="M12 17h7l-4.5-6.5h3L12 3l-5.5 7.5h3L5 17zm0 0v4"
                          />
                        </svg>
                      </div>
                    </span>

                    <h2 className="mt-2 font-[300] text-xl text-neutral-100 group-hover:text-neutral-950">
                      atherton-arboriculture.co.uk
                    </h2>
                    <p className="sm:mt-1 block font-[200] text-sm text-neutral-200 group-hover:text-neutral-950">
                      A static mobile responsive site for a small arboriculture
                      business.
                    </p>
                  </a>
                </div>

                <div className="group block rounded-xl bg-black/40 hover:bg-[#fede59] p-4 cursor-pointer">
                  <a
                    href="https://leaderboard.aldred.dev/view/310OmMvkUeH7Yp7W27kl"
                    className="block text-inherit no-underline hover:no-underline"
                  >
                    <span className="inline-block rounded-lg pb-3">
                      <div className="inline-flex align-middle justify-center items-center select-none text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 32 32"
                          className="w-[32px] h-[32px] group-hover:text-slate-950"
                        >
                          <path
                            fill="currentColor"
                            d="M26 7h-2V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v1H6a2 2 0 0 0-2 2v3a4.005 4.005 0 0 0 4 4h.322A8.17 8.17 0 0 0 15 21.934V26h-5v2h12v-2h-5v-4.069A7.97 7.97 0 0 0 23.74 16H24a4.005 4.005 0 0 0 4-4V9a2 2 0 0 0-2-2M8 14a2 2 0 0 1-2-2V9h2Zm14 0a6 6 0 0 1-6.185 5.997A6.2 6.2 0 0 1 10 13.707V6h12Zm4-2a2 2 0 0 1-2 2V9h2Z"
                          />
                        </svg>
                      </div>
                    </span>

                    <h2 className="mt-2 font-[300] text-xl text-neutral-100 group-hover:text-neutral-950">
                      leaderboard.aldred.dev
                    </h2>
                    <p className="sm:mt-1 block font-[200] text-sm text-neutral-200 group-hover:text-neutral-950">
                      A public leaderboard web app written using Typescript,
                      React & Firebase.
                    </p>
                  </a>
                </div>

                <div className="group block rounded-xl bg-black/40 hover:bg-[#fede59] p-4 cursor-pointer">
                  <a
                    href="#"
                    className="block text-inherit no-underline hover:no-underline"
                  >
                    <span className="inline-block rounded-lg pb-3">
                      <div className="inline-flex align-middle justify-center items-center select-none text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          className="w-[32px] h-[32px] group-hover:text-slate-950"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            strokeWidth="1.5"
                            color="currentColor"
                          >
                            <path d="m12.88 7.017l4.774 1.271m-5.796 2.525l2.386.636m-2.267 6.517l.954.255c2.7.72 4.05 1.079 5.114.468c1.063-.61 1.425-1.953 2.148-4.637l1.023-3.797c.724-2.685 1.085-4.027.471-5.085s-1.963-1.417-4.664-2.136l-.954-.255c-2.7-.72-4.05-1.079-5.113-.468c-1.064.61-1.426 1.953-2.15 4.637l-1.022 3.797c-.724 2.685-1.086 4.027-.471 5.085c.614 1.057 1.964 1.417 4.664 2.136" />
                            <path d="m12 20.946l-.952.26c-2.694.733-4.04 1.1-5.102.477c-1.06-.622-1.422-1.99-2.143-4.728l-1.021-3.872c-.722-2.737-1.083-4.106-.47-5.184C2.842 6.966 4 7 5.5 7" />
                          </g>
                        </svg>
                      </div>
                    </span>

                    <h2 className="mt-2 font-[300] text-xl text-neutral-100 group-hover:text-neutral-950">
                      todo.aldred.dev
                    </h2>
                    <p className="sm:mt-1 block font-[200] text-sm text-neutral-200 group-hover:text-neutral-950">
                      A public web app for taking notes, written using
                      Typescript, React and Firebase.
                    </p>
                  </a>
                </div>

                <div className="group block rounded-xl bg-black/40  p-4 ">
                  <span className="inline-block rounded-lg pb-3">
                    <div className="inline-flex align-middle justify-center items-center select-none text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        className="w-[32px] h-[32px]"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="m15 16l-2.414-2.414A2 2 0 0 1 12 12.172V6" />
                        </g>
                      </svg>
                    </div>
                  </span>

                  <h2 className="mt-2 font-[300] text-xl text-neutral-100">
                    Coming soon
                  </h2>
                  <p className="sm:mt-1 block font-[200] text-sm text-neutral-200">
                    More portfolio projects in develpoment.
                  </p>
                </div>
              </div>

              <br className="block sm:hidden" />

              <Link
                href="/"
                scroll={false}
                className="mt-auto w-full p-2 bg-[#39b4ff] text-white text-center font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
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
