import Card from "@/components/fragments/Card";
import MainLayout from "@/layouts/MainLayout";
import { retrievePostsByTags } from "@/services/posts";
import { useEffect, useState } from "react";

const KegiatanRutinView = () => {
  let dir = "/src/image/event/documentation/";
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await retrievePostsByTags("kegiatan-rutin");
        setEvents(data);
      } catch (error) {
        console.error(error);
      }
    };
    getEvents();
  }, []);

  return (
    <MainLayout pageTitle={"Kegiatan Rutin"}>
      <section
        className="mx-auto mt-16 mb-16 lg:px-[10em] py-8 lg:py-[5em] pb-0 container"
        // data-aos="fade-in"
        // data-aos-duration="1000"
        // data-aos-delay="300"
        // data-aos-easing="ease-in-out"
      >
        <h1 className="mb-10 font-bold text-center text-pgray text-xl">
          Kegiatan Rutin
        </h1>
        <div className="flex lg:flex-row flex-col lg:justify-center gap-1 lg:gap-10">
          {events &&
            events.map((event, i) => (
              <Card
                redirectTo={
                  "/blog/" + event.title.replaceAll(" ", "-").toLowerCase()
                }
                key={event.id}
                thumbnail={event.featureImage}
                category={event.tags.toString()}
                title={event.title}
                description="Pelatihan Pemrograman Rutin setiap jum'at di lab kampus."
              />
            ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default KegiatanRutinView;
