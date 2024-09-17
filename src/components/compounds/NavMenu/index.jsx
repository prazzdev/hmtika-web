import Image from "next/image";
import NavMenuDropDown from "../../fragments/NavMenuDropDown";
import Link from "next/link";

export default function NavMenu() {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="right-7 bottom-6 fixed lg:hidden hover:bg-[#4de4ec] shadow-lg p-3 rounded-lg drawer-button pbgcolor"
          >
            <Image src={"/src/image/menu.svg"} width={22} height={22} />
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="bottom-[130px] fixed bg-base-20 p-4 w-50 min-h-[300px] text-base-content menu">
            <div className="dropdown-bottom dropdown">
              <Link
                href="/"
                className="border-1 border-white bg-white hover:bg-[#00ADB5] m-1 hover:border-none text-gray-700 hover:text-white btn"
              >
                Beranda
              </Link>
            </div>
            <NavMenuDropDown
              key={1}
              title={"Tentang Kami"}
              menuList={[
                { title: "Visi Misi", target: "/visi-misi" },
                { title: "Susunan Pengurus", target: "/susunan-pengurus" },
              ]}
            />
            <NavMenuDropDown
              key={2}
              title={"Akademik"}
              menuList={[
                { title: "Buku Modul", target: "/buku-modul" },
                { title: "E-Learning", target: "/e-learning" },
              ]}
            />
            <NavMenuDropDown
              key={3}
              title={"Kegiatan"}
              menuList={[
                { title: "Beasiswa", target: "/event" },
                { title: "Kegiatan Rutin", target: "/kegiatan-rutin" },
                { title: "Next Event", target: "/next-event" },
                {
                  title: "Dokumentasi Kegiatan",
                  target: "/dokumentasi-kegiatan",
                },
              ]}
            />
            <NavMenuDropDown
              key={4}
              title={"Lain-lain"}
              menuList={[
                { title: "Database Anggota", target: "/database-anggota" },
                { title: "Aspirasi Mahasiswa", target: "/aspirasi-mahasiswa" },
                { title: "PDH Prodi", target: "/pdh-prodi" },
                { title: "Sponsorship", target: "/sponsorship" },
                { title: "Chatbot", target: "/chatbot" },
              ]}
            />
          </ul>
        </div>
      </div>
    </>
  );
}
