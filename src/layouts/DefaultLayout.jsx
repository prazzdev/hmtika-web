import Header from "../compounds/Header";
import Footer from "../compounds/Footer";
import NavMenu from "../compounds/NavMenu";
import Meta from "../fragments/Meta";
import PageReadIndicator from "../fragments/PageReadIndicator";

const DefaultLayout = ({ children, pageTitle }) => {
  return (
    <>
      <Meta pageTitle={pageTitle} />
      <Header />
      {children}
      <NavMenu />
      <Footer />
      <PageReadIndicator />
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    </>
  );
};

export default DefaultLayout;
