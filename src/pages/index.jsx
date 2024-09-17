import Hero from "@/components/compounds/Hero";
import MainLayout from "@/layouts/MainLayout";
import ProfileSect from "@/components/compounds/ProfileSect";
import EventSect from "@/components/compounds/EventSect";

export default function Home() {
  return (
    <MainLayout pageTitle="">
      <div
      // data-aos="fade-in"
      // data-aos-duration="1000"
      // data-aos-delay="300"
      // data-aos-easing="ease-in-out"
      >
        <Hero />
        <ProfileSect />
        <EventSect />
      </div>
    </MainLayout>
  );
}
