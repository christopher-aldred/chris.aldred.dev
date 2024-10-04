"use server";

import { Transition } from "@headlessui/react";
import { BgAnimated, FadeAndSlide } from "../../utils/animations";
import Link from "next/link";

export default async function Blog() {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Transition as="div" show={true} appear={true}>
          <BgAnimated />
        </Transition>
      </div>

      <div className="z-10 flex items-center justify-center min-h-screen">
        <main className="justify-between overflow-hidden w-full max-w-4xl mx-auto px-4">
          <Transition show={true} appear={true}>
            <FadeAndSlide delay="delay-[0ms]">
              <header className="flex items-end w-full mb-8 mt-8">
                <Link
                  href="/"
                  className="text-white text-opacity-50 hover:text-white transition-colors duration-200"
                >
                  ← Back
                </Link>
                <div className="flex-grow text-center">
                  <h1 className="font-[150] lg:font-[100] text-2xl lg:text-4xl drop-shadow-[5px_5px_7px_rgba(0,0,0,0.99)] lg:drop-shadow-[5px_5px_10px_rgba(0,0,0,0.99)] text-transparent bg-clip-text bg-white">
                    <div className="font-[300] lg:font-[250]">Blog</div>
                    chris.aldred.dev
                  </h1>
                </div>
                <span className="invisible">← Back</span>
                {/* Invisible copy for spacing */}
              </header>
            </FadeAndSlide>

            <div className="space-y-4 lg:space-y-8">
              {[1, 2, 3].map((index) => (
                <FadeAndSlide key={index} delay={`delay-[${index * 300}ms]`}>
                  <article className="custom-box-style p-6">
                    <h2 className="font-[200] text-2xl mb-4 text-white">
                      Blog Post {index}
                    </h2>
                    <p className="text-neutral-100 text-[16px] font-[200]">
                      This is a temporary blog entry. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="mt-4 text-sm font-[200] text-neutral-400">
                      Posted on {new Date().toLocaleDateString()}
                    </div>
                  </article>
                </FadeAndSlide>
              ))}
            </div>

            <footer className="h-4 lg:h-8"></footer>
          </Transition>
        </main>
      </div>
    </>
  );
}
