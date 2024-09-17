import Footer from "@/components/compounds/Footer";
import Header from "@/components/compounds/Header";
import Meta from "@/components/fragments/Meta";
import NavMenu from "@/components/compounds/NavMenu";
import PageReadIndicator from "@/components/fragments/PageReadIndicator";
import Image from "next/image";

export default function Article({ pageTitle, thumbnail, date, children }) {
  return (
    <>
      <Meta pageTitle={pageTitle} thumbnail={thumbnail} />
      <Header />
      <section
        className="px-6 p-4 pt-[100px] article"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-easing="ease-in-out"
      >
        <div className="relative rounded-xl w-[100%] h-[200px] overflow-hidden">
          <Image
            src={thumbnail}
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <h1 className="mt-5 font-bold text-[18px] text-justify text-pgray">
          {pageTitle}
        </h1>
        <h5 className="mt-2">{date}</h5>
        <div className="my-4 main-article">{children}</div>
      </section>
      <NavMenu />
      <Footer />
      <PageReadIndicator />
      <script rc="https://unpkg.com/aos@next/dist/aos.js"></script>
    </>
  );
}
