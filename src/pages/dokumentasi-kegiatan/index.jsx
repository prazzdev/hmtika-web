import EventCarousel from "@/components/EventCarousel";
import Layout from "@/components/Layout";

export default function dokumentasiKegiatan() {
    let dir = '/src/image/event/documentation/'
    return (
        <>
        <Layout pageTitle={'Dokumentasi Kegiatan'}>
            <section className="pt-[100px] pb-10"
            // data-aos="fade-in"
            // data-aos-duration="1000"
            // data-aos-delay="300"
            // data-aos-easing="ease-in-out"
            >
                <h1 className="text-xl text-pgray font-bold text-center mb-10">Dokumentasi Kegiatan</h1>
                <div id="eventWrapper" className="flex flex-col items-center">
                    {/* Workshop PB Rakit 2021 */}
                    <div id="" className="bg-gray-100 rounded-xl shadow-md p-5 mb-8 w-[90%] mx-auto">
                        <h1 className="text-sgray font-semibold text-center mb-4">Workshop SMK Panca Bhakti Rakit 2021 -  HMTIKA Goes To School</h1>
                        <div className="carousel w-full h-[200px] rounded-lg overflow-hidden">
                            <div id='workshoppbr21-1' className="carousel-item relative w-full">
                                <img src='https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg' className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href='#workshoppbr21-3' className="btn btn-circle">❮</a> 
                                <a href='#workshoppbr21-2' className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id='workshoppbr21-2' className="carousel-item relative w-full">
                                <img src='https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg' className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href='#workshoppbr21-1' className="btn btn-circle">❮</a> 
                                <a href='#workshoppbr21-3' className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id='workshoppbr21-3' className="carousel-item relative w-full">
                                <img src='https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg' className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href='#workshoppbr21-2' className="btn btn-circle">❮</a> 
                                <a href='#workshoppbr21-1' className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Workshop PB Rakit 2022 */}
                    <div id="" className="bg-gray-100 rounded-xl shadow-md p-5 mb-8 w-[90%] mx-auto">
                        <h1 className="text-sgray font-semibold text-center mb-4">Workshop SMK Panca Bhakti Rakit 2022 -  HMTIKA Goes To School</h1>
                        <div className="carousel w-full h-[200px] rounded-lg overflow-hidden">
                            <div id='workshopprb22-1' className="carousel-item relative w-full">
                                <img src={dir+'311594237_1069715677075939_6023243686612142872_n.webp'} className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href='#workshopprb22-6' className="btn btn-circle">❮</a> 
                                <a href='#workshopprb22-2' className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id='workshopprb22-2' className="carousel-item relative w-full">
                                <img src={dir+'311590757_183171420896584_6251819352431627605_n.webp'} className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href='#workshopprb22-1' className="btn btn-circle">❮</a> 
                                <a href='#workshopprb22-3' className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id='workshopprb22-3' className="carousel-item relative w-full">
                                <img src={dir+'311590480_1186242388913350_1358555972082875442_n.webp'} className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href='#workshopprb22-2' className="btn btn-circle">❮</a> 
                                <a href='#workshopprb22-4' className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id='workshopprb22-4' className="carousel-item relative w-full">
                                <img src={dir+'310698766_1230234381041917_2765427752342309026_n.webp'} className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href='#workshopprb22-3' className="btn btn-circle">❮</a> 
                                <a href='#workshopprb22-5' className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id='workshopprb22-5' className="carousel-item relative w-full">
                                <img src={dir+'311590480_1186242388913350_1358555972082875442_n.webp'} className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href='#workshopprb22-4' className="btn btn-circle">❮</a> 
                                <a href='#workshopprb22-6' className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id='workshopprb22-6' className="carousel-item relative w-full">
                                <img src={dir+'310679954_1072180676751363_7503244524716196533_n.webp'} className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href='#workshopprb22-5' className="btn btn-circle">❮</a> 
                                <a href='#workshopprb22-1' className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Pelatihan Siswa PKL 2022 */}
                    <div id="" className="bg-gray-100 rounded-xl shadow-md p-5 mb-8 w-[90%] mx-auto">
                        <h1 className="text-sgray font-semibold text-center mb-4">Pelatihan untuk Siswa SMK PKL di STIMIK Tunas Bangsa</h1>
                        <div className="carousel w-full h-[200px] rounded-lg overflow-hidden">
                            <div id='slide1' className="carousel-item relative w-full">
                                <img src='https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg' className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href='#slide3' className="btn btn-circle">❮</a> 
                                <a href='#slide2' className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id='slide2' className="carousel-item relative w-full">
                                <img src='https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg' className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href='#slide1' className="btn btn-circle">❮</a> 
                                <a href='#slide3' className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id='slide3' className="carousel-item relative w-full">
                                <img src='https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg' className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href='#slide2' className="btn btn-circle">❮</a> 
                                <a href='#slide1' className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
        </>
    )
}