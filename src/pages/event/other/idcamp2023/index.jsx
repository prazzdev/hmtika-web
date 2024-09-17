import Article from "../../Article";
import ArParagraph from "../../Article/format/ArParagraph";
import ArTitle from "../../Article/format/ArTitle";
import ArOrList from "../../Article/format/ArOrList";

export default function index() {
  return (
    <>
      <Article
        pageTitle={
          "Membangun Digital Nation Indonesia melalui Beasiswa IDCamp 2023"
        }
        thumbnail={"/src/image/event/BLOG-Launching-Program-IDCamp.webp"}
        date={"12 Sep 2023"}
      >
        {/* main article */}
        <ArParagraph>
          Indonesia, dengan populasi lebih dari 270 juta orang, telah menjadi
          salah satu pasar digital terbesar di dunia. Pertumbuhan ekonomi
          digital yang pesat dan perubahan gaya hidup masyarakat Indonesia telah
          menciptakan permintaan yang tinggi akan talenta digital. Dalam era
          ini, kemampuan untuk menguasai teknologi, terutama dalam hal
          pemrograman dan pengembangan aplikasi, adalah suatu keharusan.
        </ArParagraph>
        <ArParagraph>
          Ketika kita melihat ke masa depan, kita sadar bahwa Indonesia harus
          memiliki sumber daya manusia yang siap bersaing di tingkat global di
          bidang teknologi dan inovasi digital. Inilah alasan utama di balik
          kelahiran IDCamp, sebuah program beasiswa coding daring yang didukung
          oleh Corporate Social Responsibility (CSR) Indosat Ooredoo Hutchison
          di bawah pilar Pendidikan Digital.
        </ArParagraph>
        <span></span>
        <ArTitle text={"IDCamp: Membangun Digital Nation Indonesia"} />
        <ArParagraph>
          Tujuan utama dari Program Beasiswa IDCamp adalah membangun Indonesia
          sebagai Digital Nation. Indonesia memiliki potensi besar untuk menjadi
          pemimpin di bidang teknologi dan inovasi, tetapi untuk mencapai
          potensi tersebut, kita harus memiliki talenta digital yang
          berkualitas.
        </ArParagraph>
        <ArParagraph>
          Dengan memperkenalkan puluhan ribu peserta ke dunia pemrograman,
          IDCamp bertujuan mencetak talenta digital Indonesia yang siap untuk
          menghadapi tantangan di dunia ekonomi digital. Program ini menawarkan
          berbagai manfaat, termasuk pelatihan coding, peluang berpartisipasi
          dalam event-event seputar karier dan teknologi terkini, workshop
          intensif, dan hackathon dengan hadiah senilai puluhan juta rupiah.
        </ArParagraph>
        <ArParagraph>
          Sejak peluncurannya pada tahun 2019, IDCamp telah sukses memberikan
          lebih dari 180.000 beasiswa coding kepada talenta digital Indonesia.
          Dan dengan semangat yang sama, IDCamp kembali hadir di tahun 2023,
          menawarkan akses belajar coding secara gratis kepada para developer
          Indonesia.
        </ArParagraph>
        <ArParagraph>
          Program IDCamp 2023 juga menyediakan tim fasilitator dan forum diskusi
          online untuk membantu peserta dalam menyelesaikan semua modul belajar
          secara mandiri, dari level menengah hingga profesional.
        </ArParagraph>
        <ArParagraph>
          Modul pelatihan online IDCamp dikembangkan oleh Dicoding, yang
          merupakan Google Authorized Training Partners di Indonesia. Dalam
          pengembangan materinya, Dicoding bekerja sama dengan Indosat Ooredoo
          Hutchison menggunakan use case yang sering dijumpai dalam dunia
          industri, terutama di bidang telekomunikasi dan digital. Selain itu,
          program ini juga diperkuat dengan metode mentoring secara online.
        </ArParagraph>
        <ArParagraph>
          Pada akhir program, para lulusan IDCamp yang terbaik akan dibantu oleh
          Indosat Ooredoo Hutchison dan Dicoding untuk mendapatkan sertifikasi
          global dan akses pekerjaan, sehingga mereka siap untuk berkarier di
          dunia industri digital.
        </ArParagraph>
        <span></span>
        <ArTitle text={"Mengapa Kita Membutuhkan Talenta Digital?"} />
        <ArParagraph>
          Dalam era digital ini, talenta digital adalah aset yang sangat
          berharga. Mereka adalah orang-orang yang membangun aplikasi yang kita
          gunakan sehari-hari, merancang solusi-solusi inovatif, dan mendorong
          pertumbuhan ekonomi melalui teknologi. Kita membutuhkan lebih banyak
          talenta digital untuk memastikan bahwa Indonesia tidak hanya mengikuti
          tren digital, tetapi juga menjadi pemimpin di industri ini.
        </ArParagraph>
        <ArParagraph>
          Para talenta digital tidak hanya akan membentuk masa depan ekonomi
          digital Indonesia tetapi juga akan membantu menciptakan lapangan
          pekerjaan dan peluang bisnis baru. Mereka adalah motor penggerak
          inovasi dan pertumbuhan.
        </ArParagraph>
        <span></span>
        <ArTitle text={"Materi Pelatihan IDCamp 2023"} />
        <ArParagraph>
          Peserta IDCamp 2023 dapat memilih salah satu dari 8 alur belajar yang
          mencakup berbagai aspek teknologi:
        </ArParagraph>
        <ArOrList>
          <li>
            <a
              href="https://www.dicoding.com/learningpaths/7"
              className="text-blue-500 underline"
            >
              Android Developer
            </a>
          </li>
          <li>
            <a
              href="https://www.dicoding.com/learningpaths/22"
              className="text-blue-500 underline"
            >
              Front-End Web Developer
            </a>
          </li>
          <li>
            <a
              href="https://www.dicoding.com/learningpaths/30"
              className="text-blue-500 underline"
            >
              Machine Learning Developer
            </a>{" "}
            dan kesempatan meraih{" "}
            <a
              href="https://www.tensorflow.org/certificate"
              className="text-blue-500 underline"
            >
              Sertifikasi Global Tensorflow
            </a>
          </li>
          <li>
            <a
              href="https://www.dicoding.com/learningpaths/41"
              className="text-blue-500 underline"
            >
              Back-End Developer
            </a>
          </li>
          <li>
            <a
              href="https://www.dicoding.com/learningpaths/21"
              className="text-blue-500 underline"
            >
              Multi-Platform App Developer
            </a>
          </li>
          <li>
            <a
              href="https://www.dicoding.com/learningpaths/58"
              className="text-blue-500 underline"
            >
              React Developer
            </a>
          </li>
          <li>
            <a
              href="https://www.dicoding.com/learningpaths/53"
              className="text-blue-500 underline"
            >
              DevOps Engineer
            </a>
          </li>
          <li>
            <a
              href="https://www.dicoding.com/learningpaths/60"
              className="text-blue-500 underline"
            >
              Data Scientist
            </a>{" "}
            (BARU!)
          </li>
        </ArOrList>
        <ArParagraph>
          Bonus kelas pengenalan ke Cyber Security (segera hadir).
        </ArParagraph>
        <span></span>
        <ArTitle text={"Program Beasiswa IDCamp 2023"} />
        <ArParagraph>
          Program Beasiswa IDCamp 2023 terbuka untuk seluruh Warga Negara
          Indonesia (WNI) tanpa dipungut biaya apapun (GRATIS). Periode
          pendaftaran dibuka dari 11 September hingga 24 November 2023.
        </ArParagraph>
        <ArParagraph>
          Daftar sekarang juga melalui:{" "}
          <a
            href="https://idcamp.ioh.co.id"
            className="text-blue-500 underline"
          >
            idcamp.ioh.co.id
          </a>
        </ArParagraph>
        <ArParagraph>
          Yuk, jadilah bagian dari perubahan! Bergabunglah dengan IDCamp dan
          bantu membangun Indonesia sebagai Digital Nation. Bersama-sama, kita
          dapat menciptakan masa depan yang cerah dalam dunia digital.
        </ArParagraph>
        <ArParagraph>
          Salam, <b>Indosat Ooredoo Hutchison Digital Camp</b>
        </ArParagraph>
      </Article>
    </>
  );
}
