import Layout from "@/components/Layout";
import Image from "next/image";

export default function pdhProdi() {
    return (
        <>
        <Layout pageTitle={'PDH Prodi'} >
            <section 
                    className="pt-[100px] pb-[40px]"
                    // data-aos="fade-in"
                    // data-aos-duration="1000"
                    // data-aos-delay="300"
                    // data-aos-easing="ease-in-out"
                >
                <h1 className="text-xl text-pgray font-bold text-center mb-10">Pakaian Dinas Harian (PDH) Prodi</h1>
                <Image src={'/src/image/pdh.webp'} height={300} width={300} className="mx-auto shadow-md" />
            </section>
        </Layout>
        </>
    )
}