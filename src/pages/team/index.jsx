import Layout from "@/components/Layout";
import ProfileBox from "../../components/fragments/ProfileBox";

export default function team() {
  return (
    <Layout pageTitle="Team">
      <section
        className="dark:bg-gray-800 mt-16 py-6 dark:text-gray-100"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-easing="ease-in-out"
      >
        <div className="flex flex-col justify-center items-center mx-auto p-4 sm:p-10 container">
          <h1 className="mb-1 lg:mb-3 font-bold text-center text-xl lg:text-4xl leading-none">
            Struktur Kepengurusan HMTIKA
          </h1>
          <p className="p-2 font-medium text-center text-sm uppercase tracking-wider">
            Periode 2023/2024
          </p>
          <div className="flex flex-row flex-wrap justify-center mt-10 lg:mt-20">
            <ProfileBox
              name="Arrazzaq Panca Putra"
              position="Leader"
              email="#"
              linkedIn="#"
              github="#"
              ig="#"
            />
            <ProfileBox
              name="Agung Prasetyo"
              position="Co-Leader"
              email="mailto:prazzid31@gmail.com"
              linkedIn="https://linkedin.com/agungpraz31"
              github="https://github.com/prazzdev"
              ig="https://instagram.com/agungpraz31"
            />
            <ProfileBox
              name="Arziqa Fatimatul Hiyah"
              position="Bendahara"
              email="#"
              linkedIn="#"
              github="#"
              ig="#"
            />
            <ProfileBox
              name="Febiya Sinta Bella"
              position="Bendahara 2"
              email="#"
              linkedIn="#"
              github="#"
              ig="#"
            />
            <ProfileBox
              name="Tati Fitriana"
              position="Sekretaris"
              email="#"
              linkedIn="#"
              github="#"
              ig="#"
            />
            <ProfileBox
              name="Alvin Widodo"
              position="Sekretaris 2"
              email="#"
              linkedIn="#"
              github="#"
              ig="#"
            />
            <ProfileBox
              name="Gilang Fajar Syabani"
              position="Humas"
              email="#"
              linkedIn="#"
              github="#"
              ig="#"
            />
            <ProfileBox
              name="Febri Sarif H"
              position="Humas 2"
              email="#"
              linkedIn="#"
              github="#"
              ig="#"
            />
            <ProfileBox
              name="Eka Tresna Wati"
              position="Humas 3"
              email="#"
              linkedIn="#"
              github="#"
              ig="#"
            />
            <ProfileBox
              name="Fitri Nur Fadillah"
              position="Media & Informasi"
              email="#"
              linkedIn="#"
              github="#"
              ig="#"
            />
            <ProfileBox
              name="Khafid Ilhan Al Manjiz"
              position="Media & Informasi (2)"
              email="#"
              linkedIn="#"
              github="#"
              ig="#"
            />
            <ProfileBox
              name="Asifa Ahmad"
              position="Bidang Keilmuan"
              email="#"
              linkedIn="#"
              github="#"
              ig="#"
            />
            <ProfileBox
              name="Imam Nur Falah"
              position="Bidang Keilmuan (2)"
              email="#"
              linkedIn="#"
              github="#"
              ig="#"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
