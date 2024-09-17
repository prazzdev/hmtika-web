import Image from "next/image";
import styles from "./ProfileSect.module.css";

export default function ProfileSect() {
  return (
    <section id="ProfileSect" className={styles.ProfileSect}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="lg:hidden -mt-[4em] rotate-180"
      >
        <path
          fill="#eee"
          fill-opacity="1"
          d="M0,128L34.3,122.7C68.6,117,137,107,206,112C274.3,117,343,139,411,176C480,213,549,267,617,266.7C685.7,267,754,213,823,181.3C891.4,149,960,139,1029,154.7C1097.1,171,1166,213,1234,213.3C1302.9,213,1371,171,1406,149.3L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
      <div className="def-container bg-pgray flex flex-col mx-auto">
        <h1 className="uppercase font-bold text-xl text-gray-600 mx-auto mb-5 animate__animated animate__bounce animate__delay-2s animate__repeat-2 2">
          Profil
        </h1>
        <div className="">
          <p className="text-justify text-gray-500">
            Himpunan Mahasiswa Informatika (HMTIKA) merupakan salah satu
            himpunan bagi mahasiswa jurusan di STIMIK Tunas Bangsa Banjarnegara
            program studi Informatika.
          </p>
          <div className="flex justify-around mt-10">
            <div id="box" className="flex flex-col justify-center items-center">
              <h1 className="text-2xl text-gray-600 mb-1">13</h1>
              <h5 className="text-gray-500">Pengurus</h5>
            </div>
            <div id="box" className="flex flex-col justify-center items-center">
              <h1 className="text-2xl text-gray-600 mb-1">6</h1>
              <h5 className="text-gray-500">Bidang</h5>
            </div>
          </div>
        </div>
      </div>
      {/* <Image id='cross1' src={'/src/image/cross-teal.svg'} width={23} height={23} /> */}
      {/* <Image id='cross2' src={'/src/image/cross-teal.svg'} width={25} height={25} /> */}
    </section>
  );
}
