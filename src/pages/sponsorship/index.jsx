import Layout from "@/components/Layout";
import SponsorCard from "@/components/SponsorCard";

export default function index() {
    return (
        <>
        <Layout pageTitle="Sponsorship">
            <section 
                    className="pt-[100px] pb-[40px] flex flex-col justify-center items-center"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    data-aos-easing="ease-in-out"
                >
                <h1 className="text-xl text-pgray font-bold text-center mb-10">Sponsorship</h1>
                <SponsorCard 
                    name="MJS Project Apparel" thumbnail="/src/image/mjs-project-apparel.webp" />
                <SponsorCard 
                    name="MJS Project Apparel" thumbnail="/src/image/mjs-project-apparel.webp" />
            </section>
        </Layout>
        </>
    )
}