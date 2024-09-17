import EventList from "../EventList";
import Ripple from "@/components/magicui/ripple";

export default function EventSect() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="lg:min-w-[100svw] overflow-hidden"
      >
        <path
          fill="#00ADB5"
          fill-opacity="1"
          d="M0,32L60,74.7C120,117,240,203,360,208C480,213,600,139,720,138.7C840,139,960,213,1080,202.7C1200,192,1320,96,1380,48L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <section
        id="EventSect"
        className="relative bg-[#00ADB5] -mt-[2px] px-0 pt-[40px] pb-[10px] w-[100%]"
      >
        <div className="flex flex-col mx-auto lg:px-[10em]">
          <h1 className="mx-auto mb-6 font-bold text-gray-100 text-xl lg:text-2xl uppercase">
            Kegiatan
          </h1>
          <EventList />
        </div>
      </section>
      <div className="-mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#00ADB5"
            fill-opacity="1"
            d="M0,128L34.3,122.7C68.6,117,137,107,206,112C274.3,117,343,139,411,176C480,213,549,267,617,266.7C685.7,267,754,213,823,181.3C891.4,149,960,139,1029,154.7C1097.1,171,1166,213,1234,213.3C1302.9,213,1371,171,1406,149.3L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
