import Layout from "@/components/Layout";
import SponsorCard from "@/components/fragments/SponsorCard";

export default function index() {
  return (
    <>
      <Layout pageTitle="Sponsorship">
        <section
          className="flex flex-col justify-center items-center pt-[100px] pb-[40px]"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
        >
          <h1 className="mb-10 font-bold text-center text-pgray text-xl">
            Sponsorship
          </h1>
          <SponsorCard
            name="MJS Project Apparel"
            thumbnail="/src/image/mjs-project-apparel.webp"
          />
        </section>
      </Layout>
    </>
  );
}
