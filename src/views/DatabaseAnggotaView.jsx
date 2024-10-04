import MainLayout from "@/layouts/MainLayout";
import { useState } from "react";

const DatabaseAnggotaView = () => {
  const [memberData, setMemberData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    try {
      const response = await fetch(`/api/members`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: e.target.name.value,
        }),
      });
      if (!response.ok) {
        throw Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.length > 0) {
        setMemberData(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <MainLayout pageTitle="Database Anggota">
        <section className="flex flex-col px-[2em] lg:px-[5em] p-8 lg:p-16 pt-[6em] lg:pt-[10em] h-[100vh]">
          <form
            className="flex flex-col lg:flex-row items-center justify-center lg:justify-between"
            onSubmit={handleSubmit}
          >
            <h1 className="text-gray-700 text-xl font-bold lg:text-2xl mb-[1em] lg:mb-0">
              Database Anggota
            </h1>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                name="name"
                className="grow min-w-[250px] lg:min-w-[300px]"
                placeholder="Search"
              />
              <button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </label>
          </form>
          <div className="flex flex-col lg:flex-row items-center py-[1em]">
            {memberData.map((data, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-white p-4 rounded-md my-2 max-w-[100vw] lg:max-w-[30vw]"
              >
                <p className="text-gray-700 font-bold">{data.nama}</p>
                <p className="text-gray-500">{data.nim}</p>
              </div>
            ))}
          </div>
        </section>
      </MainLayout>
    </div>
  );
};

export default DatabaseAnggotaView;
