import Link from "next/link";
import { FadeAndSlide } from "../utils/animations";
import Image from "next/image";

export default function PorfolioButton() {
  return (
    <FadeAndSlide delay="delay-[400ms]">
      <Link
        href="/?show=true"
        scroll={false}
        className="min-h-20 group flex flex-col col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-4 items-center justify-center custom-box-style relative"
      >
        <Image
          className="opacity-20 ease-in-out group-hover:opacity-30 rounded-lg object-cover bg-gradient-to-tl from-transparent to-neutral-900"
          src="/images/desk2.avif"
          layout="fill"
          objectFit="cover"
          alt="Picture of the author"
          priority
          style={{
            maskImage:
              "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
          }}
        />
        <div className="text-xl lg:text-2xl font-[100] absolute inset-y-0 left-0 z-30 w-full rounded-lg flex hover-bold-text">
          <div className="m-auto flex justify-center items-center drop-shadow-[1px_1px_1px_rgba(0,0,0,0.99)]">
            Portfolio&nbsp;
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
      </Link>
    </FadeAndSlide>
  );
}
