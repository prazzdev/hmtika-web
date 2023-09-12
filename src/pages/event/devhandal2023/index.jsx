import Article from "../Article";
import ArOrList from "../Article/format/ArOrList";
import ArParagraph from "../Article/format/ArParagraph";
import ArTitle from "../Article/format/ArTitle";

export default function index() {
    return (
        <>
        <Article 
            pageTitle={'Bangun Masa Depan dengan Beasiswa Developer Handal'}
            thumbnail={'/src/image/event/devhandal.webp'}
            date={'13 Sep 2023'}>
            <ArTitle text={'Apa itu DeveloperHandal?'} />
            <ArParagraph>
                <b>Developer Handal</b> adalah program beasiswa belajar coding online selama 1 tahun secara gratis. Developer Handal menawarkan pendidikan online yang berkualitas dan akses ke sertifikasi developer internasional.
            </ArParagraph>
            <ArParagraph>
                Kamu bukan hanya mempelajari coding, tapi juga mengasah keterampilan untuk menjadi JavaScript Developer Expert yang handal dan siap memasuki dunia kerja. Jika kamu memiliki semangat untuk belajar dan bertransformasi, DeveloperHandal adalah langkah pertama yang sempurna untuk membangun karir suksesmu di era digital ini.
            </ArParagraph>
            <span></span>
            <ArTitle text={'Menjadi JavaScript Developer Expert'} />
            <ArParagraph>
                Dalam program DeveloperHandal, kamu akan mendapatkan kesempatan emas untuk belajar teknologi Full Stack JavaScript. Keahlian ini tidak hanya menawarkan pengetahuan teknis, tetapi juga beragam keuntungan yang berdampak luas pada karir dan masa depanmu, antara lain:
            </ArParagraph>
            <ArOrList>
                <li>Keterampilan Komprehensif</li>
                <li>Permintaan Tinggi</li>
                <li>Peluang Karir Luas</li>
                <li>Penghasilan Tinggi</li>
                <li>Investasi Masa Depan</li>
            </ArOrList>
            <span></span>
            <ArTitle text={'Mengapa DeveloperHandal?'} />
            <ArParagraph>
                <b>Penguasaan Keterampilan Masa Depan</b> <br />
                Belajar Fullstack Javascript adalah langkah penting untuk menjadi bagian dari industri teknologi yang terus berkembang. Keterampilan ini sangat diminati dan bisa memberi kamu keuntungan dalam karir.
            </ArParagraph>
            <ArParagraph>
                <b>Sertifikasi Internasional</b> <br />
                Peserta berkesempatan meraih sertifikasi “Certified Developer” dari Alibaba Cloud. Sertifikasi Internasional ini sebagai validasi kemampuan kamu sebagai developer dan juga nilai tambah tinggi untuk karirmu.
            </ArParagraph>
            <ArParagraph>
                <b>Pembelajaran Online Fleksibel</b> <br />
                Dengan pembelajaran online, kamu bisa belajar di mana saja dan kapan saja, membuatnya cocok untuk kehidupan yang sibuk atau bagi mereka yang tinggal di daerah terpencil.
            </ArParagraph>
            <ArParagraph>
                <b>Belajar Dari Ahli</b> <br />
                Materi pembelajaran disusun dan disampaikan oleh profesional berpengalaman di industri teknologi, memberikan kamu akses ke pengetahuan dan keterampilan praktis terbaru.
            </ArParagraph>
            <ArParagraph>
                <b>Bergabung Dengan Komunitas</b> <br />
                Kamu akan menjadi bagian dari komunitas belajar yang suportif, berkesempatan bertemu dengan orang-orang baru dan membangun jaringan kontak profesional.
            </ArParagraph>
            <ArParagraph>
                <b>Webinar</b> <br />
                Webinar Developer Handal memberikanmu kesempatan untuk mendapatkan wawasan dan pengetahuan tambahan dari para ahli di bidangnya.
            </ArParagraph>
        </Article>
        </>
    )
}