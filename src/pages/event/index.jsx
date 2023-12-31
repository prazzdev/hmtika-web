import Layout from "@/components/Layout"
import Card from "../../components/Card"

export default function Event() {
    return(
        <>
        <Layout pageTitle="Beasiswa">
        <div 
            id="container" 
            className="flex justify-around items-center flex-wrap p-4 px-6 lg:p-8 pt-[100px]"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
            >
            <Card 
                redirectTo={'/event/devhandal2023'}
                thumbnail="/src/image/event/devhandal.webp"
                category="Program Beasiswa"
                title="Bangun Masa Depan dengan Beasiswa Developer Handal"
                description="Beasiswa belajar coding selama 1 tahun dan sertifikasi developer internasional. Bangun karir impianmu sebagai JavaScript Developer Expert yang kompeten dan handal."    
            />
            <Card 
                redirectTo={'/event/idcamp2023'}
                thumbnail="/src/image/event/BLOG-Launching-Program-IDCamp.webp"
                category="Program Beasiswa"
                title="IDCamp 2023"
                description="Membangun Digital Nation Indonesia melalui Beasiswa IDCamp 2023"    
            />
        </div>
        </Layout>
        </>
    )
}
