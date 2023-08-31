const logo = '../../src/image/logo.webp';
import styles from './ProfileSect.module.css'

export default function ProfileSect() { 
    return(
        <section 
            id="ProfileSect"
            className={styles.ProfileSect}>
            <div className="def-container flex flex-col mx-auto">
                <h1 className="uppercase font-bold text-xl mx-auto mb-5">Profil</h1>
                <div className="">
                    <p className="text-justify">
                        Himpunan Mahasiswa Informatika (HMTIKA) merupakan salah satu himpunan bagi mahasiswa jurusan di STIMIK Tunas Bangsa Banjarnegara prodi Informatika.
                    </p>
                    <div className="flex justify-around mt-10">
                        <div id='box' className="flex flex-col justify-center items-center">
                            <h1 className='text-2xl mb-1'>13</h1>
                            <h5>Pengurus</h5>
                        </div>
                        <div id='box' className="flex flex-col justify-center items-center">
                        <h1 className='text-2xl mb-1'>6</h1>
                            <h5>Bidang</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}