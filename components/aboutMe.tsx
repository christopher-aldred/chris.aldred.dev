import { FadeAndSlide } from "../utils/animations";

export default function AboutMe() {
  return (
    <FadeAndSlide delay="delay-[100ms]">
      <div
        className={`text-sm font-[200] col-span-4  lg:col-span-1 lg:row-span-6 lg:col-start-4 p-6 custom-box-style`}
      >
        <h1 className="text-lg font-medium">About me</h1>
        I'm a full-stack software developer from the UK. My expertise spans both
        front-end and back-end development, allowing me to create comprehensive
        web applications from start to finish.
        <br />
        <br />
        My tools of choice are:
        <ul>
          <li>&#8226; TypeScript</li>
          <li>&#8226; React</li>
          <li>&#8226; NextJS</li>
          <li>&#8226; Tailwind</li>
          <li>&#8226; Tina CMS</li>
        </ul>
        <br />
        Beyond coding, I'm passionate about rock climbing, music and traveling.
        While I have some preferred tools, I always choose the best one for the
        job, even if it's not on my usual list. My goal is to find the right
        solution for each project.
      </div>
    </FadeAndSlide>
  );
}
