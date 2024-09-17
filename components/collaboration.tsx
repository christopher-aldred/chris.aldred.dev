import { FadeAndSlide } from "../utils/animations";

export default function Collaboration() {
  return (
    <FadeAndSlide delay="delay-[300ms]">
      <div
        className={`text-sm font-[200] col-span-2 lg:col-span-1 lg:row-span-2 lg:col-start-2 lg:row-start-5 p-4 lg:p-6 custom-box-style`}
      >
        <div className="text-xl lg:text-2xl font-[100] text-center ">
          Past collaboration
        </div>
        <div className="grid grid-cols-1 gap-6 lg:gap-2 mt-4">
          <div className="flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src="/images/bae.png"
              alt="Photo 1"
              className="max-w-[140px] w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src="/images/atherton.webp"
              alt="Photo 2"
              className="max-w-[140px] w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src="/images/capgemini.png"
              alt="Photo 3"
              className="max-w-[140px] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </FadeAndSlide>
  );
}
