import Card from "@/components/fragments/Card";
import MainLayout from "@/layouts/MainLayout";

const BeasiswaView = () => {
  return (
    <MainLayout pageTitle="Beasiswa">
      <section
        className="mx-auto mt-16 mb-16 lg:px-[10em] py-8 lg:py-[5em] pb-0 container"
        // data-aos="fade-in"
        // data-aos-duration="1000"
        // data-aos-delay="300"
        // data-aos-easing="ease-in-out"
      >
        <div
          id="container"
          className="flex lg:flex-row flex-col lg:justify-center gap-1 lg:gap-10"
          // data-aos="fade-in"
          // data-aos-duration="1000"
          // data-aos-delay="300"
          // data-aos-easing="ease-in-out"
        >
          <Card
            redirectTo={"/event/devhandal2023"}
            thumbnail="/src/image/event/devhandal.webp"
            category="Program Beasiswa"
            title="Bangun Masa Depan dengan Beasiswa Developer Handal"
            description="Beasiswa belajar coding selama 1 tahun dan sertifikasi developer internasional. Bangun karir impianmu sebagai JavaScript Developer Expert yang kompeten dan handal."
          />
          <Card
            redirectTo={"/event/idcamp2023"}
            thumbnail="/src/image/event/BLOG-Launching-Program-IDCamp.webp"
            category="Program Beasiswa"
            title="IDCamp 2023"
            description="Membangun Digital Nation Indonesia melalui Beasiswa IDCamp 2023"
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default BeasiswaView;
