import Link from "next/link"
import Image from "next/image"
const logo = "/src/image/logo.webp"
import styles from "./Header.module.css"

export default function Header() {
    return (
        <>
        <header id="nav"
            className={styles.nav}
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-easing="ease-in-out">
            <div className="container w-[97%] flex items-center bg-gray-200 mx-auto py-4 mt-1 rounded-lg shadow-lg">
                <Link href="/"  
                    className="flex items-center mx-auto">
                    <Image 
                        src={logo}
                        alt="" 
                        width={40}
                        height={40}
                    />
                    <div class="ml-4">
                        <h1 className="text-gray-600 font-bold text-sm">Himpunan Mahasiswa Informatika</h1>
                        <h1 className="text-gray-700 text-xs">STIMIK Tunas Bangsa Banjarnegara</h1>
                    </div>
                </Link>
            </div>
        </header>
        </>
    )
}