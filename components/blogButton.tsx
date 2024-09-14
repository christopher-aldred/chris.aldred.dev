import { FadeAndSlide } from "../utils/animations";
import Image from "next/image";

export default function BlogButton() {
  return (
    <FadeAndSlide delay="delay-[400ms]">
      <div className="flex flex-col col-span-2 lg:col-span-1  items-center justify-center custom-box-style relative">
        <Image
          className="opacity-15 rounded-lg object-cover"
          src="/blogging.jpg"
          layout="fill"
          objectFit="cover"
          alt="Picture of the author"
        />
        <div className="text-2xl font-[100] absolute inset-y-0 left-0 z-30 w-full rounded-lg bg-gradient-to-tl from-transparent to-neutral-800 flex">
          <div className="m-auto">Blog / News</div>
        </div>
      </div>
    </FadeAndSlide>
  );
}
