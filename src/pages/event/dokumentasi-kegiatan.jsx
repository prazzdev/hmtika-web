// import { getImagesByFolder } from "@/services/firebaseStorage";
// import { useEffect, useState } from "react";
import DokumentasiKegiatanView from "@/views/DokumentasiKegiatanVIew";
const DokumentasiKegiatanPage = () => {
  // const [images, setImages] = useState([]);

  // const fetchImages = async () => {
  //   const images = await getImagesByFolder("images/Dokumentasi Kegiatan");
  //   setImages(images);
  // };

  // useEffect(() => {
  //   console.log("Fetching images...");
  //   fetchImages();
  //   console.log(images);
  // }, []);

  return <DokumentasiKegiatanView />;
};

export default DokumentasiKegiatanPage;
