import { FadeAndSlide } from "../utils/animations";

export default function Contact() {
  return (
    <FadeAndSlide delay="delay-[200ms]">
      <div
        className={`font-[200] col-span-2 lg:col-span-1 lg:row-span-4 lg:col-start-1 lg:row-start-4 p-6 custom-box-style`}
      >
        <div className="text-lg">Let's start working together!</div>
        <br />
        <div className="italic font-[200] text-sm text-slate-500">
          Contact Details
        </div>
        <div className="italic text-sm">
          <a href="mailto: chris@aldred.dev">chris@aldred.dev</a>
        </div>
        <br />
        <div className="font-[200] text-sm text-slate-500">Socials</div>
        <a href="https://www.linkedin.com/in/christopher-aldred-584609163/">
          Linkedin
        </a>
        <br />
        <a href="https://github.com/christopher-aldred">Github</a>
        <br />
        <a href="https://wa.me/+447504924583">WhatsApp</a>
      </div>
    </FadeAndSlide>
  );
}
