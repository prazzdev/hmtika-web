import MainLayout from "@/layouts/MainLayout";

const NextEventView = () => {
  return (
    <MainLayout pageTitle={"Kegiatan yang akan datang"}>
      <section
        className="pt-[100px]"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-easing="ease-in-out"
      >
        <h1 className="mb-10 font-bold text-center text-pgray text-xl">
          Kegiatan On Going
        </h1>
        <div className="px-6 pb-10">
          <article class="relative bg-gray-100 shadow-md mb-6 p-5 sm:p-6 lg:p-8 pt-6 rounded-xl overflow-hidden">
            <div class="flex items-start sm:gap-8">
              <div
                class="sm:place-content-center sm:border-2 sm:border-indigo-500 hidden sm:grid sm:rounded-full sm:w-20 sm:h-20 sm:shrink-0"
                aria-hidden="true"
              >
                <div class="flex items-center gap-1">
                  <span class="bg-indigo-500 rounded-full w-0.5 h-8"></span>
                  <span class="bg-indigo-500 rounded-full w-0.5 h-6"></span>
                  <span class="bg-indigo-500 rounded-full w-0.5 h-4"></span>
                  <span class="bg-indigo-500 rounded-full w-0.5 h-6"></span>
                  <span class="bg-indigo-500 rounded-full w-0.5 h-8"></span>
                </div>
              </div>

              <div>
                <strong class="border-gray-400 bg-gray-400 mr-2 px-3 py-1.5 border rounded font-medium text-[10px] text-white">
                  Training
                </strong>
                <strong class="bg-teal-400 px-3 py-1.5 border border-teal-400 rounded font-medium text-[10px] text-white">
                  Web Programming
                </strong>

                <h3 class="mt-4 font-medium text-lg text-pgray sm:text-xl">
                  <a href="" class="hover:underline">
                    Introduction to ReactJS: Build website Easily!
                  </a>
                </h3>

                <p class="mt-1 text-justify text-sgray text-sm">
                  Whether you're an aspiring developer or a seasoned coder, join
                  us to unravel the secrets of this powerful JavaScript library
                  that empowers you to create seamless, modern, and visually
                  stunning websites. Get ready to transform your coding skills
                  into boundless possibilities – step into the world of ReactJS
                  and watch your web creations come to life!
                </p>

                <dl class="flex gap-4 sm:gap-6 mt-4">
                  <div class="flex flex-col-reverse">
                    <dt class="font-medium text-gray-600 text-sm">
                      Coming Soon
                    </dt>
                    <dd class="text-gray-500 text-xs">Will be held on:</dd>
                  </div>

                  <div class="flex flex-col-reverse">
                    <dt class="font-medium text-gray-600 text-sm">
                      Agung Prasetyo
                    </dt>
                    <dd class="text-gray-500 text-xs">Speaker:</dd>
                  </div>
                </dl>
              </div>
            </div>
            <span class="bottom-0 absolute inset-x-0 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-2"></span>
          </article>
        </div>
      </section>
    </MainLayout>
  );
};

export default NextEventView;
