"use client";

import { usePathname } from "next/navigation";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import LandingPage from "./components/Landing";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import { WindSong } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { Center, Flex, NavLink, Text, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import { navigationLinks } from "@/utils/constants";
import DropdownMenu from "./DropdownMenu";

const monsieurLaDoulaise = WindSong({ subsets: ["latin"], weight: ["400"] });

function Home() {
  const theme = useMantineTheme();
  const pathname = usePathname();
  // TODO: Make nav bar items link to component IDS
  // Define your refs
  const landingPageRef = useRef(null);
  const aboutRef = useRef(null);
  const reviewsRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactMeRef = useRef(null);

  const [activeSection, setActiveSection] = useState(null);

  // In your useEffect hook
  useEffect(() => {
    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          // observer.unobserve(entry.target);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(callback, options);

    if (landingPageRef.current) {
      observer.observe(landingPageRef.current);
    }

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    if (reviewsRef.current) {
      observer.observe(reviewsRef.current);
    }

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    if (contactMeRef.current) {
      observer.observe(contactMeRef.current);
    }

    // Cleanup
    return () => {
      if (landingPageRef.current) {
        observer.unobserve(landingPageRef.current);
      }

      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }

      if (reviewsRef.current) {
        observer.unobserve(reviewsRef.current);
      }

      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }

      if (portfolioRef.current) {
        observer.unobserve(portfolioRef.current);
      }

      if (contactMeRef.current) {
        observer.unobserve(contactMeRef.current);
      }
    };
  }, []); // Empty array means this effect runs once on mount and cleanup on unmount

  return (
    <>
      {/* navigation bar */}
      <Center id="aboutId" py="lg" pos="sticky" top={0} bg="white" w="100%" style={{ zIndex: 21 }}>
        <Flex w={1250} justify="space-between">
          <Text>
            {/* TODO: Upgrade logo */}
            <Link
              href="/"
              style={{ textDecoration: "none", color: "black", fontSize: "30px" }}
              className={monsieurLaDoulaise.className}
            >
              Daniella Garson
            </Link>
          </Text>

          <Flex visibleFrom="sm" gap="xl">
            {/* TODO: make active and hover colors correct */}
            {navigationLinks.map((link, linkIndex) => (
              <NavLink
                key={linkIndex}
                onClick={() => aboutRef.current?.scrollIntoView({ behavior: "smooth" })}
                label={link.label}
                variant="subtle"
                w="auto"
                tt="uppercase"
                c={activeSection === link.href ? theme.colors.persianPink[0] : "black"}
                style={{ letterSpacing: "3px", borderBottom: pathname === link.href ? "3px solid #7cafc4" : "none" }}
              />
            ))}
          </Flex>

          <DropdownMenu />
        </Flex>
      </Center>

      <LandingPage landingPageRef={landingPageRef} />
      <About aboutRef={aboutRef} />
      <Reviews reviewsRef={reviewsRef} />
      <Services servicesRef={servicesRef} />
      <Portfolio portfolioRef={portfolioRef} />
      <ContactMe contactMeRef={contactMeRef} />
    </>
  );
}
export default Home;
