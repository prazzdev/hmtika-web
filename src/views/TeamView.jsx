import ProfileBox from "@/components/fragments/ProfileBox";
import MainLayout from "@/layouts/MainLayout";
import { retrieveCandidates } from "@/services/candidates";
import { useEffect, useState } from "react";

const TeamView = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const getCandidates = async () => {
      try {
        const cachedData = localStorage.getItem("candidates");
        if (cachedData) {
          setCandidates(JSON.parse(cachedData));
        } else {
          const data = await retrieveCandidates();
          localStorage.setItem("candidates", JSON.stringify(data));
          setCandidates(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getCandidates();
  }, []);

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
            {candidates &&
              candidates.map((candidate, i) => {
                return (
                  <ProfileBox
                    key={i}
                    thumb={candidate.picture}
                    alt={candidate.fullname}
                    name={candidate.fullname}
                    position={candidate.position}
                    email={candidate.email}
                    linkedIn={candidate.linkedIn}
                    github={candidate.github}
                    ig={candidate.instagram}
                    web={candidate.website}
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
