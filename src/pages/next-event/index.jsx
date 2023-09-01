import Layout from "@/components/Layout";

export default function nextEvent() {
    return (
        <>
        <Layout pageTitle={'Kegiatan yang akan datang'}>
            <section 
                className="pt-[100px]"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-easing="ease-in-out"
            >
                <h1 className="text-xl text-pgray font-bold text-center mb-10">Kegiatan On Going</h1>
                <div className="px-6 pb-10">
                    <article class="relative rounded-xl bg-gray-100 p-5 pt-6 sm:p-6 lg:p-8 mb-6 shadow-md overflow-hidden">
                        <div class="flex items-start sm:gap-8">
                            <div
                            class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
                            aria-hidden="true"
                            >
                            <div class="flex items-center gap-1">
                                <span class="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                                <span class="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                                <span class="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                                <span class="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                                <span class="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                            </div>
                            </div>

                            <div>
                            <strong
                                class="rounded border border-gray-400 bg-gray-400 px-3 py-1.5 text-[10px] font-medium text-white mr-2"
                            >
                                Training
                            </strong>
                            <strong
                                class="rounded border border-teal-400 bg-teal-400 px-3 py-1.5 text-[10px] font-medium text-white"
                            >
                                Web Programming
                            </strong>

                            <h3 class="mt-4 text-lg text-pgray font-medium sm:text-xl">
                                <a href="" class="hover:underline">Introduction to ReactJS: Build website Easily!</a>
                            </h3>

                            <p class="mt-1 text-sm text-sgray text-justify">
                                Whether you're an aspiring developer or a seasoned coder, join us to unravel the secrets of this powerful JavaScript library that empowers you to create seamless, modern, and visually stunning websites. Get ready to transform your coding skills into boundless possibilities – step into the world of ReactJS and watch your web creations come to life!
                            </p>

                            <dl class="mt-4 flex gap-4 sm:gap-6">
                                <div class="flex flex-col-reverse">
                                <dt class="text-sm font-medium text-gray-600">Coming Soon</dt>
                                <dd class="text-xs text-gray-500">Will be held on:</dd>
                                </div>

                                <div class="flex flex-col-reverse">
                                <dt class="text-sm font-medium text-gray-600">Agung Prasetyo</dt>
                                <dd class="text-xs text-gray-500">Speaker:</dd>
                                </div>
                            </dl>
                            </div>
                        </div>
                        <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
                    </article>
                </div>
            </section>
        </Layout>
        </>
    )
}