"use client";

import About from "./components/About";
import ContactMe from "./components/ContactMe";
import LandingPage from "./components/Landing";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

function Home() {
  return (
    <>
      <LandingPage />
      <About />
      <Services />
      <Portfolio />
      <Reviews />
      <ContactMe />
    </>
  );
}

export default Home;
