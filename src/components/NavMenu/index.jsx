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
            <ul className="menu fixed bottom-5 p-4 w-50 min-h-[300px] bg-base-20 text-base-content">
            <div className="dropdown dropdown-bottom">
                <a href="/" className="hover:bg-[#00ADB5] text-gray-700 hover:text-white btn m-1 hover:border-none">Beranda</a>
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
