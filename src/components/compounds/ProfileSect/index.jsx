import styles from "./ProfileSect.module.css";

export default function ProfileSect() {
  return (
    <section
      id="profile"
      className={`${styles.ProfileSect} flex lg:hidden lg:px-[10em] py-8 lg:py-[6em] lg:pb-[2em]`}
    >
      <div className="flex flex-col bg-pgray mx-auto def-container">
        <h1 className="mx-auto mb-5 font-bold text-gray-600 text-xl lg:text-2xl uppercase animate__animated animate__bounce animate__delay-2s animate__repeat-2 2">
          Profil
        </h1>
        <div className="">
          <p className="text-gray-500 text-justify">
            Himpunan Mahasiswa Informatika (HMTIKA) merupakan salah satu
            himpunan bagi mahasiswa jurusan di STIMIK Tunas Bangsa Banjarnegara
            program studi Informatika.
          </p>
          <div className="flex justify-around mt-10">
            <div id="box" className="flex flex-col justify-center items-center">
              <h1 className="mb-1 text-2xl text-gray-600">13</h1>
              <h5 className="text-gray-500">Pengurus</h5>
            </div>
            <div id="box" className="flex flex-col justify-center items-center">
              <h1 className="mb-1 text-2xl text-gray-600">6</h1>
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
