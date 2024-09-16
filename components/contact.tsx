import { FadeAndSlide } from "../utils/animations";

export default function Contact() {
  return (
    <FadeAndSlide delay="delay-[300ms]">
      <div
        className={`text-sm font-[200] col-span-2 lg:col-span-1 lg:row-span-4 lg:col-start-1 lg:row-start-4 p-4 lg:p-6 custom-box-style`}
      >
        <div className="text-lg">Let's start working together!</div>
        <br />
        <div className="font-[200] text-sm text-slate-500">Contact Details</div>
        <div className="text-sm">
          <a className="hover:text-[#fede59]" href="mailto: chris@aldred.dev">
            chris@aldred.dev
          </a>
        </div>
        <br />
        <div className="font-[200] text-sm text-slate-500">Socials</div>
        <a
          className="hover:text-[#fede59]"
          href="https://www.linkedin.com/in/christopher-aldred-584609163/"
        >
          Linkedin
        </a>
        <br />
        <a
          className="hover:text-[#fede59]"
          href="https://github.com/christopher-aldred"
        >
          Github
        </a>
        <br />
        <a className="hover:text-[#fede59]" href="https://wa.me/+447504924583">
          WhatsApp
        </a>
      </div>
    </FadeAndSlide>
  );
}
