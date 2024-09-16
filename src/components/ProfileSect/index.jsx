import Image from "next/image";
import styles from "./ProfileSect.module.css";

export default function ProfileSect() {
  return (
    <section id="ProfileSect" className={styles.ProfileSect}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="lg:hidden -mt-[4em]"
      >
        <path
          fill="#eee"
          fill-opacity="1"
          d="M0,32L60,74.7C120,117,240,203,360,208C480,213,600,139,720,138.7C840,139,960,213,1080,202.7C1200,192,1320,96,1380,48L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
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
