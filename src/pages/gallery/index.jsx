import MainLayout from "@/layouts/MainLayout";

export default function Gallery() {
  return (
    <>
      <MainLayout pageTitle="Gallery">
        <section
          className="dark:bg-gray-800 mt-14 py-6 dark:text-gray-50"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
        >
          <div className="gap-4 grid grid-cols-2 md:grid-cols-4 mx-auto p-4 container">
            <img
              src="https://source.unsplash.com/random/301x301/"
              alt=""
              className="col-span-2 md:col-start-3 row-span-2 md:row-start-1 dark:bg-gray-500 shadow-sm rounded w-full h-full min-h-96 aspect-square"
            />
            <img
              alt=""
              className="dark:bg-gray-500 shadow-sm rounded w-full h-full min-h-48 aspect-square"
              src="https://source.unsplash.com/random/200x200/?0"
            />
            <img
              alt=""
              className="dark:bg-gray-500 shadow-sm rounded w-full h-full min-h-48 aspect-square"
              src="https://source.unsplash.com/random/200x200/?1"
            />
            <img
              alt=""
              className="dark:bg-gray-500 shadow-sm rounded w-full h-full min-h-48 aspect-square"
              src="https://source.unsplash.com/random/200x200/?2"
            />
            <img
              alt=""
              className="dark:bg-gray-500 shadow-sm rounded w-full h-full min-h-48 aspect-square"
              src="https://source.unsplash.com/random/200x200/?3"
            />
            <img
              alt=""
              className="dark:bg-gray-500 shadow-sm rounded w-full h-full min-h-48 aspect-square"
              src="https://source.unsplash.com/random/200x200/?4"
            />
            <img
              alt=""
              className="dark:bg-gray-500 shadow-sm rounded w-full h-full min-h-48 aspect-square"
              src="https://source.unsplash.com/random/200x200/?5"
            />
            <img
              alt=""
              className="dark:bg-gray-500 shadow-sm rounded w-full h-full min-h-48 aspect-square"
              src="https://source.unsplash.com/random/200x200/?6"
            />
            <img
              alt=""
              className="dark:bg-gray-500 shadow-sm rounded w-full h-full min-h-48 aspect-square"
              src="https://source.unsplash.com/random/200x200/?7"
            />
            <img
              src="https://source.unsplash.com/random/302x302/"
              alt=""
              className="col-span-2 md:col-start-1 row-span-2 md:row-start-3 dark:bg-gray-500 shadow-sm rounded w-full h-full min-h-96 aspect-square"
            />
          </div>
        </section>
      </MainLayout>
    </>
  );
}
