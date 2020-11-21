import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Section2 from './Section2';
import About from './About';
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Section2 />
      <About />
      <Footer />
    </>
  );
}
