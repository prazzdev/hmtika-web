import ProfileBox from "@/components/fragments/ProfileBox";
import MainLayout from "@/layouts/MainLayout";

export default function susunanPengurus() {
  return (
    <MainLayout pageTitle="Susunan Pengurus">
      <section
        className="bg-pgray mt-16 py-6"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-easing="ease-in-out"
      >
        <div className="flex flex-col justify-center items-center mx-auto p-4 sm:p-10 container">
          <h1 className="mb-1 lg:mb-3 font-bold text-center text-pgray text-xl leading-none">
            Struktur Kepengurusan HMTIKA
          </h1>
          <p className="p-2 font-medium text-center text-sgray text-sm uppercase tracking-wider">
            Periode 2022/2023
          </p>
          <div className="flex flex-row flex-wrap justify-center mt-10 lg:mt-20">
            <ProfileBox
              thumb="heni-rahmawati"
              name="Heni Rahmawati, M. Kom"
              position="Pembina"
              email="heni@stb.ac.id"
              linkedIn="#"
              github="#"
              ig="henina.sa"
            />
            <ProfileBox
              thumb="arrazzaq"
              name="Arrazzaq Panca Putra"
              position="Leader"
              email="arrazzaqpancaputra64@gmail.com"
              linkedIn="arrazzaq-panca-putra-b94b08211"
              github="Arrazzaq123"
              ig="arrazzaqpp"
            />
            <ProfileBox
              thumb="agung"
              name="Agung Prasetyo"
              position="Co-Leader"
              email="agung@prazzdev.com"
              linkedIn="agungpraz31"
              github="prazzdev"
              ig="agungpraz31"
              web="https://prazzdev.com"
            />
            <ProfileBox
              thumb="arziqa"
              name="Arziqa Fatimatul Hiyah"
              position="Bendahara"
              email="arzika1116@gmail.com"
              linkedIn="#"
              github="#"
              ig="Arzika__"
            />
            <ProfileBox
              thumb="febiya"
              name="Febiya Sinta Bella"
              position="Bendahara 2"
              email="#"
              linkedIn="#"
              github="#"
              ig="febiya.3gp"
            />
            <ProfileBox
              thumb="tati-fitriana"
              name="Tati Fitriana"
              position="Sekretaris"
              email="tatifa763@gmail.com"
              linkedIn="#"
              github="#"
              ig="_fiitriana"
            />
            <ProfileBox
              thumb="alvin"
              name="Alvin Widodo"
              position="Sekretaris 2"
              email="#"
              linkedIn="#"
              github="#"
              ig="alvin_putra87"
            />
            <ProfileBox
              thumb="gilang-syakbani"
              name="Gilang Fajar Syabani"
              position="Humas"
              email="gilangsyabani1987@gmail.com"
              linkedIn="#"
              github="#"
              ig="angsstilllearning"
            />
            <ProfileBox
              thumb="febri-sarif"
              name="Febri Sarif H"
              position="Humas 2"
              email="#"
              linkedIn="#"
              github="#"
              ig="febri_sarifh"
            />
            <ProfileBox
              thumb="eka-tresnawati"
              name="Eka Tresna Wati"
              position="Humas 3"
              email="ekatresnawati9501@gmail.com"
              linkedIn="#"
              github="Ekatresnawati"
              ig="eka_tress"
            />
            <ProfileBox
              thumb="fitri-nf"
              name="Fitri Nur Fadillah"
              position="Media & Informasi"
              email="#"
              linkedIn="#"
              github="#"
              ig="ftrinf"
            />
            <ProfileBox
              thumb="khafid-ilhan"
              name="Khafid Ilhan Al Manjiz"
              position="Media & Informasi (2)"
              email="#"
              linkedIn="#"
              github="#"
              ig="#"
            />
            <ProfileBox
              thumb="asifa-ahmad"
              name="Asifa Ahmad"
              position="Bidang Keilmuan"
              email="almanjiz009@gmail.com"
              linkedIn="#"
              github="#"
              ig="khafidilhan_"
            />
            <ProfileBox
              thumb="imam"
              name="Imam Nur Falah"
              position="Bidang Keilmuan (2)"
              email="falahimamnur@gmail.com"
              linkedIn="affalximam"
              github="affalximam"
              ig="affalximam"
              web="https://affalximam.my.id"
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
