import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function UnderConstruction() {
    return (
        <>
        <Layout pageTitle={'Dalam proses pengembangan!'}>
            <section className="flex items-center h-[100vh] p-16 px-4">
                <div className="container w-full flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="w-full text-center px-4">
                        <Image src={'/src/image/under-construction.svg'} width={200} height={300} className="mx-auto mb-6" />
                        <p className="text-2xl font-semibold md:text-3xl">Maaf, halaman yang kamu tuju sedang tahap pengembangan.</p>
                        <p className="mt-4 mb-8 text-gray-400">It's okay, kamu bisa pilih menu lain di daftar menu ya!</p>
                        <Link rel="noopener noreferrer" href="../" className="w-full px-8 py-3 font-semibold rounded bg-pteal text-gray-100">Kembali ke Beranda</Link>
                    </div>
                </div>
            </section>
        </Layout>
        </>
    )
}