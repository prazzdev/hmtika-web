import Footer from "@/components/compounds/Footer";
import Header from "@/components/compounds/Header";
import NavMenu from "@/components/compounds/NavMenu";
import Meta from "@/components/fragments/Meta";
import PageReadIndicator from "@/components/fragments/PageReadIndicator";

const MainLayout = ({ children, pageTitle }) => {
  return (
    <>
      <Meta pageTitle={pageTitle} />
      <Header />
      {children}
      <NavMenu />
      <Footer />
      {/* <PageReadIndicator /> */}
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    </>
  );
};

export default MainLayout;
