const arrowDown = "../../src/image/arrow-down.svg";
import Image from "next/image";
import BoxReveal from "../../magicui/box-reveal";
import { useEffect, useState } from "react";

export default function Hero({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY / 2000;
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center mt-[4em] lg:mt-0 pt- lg:pt-[6em] pb-0 lg:pb-[3em] min-h-[340px] lg:min-h-[100svh] overflow-hidden"
    >
      {images.length > 0 && (
        <div className="hero-image-wrapper">
          <Image
            src={images[currentImageIndex]?.source?.replace("//", "https://")}
            width={3000}
            height={3000}
            alt="Hero Image"
            className="object-cover w-full h-full"
            style={{
              transform: `scale(${scale})`,
              opacity: fade ? 1 : 0,
              transition: "transform 0.1s ease-out, opacity 0.5s ease-in-out",
            }}
          />
        </div>
      )}
      <div className="top-0 right-0 bottom-0 left-0 z-10 absolute flex lg:flex-row flex-col justify-center lg:items-center place-items-start lg:gap-[10em] bg-[rgba(0,0,0,0.6)] px-[2em] lg:px-[6em] lg:p-[5em] min-w-[100svw] lg:min-h-[100svh] overflow-hidden">
        <div className="flex flex-col">
          <BoxReveal boxColor={"#00adb5"} duration={0.5}>
            <p className="font-semibold text-[2rem] text-white lg:text-[3.7rem]">
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
        <a
          href="#profile"
          className="z-10 lg:hidden bg-[#00ADB5] shadow-md mx-auto mt-6 p-2 rounded-lg"
          data-aos="flip-up"
          data-aos-delay="1000"
        >
          <img src={arrowDown} alt="direct to down" className="w-4 lg:w-6" />
        </a>
      </div>
    </section>
  );
}
