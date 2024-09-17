import Card from "../../fragments/Card";

export default function EventList() {
  let dir = "/src/image/event/documentation/";
  return (
    <>
      <div
        id="container"
        className="flex lg:flex-row flex-col flex-wrap lg:justify-center items-center lg:gap-10 px-6 p-4"
        // data-aos="fade-in"
        // data-aos-duration="1000"
        // data-aos-delay="300"
        // data-aos-easing="ease-in-out"
      >
        <Card
          thumbnail={
            dir + "276106928_279979457493103_4748464840513651431_n.webp"
          }
          category="Kegiatan Rutin"
          title="Pelatihan Pemrograman Rutin"
          description="Pelatihan Pemrograman Rutin setiap jum'at di lab kampus."
        />
        <Card
          thumbnail={dir + "IMG-20230831-WA0005.webp"}
          category="HMTIKA Goes To School"
          title="Introduction to React Native"
          description="Pengenalan React Native, salah satu framework bahasa pemrograman Javascript pada Android."
        />
        <Card
          redirectTo={"pelatihan-siswa-pkl"}
          thumbnail={dir + "IMG-20230831-WA0004.webp"}
          category="Training"
          title="Pelatihan Siswa PKL SMK di STIMIK Tunas Bangsa"
          description="Pelatihan Ms Word, Ms Excel & Ms Power Point di lab kampus."
        />
      </div>
    </>
  );
}
