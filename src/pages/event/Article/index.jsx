import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Meta from "@/components/Meta";
import NavMenu from "@/components/NavMenu";
import Image from "next/image";

export default function Article({ pageTitle, thumbnail, date, children }) {
    console.log(pageTitle)
    return (
        <>
        <Meta pageTitle={pageTitle} />
        <Header />
        <section 
            className="article p-4 px-6 pt-[100px]"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-easing="ease-in-out">
            <div className="w-[100%] h-[200px] relative rounded-xl overflow-hidden">
            <Image 
                src={thumbnail} layout="fill" objectFit="cover"
                style={{ borderRadius: "10px" }}
            />
            </div>
            <h1 className="font-bold text-[18px] text-pgray text-justify mt-5">{pageTitle}</h1>
            <h5 className="mt-2">{date}</h5>
            <div className="main-article my-4">
                {children}
            </div>
        </section>
        <NavMenu />
        <Footer />
        <script rc="https://unpkg.com/aos@next/dist/aos.js"></script>
        </>
    )
}