import Head from "next/head"
import Header from "../Header"
import Footer from "../Footer"
import NavMenu from "../NavMenu"

export default function Layout({ children, pageTitle }) {
    let title
    if(pageTitle === '') {
        title = 'Himpunan Mahasiswa Informatika | STIMIK Tunas Bangsa Banjarnegara'
    } else {
        title = `${pageTitle} | HMTIKA STB`
    }
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="title" content={title} />
                <meta name="description" content="Himpunan Mahasiswa Informatika (HMTIKA) merupakan salah satu himpunan bagi mahasiswa jurusan di STIMIK Tunas Bangsa Banjarnegara program studi Informatika." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://hmtika.site" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content="Himpunan Mahasiswa Informatika (HMTIKA) merupakan salah satu himpunan bagi mahasiswa jurusan di STIMIK Tunas Bangsa Banjarnegara program studi Informatika." />
                <meta property="og:image" content="https://hmtika.site/src/image/logo.webp" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://hmtika.site" />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content="Himpunan Mahasiswa Informatika (HMTIKA) merupakan salah satu himpunan bagi mahasiswa jurusan di STIMIK Tunas Bangsa Banjarnegara program studi Informatika." />
                <meta property="twitter:image" content="https://hmtika.site/src/image/logo.webp" />
                <link rel="icon" type="image/x-icon" href="https://hmtika.site/favicon.ico" />
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Header />
            {children}
            <NavMenu />
            <Footer />
            <script rc="https://unpkg.com/aos@next/dist/aos.js"></script>
        </>
    )
}