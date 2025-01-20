import Card from "../../fragments/Card";

export default function EventList({ datas }) {
  // let dir = "/src/image/event/documentation/";
  return (
    <>
      <div
        id="container"
        className="flex lg:flex-row flex-col flex-wrap lg:justify-around max-sm:items-center lg:gap-10 px-6 p-4"
        // data-aos="fade-in"
        // data-aos-duration="1000"
        // data-aos-delay="300"
        // data-aos-easing="ease-in-out"
      >
        {datas?.map((data, key) => (
          <>
            <Card
              redirectTo={data?.slug}
              thumbnail={data?.featureImage}
              category={data?.tags[0]}
              title={data?.title}
              description={data?.description}
            />
          </>
        ))}
      </div>
    </>
  );
}
