"use client";

import Home from "./Home";
import Header from "../Component/Header";
import ContactInfo from "./New";
import Apoitment from "./Apoitment";
import Reachout from "./Reachout";
import Map from "../Component/Map";
import Footer from "../Component/Foter";

export default function ContactPage() {
  return (
    <>
      <Header />
      <Home />
      <ContactInfo />
      <Apoitment />
      <Reachout />
      <Map/>
      <Footer/>
    </>
  );
}
