import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase/config";

export const getImagesByFolder = async (folderPath) => {
  const folderRef = ref(storage, folderPath);
  const images = [];

  try {
    const res = await listAll(folderRef);
    console.log(res);
    const promises = res.items.map(async (itemRef) => {
      const url = await getDownloadURL(itemRef);
      images.push(url);
    });
    await Promise.all(promises);
  } catch (error) {
    console.error("Error fetching images: ", error);
  }

  return images;
};
