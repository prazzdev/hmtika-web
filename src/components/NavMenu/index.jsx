import Image from "next/image";
import NavMenuDropDown from "../partials/NavMenuDropDown";
import Link from "next/link";

export default function NavMenu() {
    return (
        <>
        <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <label htmlFor="my-drawer" className="fixed bottom-6 right-7 pbgcolor p-3 rounded-lg shadow-lg drawer-button">
                <Image src={'/src/image/menu.svg'} width={22} height={22} />
            </label>
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <div className="container w-[100%] flex items-center mx-auto py-4 mt-1">
                <Link href="/"  
                    className="flex items-center mx-auto">
                    <Image 
                        src={'/src/image/logo.webp'}
                        alt="" 
                        width={40}
                        height={40}
                    />
                    <div class="ml-4">
                        <h1 className="font-bold text-xs">Himpunan Mahasiswa Informatika</h1>
                        <h1 className="text-[10px]">STIMIK Tunas Bangsa Banjarnegara</h1>
                    </div>
                </Link>
            </div>
            <div className="dropdown dropdown-bottom">
                <a href="/" className="btn m-1">Beranda</a>
            </div>
            <NavMenuDropDown 
                title={'Tentang Kami'} 
                menuList={[{ title: 'Visi Misi', target: '/visi-misi' }, { title: 'Susunan Pengurus', target: '/susunan-pengurus' }]}
                />
            <NavMenuDropDown 
                title={'Akademik'} 
                menuList={[{ title: 'Buku Modul', target: '/buku-modul' }, { title: 'E-Learning', target: '/e-learning' }]}
                />
            <NavMenuDropDown 
                title={'Kegiatan'} 
                menuList={[{ title: 'Kegiatan Rutin', target: '/kegiatan-rutin' }, { title: 'On Going', target: '/on-going' }, { title: 'Dokumentasi Kegiatan', target: '/dokumentasi-kegiatan' }]}
                />
            <NavMenuDropDown 
                title={'Lain-lain'} 
                menuList={[{ title: 'Database Anggota', target: '/database-anggota' }, { title: 'Aspirasi Mahasiswa', target: '/aspirasi-mahasiswa' }]}
                />
            </ul>
        </div>
        </div>
        </>
    )
}
