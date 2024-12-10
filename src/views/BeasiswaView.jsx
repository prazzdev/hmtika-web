import Card from "@/components/fragments/Card";
import MainLayout from "@/layouts/MainLayout";
import { retrievePostsByTags } from "@/services/posts";
import { useEffect, useState } from "react";

const BeasiswaView = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await retrievePostsByTags("program-beasiswa");
        setEvents(data);
      } catch (error) {
        console.error(error);
      }
    };
    getEvents();
  }, []);

  return (
    <MainLayout pageTitle="Beasiswa">
      <section
        className="mx-auto mt-16 mb-16 lg:px-[10em] py-8 lg:py-[5em] pb-0 container"
        // data-aos="fade-in"
        // data-aos-duration="1000"
        // data-aos-delay="300"
        // data-aos-easing="ease-in-out"
      >
        <h1 className="mb-10 font-bold text-center text-pgray text-xl">
          Program Beasiswa
        </h1>
        <div
          id="container"
          className="flex lg:flex-row flex-col lg:justify-start gap-1 lg:gap-10"
          // data-aos="fade-in"
          // data-aos-duration="1000"
          // data-aos-delay="300"
          // data-aos-easing="ease-in-out"
        >
          {events &&
            events.map((event) => (
              <Card
                redirectTo={"/blog/" + event.slug}
                thumbnail={event.featureImage}
                category={event.tags[0].replaceAll("-", " ").toString()}
                title={event.title}
                description="Membangun Digital Nation Indonesia melalui Beasiswa IDCamp 2023"
              />
            ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default BeasiswaView;
