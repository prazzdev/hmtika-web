const arrowDown = "../../src/image/arrow-down.svg";
import Image from "next/image";
import HyperText from "../magicui/hyper-text";
import WordPullUp from "../magicui/word-pull-up";
import BoxReveal from "../magicui/box-reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative lg:flex flex-col justify-center lg:justify-end items-center pt-0 lg:pt-[6em] pb-0 lg:pb-[3em] min-h-[340px] lg:min-h-[100svh]"
    >
      <Image
        src="/src/image/hero.webp"
        width={3000}
        height={3000}
        className="top-0 right-0 bottom-0 left-0 absolute blur-xs min-w-[100svw] min-h-[340px] lg:min-h-[100svh] filter hero-image"
      />
      <a
        href="#ProfileSect"
        className="bg-[#00ADB5] shadow-md p-2 rounded-lg"
        data-aos="flip-up"
        data-aos-delay="1000"
      >
        <img src={arrowDown} alt="direct to down" className="w-4 lg:w-6" />
      </a>
    </section>
  );
}
