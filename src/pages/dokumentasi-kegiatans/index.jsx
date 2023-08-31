import EventCarousel from "@/components/EventCarousel";
import Layout from "@/components/Layout";

export default function dokumentasiKegiatan() {
    return (
        <>
        <Layout pageTitle={'Dokumentasi Kegiatan'}>
            <section className="pt-[100px]"
            // data-aos="fade-in"
            // data-aos-duration="1000"
            // data-aos-delay="300"
            // data-aos-easing="ease-in-out"
            >
                <h1 className="text-xl text-pgray font-bold text-center mb-10">Dokumentasi Kegiatan</h1>
                <EventCarousel
                    title={'Workshop SMK Panca Bhakti Rakit 2021 -  HMTIKA Goes TO School'} 
                    slideList={[
                        { id: 'slide1', imgSrc: 'https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg', leftBtn: '3', rightBtn: '2' },
                        { id: 'slide2', imgSrc: 'https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg', leftBtn: '1', rightBtn: '3' },
                        { id: 'slide3', imgSrc: 'https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg', leftBtn: '2', rightBtn: '1' }
                    ]} />
                
            </section>
        </Layout>
        </>
    )
}