const arrowDown = "../../src/image/arrow-down.svg";
import Image from "next/image";
import BoxReveal from "../../magicui/box-reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative lg:flex flex-col justify-center items-center pt-0 lg:pt-[6em] pb-0 lg:pb-[3em] min-h-[340px] lg:min-h-[100svh] overflow-hidden"
    >
      <Image
        src="/src/image/hero.webp"
        width={3000}
        height={3000}
        className="top-0 right-0 bottom-0 left-0 absolute blur-xs min-w-full lg:min-w-[100svw] min-h-[360px] lg:min-h-[100svh] filter hero-image"
      />
      <div className="top- right-0 bottom-0 left-0 z-10 absolute flex lg:flex-row flex-col justify-center lg:items-center place-items-start lg:gap-[10em] bg-[rgba(0,0,0,0.6)] px-[5em] lg:px-[6em] p-[5em] min-w-[100svw] min-h-[100svh] overflow-hidden">
        <div className="flex flex-col">
          <BoxReveal boxColor={"#00adb5"} duration={0.5}>
            <p className="font-semibold text-[3.5rem] text-white lg:text-[3.7rem]">
              Selamat Datang<span className="text-[#00adb5]">.</span>
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#00adb5"} duration={1}>
            <h2 className="mt-[.5rem] text-[1rem] text-white lg:text-[1.3rem]">
              Website Resmi Himpunan Mahasiswa Informatika
            </h2>
            <h2 className="mt-[.5rem] text-[1rem] text-white lg:text-[1.5rem]">
              STIMIK Tunas Bangsa Banjarnegara
            </h2>
          </BoxReveal>
        </div>
        <BoxReveal boxColor={"#00adb5"} duration={1} className="min-h-fit">
          <div className="lg:flex flex-row justify-center items-center gap-10 hidden">
            <Image
              src="/src/image/stb.png"
              alt=""
              width={100}
              height={100}
              className="lg:inline-flex hidden -mt-5 lg:min-w-[180px]"
            />
            <Image
              src="/src/image/logo.webp"
              alt=""
              width={100}
              height={100}
              className="lg:inline-flex hidden -mt-1 lg:min-w-[180px]"
            />
          </div>
        </BoxReveal>
      </div>
      <a
        href="#ProfileSect"
        className="lg:hidden bg-[#00ADB5] shadow-md p-2 rounded-lg"
        data-aos="flip-up"
        data-aos-delay="1000"
      >
        <img src={arrowDown} alt="direct to down" className="w-4 lg:w-6" />
      </a>
    </section>
  );
}
