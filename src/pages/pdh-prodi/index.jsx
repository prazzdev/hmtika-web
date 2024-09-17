import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";

export default function pdhProdi() {
  return (
    <>
      <MainLayout pageTitle={"PDH Prodi"}>
        <section
          className="pt-[100px] pb-[40px]"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
        >
          <h1 className="mb-10 font-bold text-center text-pgray text-xl">
            Pakaian Dinas Harian (PDH) Prodi
          </h1>
          <Image
            src={"/src/image/pdh-hmtika.webp"}
            height={300}
            width={300}
            className="shadow-md mx-auto"
          />
        </section>
      </MainLayout>
    </>
  );
}
