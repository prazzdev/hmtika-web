import Card from "@/components/Card";
import Layout from "@/components/Layout";

export default function kegiatanRutin() {
    let dir = '/src/image/event/documentation/'
    return (
        <>
        <Layout pageTitle={'Kegiatan Rutin'}>
            <section 
                className="pt-[100px]"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-easing="ease-in-out"
            >
                <h1 className="text-xl text-pgray font-bold text-center mb-10">Kegiatan Rutin</h1>
                <div className="flex flex-col items-center">
                    <Card
                        thumbnail={dir+'276106928_279979457493103_4748464840513651431_n.webp'}
                        category="Kegiatan Rutin"
                        title="Pelatihan Pemrograman Rutin"
                        description="Pelatihan Pemrograman Rutin setiap jum'at di lab kampus."    
                    />
                    <Card
                        thumbnail={dir+'265643106_286429510167578_9076176840685618495_n.webp'}
                        category="Kegiatan Rutin"
                        title="Rapat Rutin Pengurus"
                        description="Rapat rutin pengurus HMTIKA STB dilaksanakan setiap 2 pekan sekali."    
                    />
                </div>
            </section>
        </Layout>
        </>
    )
}