import Card from "@/components/fragments/Card";
import MainLayout from "@/layouts/MainLayout";

const KegiatanRutinView = () => {
  let dir = "/src/image/event/documentation/";

  return (
    <MainLayout pageTitle={"Kegiatan Rutin"}>
      <section
        className="mx-auto mt-16 mb-16 lg:px-[10em] py-8 lg:py-[5em] pb-0 container"
        // data-aos="fade-in"
        // data-aos-duration="1000"
        // data-aos-delay="300"
        // data-aos-easing="ease-in-out"
      >
        <h1 className="mb-10 font-bold text-center text-pgray text-xl">
          Kegiatan Rutin
        </h1>
        <div className="flex lg:flex-row flex-col lg:justify-center gap-1 lg:gap-10">
          <Card
            thumbnail={
              dir + "276106928_279979457493103_4748464840513651431_n.webp"
            }
            category="Kegiatan Rutin"
            title="Pelatihan Pemrograman Rutin"
            description="Pelatihan Pemrograman Rutin setiap jum'at di lab kampus."
          />
          <Card
            thumbnail={
              dir + "265643106_286429510167578_9076176840685618495_n.webp"
            }
            category="Kegiatan Rutin"
            title="Rapat Rutin Pengurus"
            description="Rapat rutin pengurus HMTIKA STB dilaksanakan setiap 2 pekan sekali."
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default KegiatanRutinView;
