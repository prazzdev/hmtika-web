import Layout from "@/components/Layout";
import ProfileBox from "@/components/partials/ProfileBox";

export default function susunanPengurus() {
    return (
        <Layout pageTitle="Team">
        <section 
        className="py-6 bg-pgray mt-16"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-easing="ease-in-out"
        >
            <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <h1 className="text-xl text-pgray font-bold leading-none text-center mb-1 lg:mb-3">
                    Struktur Kepengurusan HMTIKA    
                </h1>
                <p className="p-2 text-sm text-sgray font-medium tracking-wider text-center uppercase">Periode 2023/2024</p>
                <div className="flex flex-row flex-wrap justify-center mt-10 lg:mt-20">
                    <ProfileBox 
                        thumb='arrazzaq'
                        name="Arrazzaq Panca Putra" 
                        position="Leader" 
                        email="#"
                        linkedIn="#"
                        github="#"
                        ig="#"
                    />
                    <ProfileBox 
                        name="Agung Prasetyo" 
                        position="Co-Leader" 
                        email="mailto:prazzid31@gmail.com"
                        linkedIn="https://linkedin.com/agungpraz31"
                        github="https://github.com/prazzdev"
                        ig="https://instagram.com/agungpraz31"
                    />
                    <ProfileBox 
                        thumb='arziqa'
                        name="Arziqa Fatimatul Hiyah" 
                        position="Bendahara" 
                        email="#"
                        linkedIn="#"
                        github="#"
                        ig="#"
                    />
                    <ProfileBox 
                        name="Febiya Sinta Bella" 
                        position="Bendahara 2" 
                        email="#"
                        linkedIn="#"
                        github="#"
                        ig="#"
                    />
                    <ProfileBox 
                        thumb='tati-fitriana'
                        name="Tati Fitriana" 
                        position="Sekretaris" 
                        email="#"
                        linkedIn="#"
                        github="#"
                        ig="#"
                    />
                    <ProfileBox 
                        name="Alvin Widodo" 
                        position="Sekretaris 2" 
                        email="#"
                        linkedIn="#"
                        github="#"
                        ig="#"
                    />
                    <ProfileBox 
                        name="Gilang Fajar Syabani" 
                        position="Humas" 
                        email="#"
                        linkedIn="#"
                        github="#"
                        ig="#"
                    />
                    <ProfileBox 
                        name="Febri Sarif H" 
                        position="Humas 2" 
                        email="#"
                        linkedIn="#"
                        github="#"
                        ig="#"
                    />
                    <ProfileBox 
                        thumb='eka-tresnawati'
                        name="Eka Tresna Wati" 
                        position="Humas 3" 
                        email="#"
                        linkedIn="#"
                        github="#"
                        ig="#"
                    />
                    <ProfileBox 
                        thumb='fitri-nf'
                        name="Fitri Nur Fadillah" 
                        position="Media & Informasi" 
                        email="#"
                        linkedIn="#"
                        github="#"
                        ig="#"
                    />
                    <ProfileBox 
                        thumb='khafid-ilhan'
                        name="Khafid Ilhan Al Manjiz" 
                        position="Media & Informasi (2)" 
                        email="#"
                        linkedIn="#"
                        github="#"
                        ig="#"
                    />
                    <ProfileBox 
                        name="Asifa Ahmad" 
                        position="Bidang Keilmuan" 
                        email="#"
                        linkedIn="#"
                        github="#"
                        ig="#"
                    />
                    <ProfileBox 
                        name="Imam Nur Falah" 
                        position="Bidang Keilmuan (2)" 
                        email="#"
                        linkedIn="#"
                        github="#"
                        ig="#"
                    />
                </div>
            </div>
        </section>
        </Layout>
    )
}