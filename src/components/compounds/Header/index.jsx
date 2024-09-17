import Link from "next/link";
import Image from "next/image";
const logo = "/src/image/logo.webp";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrollingDown, setScrollingDown] = useState(false);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop && currentScroll > 100) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        id="nav"
        className={`${styles.nav} ${
          scrollingDown ? styles.hidden : ""
        } min-w-[100svw] flex flex-row justify-center xl:gap-[10em] xxl:gap-[35em] shadow-lg bg-gray-100`}
        // data-aos="fade-in"
        // data-aos-duration="1000"
        // data-aos-delay="400"
        // data-aos-easing="ease-in-out"
      >
        <div className="flex items-center -mt-1 py-4 lg:py-5">
          <Link href="/" className="flex items-center mx-auto">
            <div className="flex flex-row justify-center items-center gap-2">
              <Image
                src="/src/image/stb.png"
                alt=""
                width={40}
                height={40}
                className="lg:inline-flex hidden -mt-1"
              />
              <Image src={logo} alt="" width={40} height={40} />
            </div>
            <div className="flex flex-col gap-0 lg:gap-1 ml-4">
              <h1 className="font-bold text-[.8em] text-gray-600 text-sm lg:text-[1.2em]">
                Himpunan Mahasiswa Informatika
              </h1>
              <h1 className="text-gray-700 text-xs lg:text-[.9em]">
                STIMIK Tunas Bangsa Banjarnegara
              </h1>
            </div>
          </Link>
        </div>
        <div className="lg:flex items-center hidden -mt-1 py-4 lg:py-5 text-gray-600">
          <ul className="menu lg:menu-horizontal bg-gray-100">
            <li>
              <Link href="/">Beranda</Link>
            </li>
            <li>
              <details>
                <summary>Tentang Kami</summary>
                <ul className="bg-gray-100 rounded-lg min-w-[11svw]">
                  <li>
                    <a className="px-2">Visi Misi</a>
                  </li>
                  <li>
                    <a className="px-2">Kandidat</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Akademik</summary>
                <ul className="bg-gray-100 rounded-lg min-w-[11svw]">
                  <li>
                    <Link href="/buku-modul" className="px-2">
                      Buku Modul
                    </Link>
                  </li>
                  <li>
                    <Link href="/buku-modul" className="px-2">
                      E-Learning
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Kegiatan</summary>
                <ul className="bg-gray-100 rounded-lg min-w-[11svw]">
                  <li>
                    <Link href="/beasiswa" className="px-2">
                      Beasiswa
                    </Link>
                  </li>
                  <li>
                    <Link href="/kegiatan-rutin" className="px-2">
                      Kegiatan Rutin
                    </Link>
                  </li>
                  <li>
                    <Link href="/next-event" className="px-2">
                      Next Event
                    </Link>
                  </li>
                  <li>
                    <Link href="/beasiswa" className="px-2">
                      Beasiswa
                    </Link>
                  </li>
                  <li>
                    <Link href="/dokumentasi-kegiatan" className="px-2">
                      Dokumentasi Kegiatan
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Lain-lain</summary>
                <ul className="bg-gray-100 rounded-lg min-w-[11svw]">
                  <li>
                    <Link href="/database-anggota" className="px-2">
                      Database Anggota
                    </Link>
                  </li>
                  <li>
                    <Link href="/aspirasi-mahasiswa" className="px-2">
                      Aspirasi Mahasiswa
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdh-prodi" className="px-2">
                      PDH Prodi
                    </Link>
                  </li>
                  <li>
                    <Link href="/sponsorship" className="px-2">
                      Sponsorship
                    </Link>
                  </li>
                  <li>
                    <Link href="/chatbot" className="px-2">
                      Chatbot
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
