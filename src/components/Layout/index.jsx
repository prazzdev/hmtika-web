import Head from "next/head"
import Header from "../Header"
import Footer from "../Footer"
import NavMenu from "../NavMenu"
import Meta from "../Meta"

export default function Layout({ children, pageTitle }) {
    return (
        <>
            <Meta pageTitle={pageTitle} />
            <Header />
            {children}
            <NavMenu />
            <Footer />
            <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        </>
    )
}