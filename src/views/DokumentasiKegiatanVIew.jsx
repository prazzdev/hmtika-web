import MainLayout from "@/layouts/MainLayout";

const DokumentasiKegiatanView = () => {
  let dir = "/src/image/event/documentation/";

  return (
    <MainLayout pageTitle={"Dokumentasi Kegiatan"}>
      <section
        className="pt-[100px] pb-10"
        // data-aos="fade-in"
        // data-aos-duration="1000"
        // data-aos-delay="300"
        // data-aos-easing="ease-in-out"
      >
        <h1 className="mb-10 font-bold text-center text-pgray text-xl">
          Dokumentasi Kegiatan
        </h1>
        <div id="eventWrapper" className="flex flex-col items-center">
          {/* Workshop PB Rakit 2022 */}
          <div
            id=""
            className="bg-gray-100 shadow-md mx-auto mb-8 p-5 rounded-xl w-[90%]"
          >
            <h1 className="mb-4 font-semibold text-center text-sgray">
              Workshop SMK Panca Bhakti Rakit 2022 - HMTIKA Goes To School
            </h1>
            <div className="rounded-lg w-full h-[200px] overflow-hidden carousel">
              <div
                id="workshopprb22-1"
                className="relative w-full carousel-item"
              >
                <img
                  src={
                    dir +
                    "311594237_1069715677075939_6023243686612142872_n.webp"
                  }
                  className="w-full"
                />
                <div className="top-1/2 right-5 left-5 absolute flex justify-between transform -translate-y-1/2">
                  <a href="#workshopprb22-6" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#workshopprb22-2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div
                id="workshopprb22-2"
                className="relative w-full carousel-item"
              >
                <img
                  src={
                    dir + "311590757_183171420896584_6251819352431627605_n.webp"
                  }
                  className="w-full"
                />
                <div className="top-1/2 right-5 left-5 absolute flex justify-between transform -translate-y-1/2">
                  <a href="#workshopprb22-1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#workshopprb22-3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div
                id="workshopprb22-3"
                className="relative w-full carousel-item"
              >
                <img
                  src={
                    dir +
                    "311590480_1186242388913350_1358555972082875442_n.webp"
                  }
                  className="w-full"
                />
                <div className="top-1/2 right-5 left-5 absolute flex justify-between transform -translate-y-1/2">
                  <a href="#workshopprb22-2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#workshopprb22-4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div
                id="workshopprb22-4"
                className="relative w-full carousel-item"
              >
                <img
                  src={
                    dir +
                    "310698766_1230234381041917_2765427752342309026_n.webp"
                  }
                  className="w-full"
                />
                <div className="top-1/2 right-5 left-5 absolute flex justify-between transform -translate-y-1/2">
                  <a href="#workshopprb22-3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#workshopprb22-5" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div
                id="workshopprb22-5"
                className="relative w-full carousel-item"
              >
                <img
                  src={
                    dir + "310790237_498394945477101_1276484577073781258_n.webp"
                  }
                  className="w-full"
                />
                <div className="top-1/2 right-5 left-5 absolute flex justify-between transform -translate-y-1/2">
                  <a href="#workshopprb22-4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#workshopprb22-6" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div
                id="workshopprb22-6"
                className="relative w-full carousel-item"
              >
                <img
                  src={
                    dir +
                    "310679954_1072180676751363_7503244524716196533_n.webp"
                  }
                  className="w-full"
                />
                <div className="top-1/2 right-5 left-5 absolute flex justify-between transform -translate-y-1/2">
                  <a href="#workshopprb22-5" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#workshopprb22-1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Workshop PB Rakit 2021 */}
          <div
            id=""
            className="bg-gray-100 shadow-md mx-auto mb-8 p-5 rounded-xl w-[90%]"
          >
            <h1 className="mb-4 font-semibold text-center text-sgray">
              Workshop SMK Panca Bhakti Rakit 2021 - HMTIKA Goes To School
            </h1>
            <div className="rounded-lg w-full h-[200px] overflow-hidden carousel">
              <div
                id="workshoppbr21-1"
                className="relative w-full carousel-item"
              >
                <img
                  src={dir + "IMG-20230831-WA0007.webp"}
                  className="w-full"
                />
                <div className="top-1/2 right-5 left-5 absolute flex justify-between transform -translate-y-1/2"></div>
              </div>
            </div>
          </div>
          {/* Pelatihan Siswa PKL 2022 */}
          <div
            id=""
            className="bg-gray-100 shadow-md mx-auto mb-8 p-5 rounded-xl w-[90%]"
          >
            <h1 className="mb-4 font-semibold text-center text-sgray">
              Pelatihan untuk Siswa SMK PKL di STIMIK Tunas Bangsa
            </h1>
            <div className="rounded-lg w-full h-[200px] overflow-hidden carousel">
              <div id="pklstb2023-1" className="relative w-full carousel-item">
                <img
                  src={dir + "IMG-20230831-WA0004.webp"}
                  className="w-full"
                />
                <div className="top-1/2 right-5 left-5 absolute flex justify-between transform -translate-y-1/2"></div>
              </div>
            </div>
          </div>
          {/* Ngoding Bareng (MGOBAR) - Introduction to C Programming */}
          <div
            id=""
            className="bg-gray-100 shadow-md mx-auto mb-8 p-5 rounded-xl w-[90%]"
          >
            <h1 className="mb-4 font-semibold text-center text-sgray">
              Ngoding Bareng (NGOBAR) - Introduction to C Programming
            </h1>
            <div className="rounded-lg w-full h-[200px] overflow-hidden carousel">
              <div id="ngobarC2022-1" className="relative w-full carousel-item">
                <img
                  src={dir + "IMG-20230831-WA0015.webp"}
                  className="w-full"
                />
                <div className="top-1/2 right-5 left-5 absolute flex justify-between transform -translate-y-1/2">
                  <a href="#ngobarC2022-3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#ngobarC2022-2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="ngobarC2022-2" className="relative w-full carousel-item">
                <img
                  src={dir + "IMG-20230831-WA0017.webp"}
                  className="w-full"
                />
                <div className="top-1/2 right-5 left-5 absolute flex justify-between transform -translate-y-1/2">
                  <a href="#ngobarC2022-1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#ngobarC2022-3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="ngobarC2022-3" className="relative w-full carousel-item">
                <img
                  src={dir + "IMG-20230831-WA0018.webp"}
                  className="w-full"
                />
                <div className="top-1/2 right-5 left-5 absolute flex justify-between transform -translate-y-1/2">
                  <a href="#ngobarC2022-2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#ngobarC2022-1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Pemrograman Rutin Anggota HMTIKA */}
          <div
            id=""
            className="bg-gray-100 shadow-md mx-auto mb-8 p-5 rounded-xl w-[90%]"
          >
            <h1 className="mb-4 font-semibold text-center text-sgray">
              Pemrograman Rutin Anggota HMTIKA
            </h1>
            <div className="rounded-lg w-full h-[200px] overflow-hidden carousel">
              <div id="ngobarRutin-1" className="relative w-full carousel-item">
                <img
                  src={
                    dir + "276106928_279979457493103_4748464840513651431_n.webp"
                  }
                  className="w-full"
                />
                <div className="top-1/2 right-5 left-5 absolute flex justify-between transform -translate-y-1/2">
                  <a href="#ngobarRutin-2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#ngobarRutin-2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="ngobarRutin-2" className="relative w-full carousel-item">
                <img
                  src={
                    dir + "276043595_522005912595397_3759447026620874580_n.webp"
                  }
                  className="w-full"
                />
                <div className="top-1/2 right-5 left-5 absolute flex justify-between transform -translate-y-1/2">
                  <a href="#ngobarRutin-1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#ngobarRutin-1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default DokumentasiKegiatanView;
