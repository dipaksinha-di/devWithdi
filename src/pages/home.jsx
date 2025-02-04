import React from "react";
import Hero from "../sections/Hero";
import AboutUs from "../sections/AboutUs";
import Team from "../sections/Team";
import Services from "../sections/Services";
import Pricing from "../sections/Pricing";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Us Section */}
      <section id="about">
        <AboutUs />
      </section>

      {/* Our Teams Section */}
      <section id="team">
        <Team />
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <Pricing />
      </section>

      {/* Testimonial Section */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <Faq />
      </section>

      {/* Contact Us Section */}
      <section id="contact">
        <Contact />
      </section>
      <section>
        <ScrollToTop />
      </section>
    </div>
  );
}
