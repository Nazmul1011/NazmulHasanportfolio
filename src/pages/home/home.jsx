// 


import React from "react";
import HeroSection from "./HeroSection";
import KeyFeaturesSection from "./KeyFeaturesSection";
import FlutterShowcase from "./FlutterShowcase";
import WebDevShowcase from "./WebDevShowcase";
import { FooterHome } from "./footerHome";
import Service from "./service";
import Testimonial from "./testimonial";
import ContactUs from "./Contactus";
import useScrollReveal from "../../components/useScrollReveal";


function Home() {
  // useScrollReveal(); // Removed duplicate call

  return (
    <>
      <div className="reveal">
        <section id="hero-section">
          <HeroSection />
        </section>
      </div>

      <div className="reveal">
        <section id="key-features-section">
          <KeyFeaturesSection />
        </section>
      </div>

      <FlutterShowcase />
      <WebDevShowcase />

      <div className="reveal" id="service-section">
        <Service />
      </div>

      <div className="reveal" id="testimonial-section">
        <Testimonial />
      </div>

      <div className="reveal" id="Contactus-section">
        <ContactUs />
      </div>

      {/* <div className="reveal">
        <FooterHome />
      </div> */}
    </>
  );
}

export default Home;
