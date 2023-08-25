import Link from "next/link"
import Image from "next/image"
const logo = "/src/image/logo.webp"
import styles from "./Header.module.css"

export default function Header() {
    return (
        <>
        <header id="nav"
            className={styles.nav}>
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
                        <h1 className="font-bold text-sm">Himpunan Mahasiswa Informatika</h1>
                        <h1 className="text-xs">STIMIK Tunas Bangsa Banjarnegara</h1>
                    </div>
                </Link>
                {/* BTN NAV */}
                <button 
                    id="hamburger" 
                    title="Button" 
                    type="button" 
                    className="p-3 flex flex-col fixed bottom-20 right-6 rounded-lg shadow-xl pbgcolor">
                    <span className="text-gray-100">Menu</span>
                    <div className="menuList p-2 flex-col text-left min-w-[210px]">
                        <Link href='/' className="font-bold text-gray-100">Beranda</Link>
                        <button className="tentang-kami text-left">
                            <span className="font-bold"><span>Tentang Kami</span><span>^</span></span>
                            <ul>
                                {/* Tentang Kami */}
                                <li className="flex">
                                    <Link href='/visi-misi'>Visi Misi</Link>
                                </li>
                                <li className="flex">
                                    <Link href='/susunan-pengurus'>Susunan Pengurus</Link>
                                </li>
                            </ul>
                        </button>
                        <button className="akademik text-left">
                            <span className="font-bold"><span>Akademik</span><span>^</span></span>
                            <ul>
                                {/* Akademik */}
                                <li className="flex">
                                    <Link href='/buku-modul'>Buku Modul</Link>
                                </li>
                                <li className="flex">
                                    <Link href='/e-learning'>E-Learning</Link>
                                </li>
                            </ul>
                        </button>
                        <button className="kegiatan text-left">
                            <span className="font-bold"><span>Kegiatan</span><span>^</span></span>
                            <ul>
                                {/* Kegiatan */}
                                <li className="flex">
                                    <Link href='/kegiatan-rutin'>Kegiatan Rutin</Link>
                                </li>
                                <li className="flex">
                                    <Link href='/kegiatan-on-going'>On Going</Link>
                                </li>
                                <li className="flex">
                                    <Link href='/dokumentasi-kegiatan'>Dokumentasi Kegiatan</Link>
                                </li>
                            </ul>
                        </button>
                        <button className="lain-lain text-left">
                            <span className="font-bold"><span>Lain-lain</span><span>^</span></span>
                            <ul>
                                {/* Lain-lain */}
                                <li className="flex">
                                    <Link href='/database-anggota'>Database Anggota</Link>
                                </li>
                                <li className="flex">
                                    <Link href='/aspirasi-mahasiswa'>Aspirasi Mahasiswa</Link>
                                </li>
                            </ul>
                        </button>
                    </div>
                </button>
            </div>
        </header>
        </>
    )
}