import Image from "next/image";
import Home from "./Component/Home";
import WhyChose from "./Component/Whychose";
import ReviewComponent from "./Component/Review";
import Footer from "./Component/Foter";
import Map from "./Component/Map";
import Features from './Component/Features'
import Journey from "./Component/Journey";
import HearingAidsTypes from "./Component/HearingAidsTypes";
import HearingBanner from "./Component/HearingBanner";
import TopBrands from "./Component/TopBrands";

export default function Page() {
  return (
    <>
      <Home />
      <Features/>
      <WhyChose />
      <Journey/>
      <TopBrands/>
      <HearingAidsTypes />
      <Map/>
      <HearingBanner />
       
      <ReviewComponent/>
      <Footer/>
    </>
  );
}
