import Layout from "@/components/Layout";

export default function kegiatanOnGoing() {
    return (
        <>
        <Layout pageTitle={'Kegiatan on Going'}>
            <section className="pt-[100px]">
                <h1 className="text-xl text-pgray font-bold text-center mb-10">Kegiatan On Going</h1>
                <div className="px-6">
                    <article class="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
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
                                Pelatihan
                            </strong>
                            <strong
                                class="rounded border border-teal-400 bg-teal-400 px-3 py-1.5 text-[10px] font-medium text-white"
                            >
                                Episode #101
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
                    </article>
                </div>
            </section>
        </Layout>
        </>
    )
}