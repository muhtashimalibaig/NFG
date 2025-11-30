import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Slider from "./components/Slider";
import HotProduct from "./components/HotProduct";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <Slider />
      <HotProduct />
    </>
  );
}
