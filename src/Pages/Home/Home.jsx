import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroSection from "../../components/HomeComponents/HeroSection/HeroSection";
import Products from "../../components/HomeComponents/Products/Products";
import Footer from "../../components/Layout/Footer/Footer";
import Navbar from "../../components/Layout/Navbar/Navbar";
import { getAllProducts } from "../../store/product/actions";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  const fetchAllProducts = async () => {
    await dispatch(getAllProducts());
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <Products products={products} />
      <Footer />
    </>
  );
}

export default Home;
