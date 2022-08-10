import HeroSection from '../../components/HomeComponents/HeroSection/HeroSection';
import Products from '../../components/HomeComponents/Products/Products';
import Footer from '../../components/Layout/Footer/Footer';
import Navbar from '../../components/Layout/Navbar/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Products />
      <Footer />
    </>
  );
}

export default Home;
