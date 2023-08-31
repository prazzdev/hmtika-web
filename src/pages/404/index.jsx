import Image from "next/image";

export default function notFound() {
    return (
        <>
        <section className="flex items-center h-[100vh] p-16 px-4">
            <div className="container w-full flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="w-full text-center px-4">
                    <Image src={'/src/image/404.svg'} width={200} height={300} className="mx-auto mb-6" />
                    <p className="text-2xl font-semibold md:text-3xl">Maaf, halaman yang kamu tuju ngga ada nih.</p>
                    <p className="mt-4 mb-8 text-gray-400">Jangan bingung, kamu bisa pilih menu lain di beranda ya!</p>
                    <a rel="noopener noreferrer" href="../" className="w-full px-8 py-3 font-semibold rounded bg-pteal text-gray-100">Kembali ke Beranda</a>
                </div>
            </div>
        </section>
        </>
    )
}