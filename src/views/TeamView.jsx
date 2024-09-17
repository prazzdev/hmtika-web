import ProfileBox from "@/components/fragments/ProfileBox";
import MainLayout from "@/layouts/MainLayout";
import teamData from "@/lib/data/teamData";

const TeamView = () => {
  return (
    <MainLayout pageTitle="Susunan Pengurus">
      <section
        className="bg-pgray mt-16 py-6"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-easing="ease-in-out"
      >
        <div className="flex flex-col justify-center items-center mx-auto p-4 sm:p-10 container">
          <h1 className="mb-1 lg:mb-3 font-bold text-center text-pgray text-xl leading-none">
            Struktur Kepengurusan HMTIKA
          </h1>
          <p className="p-2 font-medium text-center text-sgray text-sm uppercase tracking-wider">
            Periode 2023/2024
          </p>
          <div className="flex flex-row flex-wrap justify-center mt-10 lg:mt-20">
            {teamData &&
              teamData.map((data, i) => {
                return (
                  <ProfileBox
                    key={i}
                    thumb={data.thumb}
                    name={data.name}
                    position={data.position}
                    email={data.email}
                    linkedIn={data.linkedIn}
                    github={data.github}
                    ig={data.ig}
                  />
                );
              })}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default TeamView;
