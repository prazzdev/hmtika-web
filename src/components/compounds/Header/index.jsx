import Link from "next/link";
import Image from "next/image";
const logo = "/src/image/logo.webp";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import menuData from "@/lib/data/menuData";

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
            {menuData.map((menu, i) => (
              <li key={i}>
                {menu.child ? (
                  <details>
                    <summary>{menu.name}</summary>
                    <ul className="bg-gray-100 rounded-lg min-w-[11svw]">
                      {menu.child.map((subMenu, j) => (
                        <li key={j}>
                          <Link href={subMenu.path}>{subMenu.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link href={menu.path}>{menu.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
