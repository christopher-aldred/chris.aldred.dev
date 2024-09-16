import Link from "next/link";
import { FadeAndSlide } from "../utils/animations";

import Image from "next/image";

export default function MainComponent() {
  return (
    <FadeAndSlide delay="delay-[100ms]">
      <div
        className={`text-[16px] font-[150] col-span-4 lg:col-span-3 row-span-3 p-6 custom-box-style`}
      >
        <div className="h-full w-full grid grid-cols-3 lg:grid-rows-2 gap-0">
          <div className="col-span-3 lg:col-span-2 row-start-1 min-h-28">
            <div className="font-[200] text-lg text-slate-500">Welcome</div>
            I'm <b>Chris Aldred</b>, a software developer with a strong focus on
            user experience, animations and micro interactions. Feel free to
            reach out to me if you have any projects in mind, or just to say
            hello.
          </div>
          <div className="col-span-2 col-start-1 row-start-2 flex items-end flex-wrap h-auto">
            <Link
              className="relative mr-4"
              href="https://koalendar.com/e/meet-with-chris-aldred"
            >
              <span className="h-10 w-28 lg:h-12 lg:w-32 absolute top-0 left-0 mt-1 ml-1  rounded-lg bg-black"></span>
              <span className="h-10 w-28 lg:h-12 lg:w-32 text-md lg:text-lg flex flex-col justify-center items-center fold-bold relative  rounded-lg border-2 border-black bg-white px-3 py-1 font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                Book a call
              </span>
            </Link>
            <a className="relative mr-4" href="mailto: chris@aldred.dev">
              <span className="h-10 w-12 lg:h-12 lg:w-14 absolute top-0 left-0 mt-1 ml-1  rounded-lg bg-black"></span>
              <span className="h-10 w-12 lg:h-12 lg:w-14 text-md lg:text-lg flex flex-col justify-center items-center fold-bold relative  rounded-lg border-2 border-black bg-white px-3 py-1 font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                <svg
                  className="h-4 w-4 lg:h-6 lg:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                </svg>
              </span>
            </a>
            <a
              className="relative mr-4"
              href="https://github.com/christopher-aldred"
            >
              <span className="h-10 w-12 lg:h-12 lg:w-14 absolute top-0 left-0 mt-1 ml-1  rounded-lg bg-black"></span>
              <span className="h-10 w-12 lg:h-12 lg:w-14 text-md lg:text-lg flex flex-col justify-center items-center fold-bold relative  rounded-lg border-2 border-black bg-white px-3 py-1 font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                <svg
                  className="h-4 w-4 lg:h-6 lg:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 496 512"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </span>
            </a>
            <a
              className="relative mr-4"
              href="https://www.linkedin.com/in/christopher-aldred-584609163/"
            >
              <span className="h-10 w-12 lg:h-12 lg:w-14 absolute top-0 left-0 mt-1 ml-1  rounded-lg bg-black"></span>
              <span className="h-10 w-12 lg:h-12 lg:w-14 text-md lg:text-lg flex flex-col justify-center items-center fold-bold relative  rounded-lg border-2 border-black bg-white px-3 py-1 font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                <svg
                  className="h-4 w-4 lg:h-6 lg:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
            </a>
            <a className="relative" href="https://wa.me/+447504924583">
              <span className="h-10 w-12 lg:h-12 lg:w-14 absolute top-0 left-0 mt-1 ml-1  rounded-lg bg-black"></span>
              <span className="h-10 w-12 lg:h-12 lg:w-14 text-md lg:text-lg flex flex-col justify-center items-center fold-bold relative  rounded-lg border-2 border-black bg-white px-3 py-1 font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                <svg
                  className="h-4 w-4 lg:h-6 lg:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </span>
            </a>
          </div>
          <div className="relative row-span-1 lg:row-span-2 col-start-3 row-start-2 lg:row-start-1 h-28 lg:h-auto">
            <Image
              className="hidden lg:inline rounded-lg absolute bottom-0 right-0"
              src="/avatar.png"
              width={200}
              height={200}
              alt="Picture of the author"
            />
            <Image
              className="inline lg:hidden rounded-lg absolute bottom-0 right-0"
              src="/avatar.png"
              width={130}
              height={130}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </FadeAndSlide>
  );
}
