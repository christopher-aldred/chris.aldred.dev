// Server-side Modal

import { Transition, TransitionChild } from "@headlessui/react";
import Link from "next/link";

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

export default function BookingModal() {
  return (
    <Transition as="div" show={true} appear={true}>
      <FadeIn delay="delay-[100ms]">
        <div className="z-50 fixed inset-0 bg-gray-900 bg-opacity-90 overflow-y-auto h-full w-full flex items-center justify-center">
          <FadeAndSlide delay="delay-[300ms]">
            <div className="p-4 border w-auto h-auto shadow-lg rounded-md bg-white">
              <div className="text-center">
                <div className="flex flex-col justify-center">
                  {/* Navigates back to the base URL - closing the modal */}
                  <iframe
                    className="rounded-md inline-block lg:hidden"
                    src="https://koalendar.com/e/meet-with-chris-aldred?embed=true"
                    width="325px"
                    height="525px"
                  ></iframe>
                  <iframe
                    className="rounded-md lg:inline-block hidden"
                    src="https://koalendar.com/e/meet-with-chris-aldred?embed=true"
                    width="400px"
                    height="650px"
                  ></iframe>
                  <Link
                    href="/"
                    className="mt-4 px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  >
                    Close
                  </Link>
                </div>
              </div>
            </div>
          </FadeAndSlide>
        </div>
      </FadeIn>
    </Transition>
  );
}
