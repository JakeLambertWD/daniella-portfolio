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
import { motion } from "framer-motion";
import DropdownMenu from "./DropdownMenu";

const monsieurLaDoulaise = WindSong({ subsets: ["latin"], weight: ["400"] });

// TODO: Replace framer motion with Mantine's <Transition> component

function Home() {
  const theme = useMantineTheme();
  const pathname = usePathname();
  // Define your refs
  const landingPageRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const reviewsRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const portfolioRef = useRef<HTMLElement | null>(null);
  const contactMeRef = useRef<HTMLElement | null>(null);

  const navigationLinks = [
    { href: "aboutId", label: "Bio", ref: aboutRef },
    { href: "reviewsId", label: "Reviews", ref: reviewsRef },
    { href: "servicesId", label: "Services", ref: servicesRef },
    { href: "portfolioId", label: "Portfolio", ref: portfolioRef },
    { href: "contactMeId", label: "Contact", ref: contactMeRef },
  ];

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
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* TODO: Upgrade logo */}
            <Link
              href="/"
              style={{ textDecoration: "none", color: "black", fontSize: "30px" }}
              className={monsieurLaDoulaise.className}
            >
              Daniella Garson
            </Link>
          </motion.div>

          <Flex visibleFrom="sm" gap="xl">
            {/* TODO: make active and hover colors correct */}
            {navigationLinks.map((link, linkIndex) => (
              <NavLink
                key={linkIndex}
                onClick={() => {
                  const yOffset = -110; // adjust this value for your offset
                  let y;
                  if (link.ref.current) {
                    y = link.ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
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
