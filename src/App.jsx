import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Aos from "aos"; //ทำ animation สินค้า และ hero
import 'aos/dist/aos.css' //ทำ animation สินค้า และ hero
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscibe from "./components/Subscibe/Subscibe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

function App() {
  const [orderPopup,setOrderPopup]= useState(false)

  const handleOrderPopup=()=>{
    setOrderPopup(!orderPopup)
  }

  useEffect(()=>{
    Aos.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    })
    Aos.refresh()
  },[])
  return (
    <div className="bg-white dark:bg-gray-900
    dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Products/>
      <TopProducts handleOrderPopup={handleOrderPopup}/>
      <Banner/>
      <Subscibe/>
      <Testimonials/>
      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </div>
  );
}

export default App;
