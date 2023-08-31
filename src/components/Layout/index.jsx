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
    console.log(title)
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Header />
            {children}
            <NavMenu />
            <Footer />
        </>
    )
}