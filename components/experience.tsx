import { FadeAndSlide } from "../utils/animations";

export default function Experience() {
  return (
    <FadeAndSlide delay="delay-[800ms]">
      <div
        className={`col-span-4 lg:col-span-1 lg:row-span-3 lg:col-start-3 lg:row-start-5 py-4 lg:py-4 px-8 lg:px-2 xl:px-4 custom-box-style`}
      >
        <div className="grid h-full grid-cols-2 grid-rows-2 divide-dashed divide-y-2 divide-x-2 divide-slate-400/25 [clip-path:inset(theme(divideWidth.2)_0_0_theme(divideWidth.2))]">
          <div className="group p-6 flex flex-col justify-between text-center">
            <div className="text-5xl group-hover:text-[#fede59]">7+</div>
            <div className="text-xs font-[200] text-slate-400 group-hover:text-[#fede59]">
              Years
            </div>
            <div className="text-xs font-[200] text-slate-400 group-hover:text-[#fede59]">
              experience
            </div>
          </div>
          <div className="group p-6 flex flex-col justify-between text-center">
            <div className="text-5xl group-hover:text-[#fede59]">5</div>
            <div className="text-xs font-[200] text-slate-400 group-hover:text-[#fede59]">
              Programming
            </div>
            <div className="text-xs font-[200] text-slate-400 group-hover:text-[#fede59]">
              languages
            </div>
          </div>
          <div className="p-6 flex flex-col justify-between text-center group">
            <div className="text-5xl group-hover:text-[#fede59]">2</div>
            <div className="text-xs font-[200] text-slate-400 group-hover:text-[#fede59]">
              Certifications
            </div>
          </div>
          <div className="p-6 flex flex-col justify-between text-center group">
            <div className="text-5xl group-hover:text-[#fede59]">1</div>
            <div className="text-xs font-[200] text-slate-400 group-hover:text-[#fede59]">
              Bachelors
            </div>
            <div className="text-xs font-[200] text-slate-400 group-hover:text-[#fede59]">
              degree
            </div>
          </div>
        </div>
      </div>
    </FadeAndSlide>
  );
}
