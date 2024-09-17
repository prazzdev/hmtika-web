import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";
import Link from "next/link";

export default function notFound() {
  return (
    <>
      <MainLayout pageTitle={"Halaman tidak ditemukan!"}>
        <section className="flex items-center px-4 p-16 h-[100vh]">
          <div className="flex flex-col justify-center items-center mx-auto my-8 px-5 w-full container">
            <div className="px-4 w-full text-center">
              <Image
                src={"/src/image/404.svg"}
                width={200}
                height={300}
                className="mx-auto mb-6"
              />
              <p className="font-semibold text-2xl md:text-3xl">
                Maaf, halaman yang kamu tuju ngga ada nih.
              </p>
              <p className="mt-4 mb-8 text-gray-400">
                It's okay, kamu bisa pilih menu lain di daftar menu ya!
              </p>
              <Link
                rel="noopener noreferrer"
                href="../"
                className="bg-pteal px-8 py-3 rounded w-full font-semibold text-gray-100"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
