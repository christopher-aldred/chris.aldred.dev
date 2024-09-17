import { FadeAndSlide } from "../utils/animations";
import Image from "next/image";

export default function BlogButton() {
  return (
    <FadeAndSlide delay="delay-[500ms]">
      <div className="opacity-90 flex flex-col col-span-2 lg:col-span-1  items-center justify-center custom-box-style relative">
        <Image
          className="opacity-20 rounded-lg object-cover"
          src="/blogging.jpg"
          layout="fill"
          objectFit="cover"
          alt="Picture of the author"
          priority
        />
        <div className="text-xl lg:text-2xl font-[100] absolute inset-y-0 left-0 z-30 w-full rounded-lg bg-gradient-to-tl from-transparent to-neutral-950 flex">
          <div className="m-auto flex justify-center items-center">
            Blog&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>
      </div>
    </FadeAndSlide>
  );
}
